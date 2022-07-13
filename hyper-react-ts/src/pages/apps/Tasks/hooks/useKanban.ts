import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { DropResult } from 'react-beautiful-dnd';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { KanbanTaskItem } from '../types';
import { tasks } from '../Board/data';
import defaultAvatar from 'assets/images/users/avatar-1.jpg';

type TaskQueue = 'todoTasks' | 'inprogressTasks' | 'reviewTasks' | 'doneTasks';

type NewTask = {
    dueDate: Date;
    userAvatar: string;
    status: string;
    queue: TaskQueue;
};

type StateType = {
    todoTasks: Array<KanbanTaskItem>;
    inprogressTasks: Array<KanbanTaskItem>;
    reviewTasks: Array<KanbanTaskItem>;
    doneTasks: Array<KanbanTaskItem>;
    totalTasks: number;
    newTaskModal: boolean;
    newTask: NewTask | null;
};

export default function useKanban() {
    const [state, setState] = useState<StateType>({
        todoTasks: tasks.filter((t) => t.status === 'Pending'),
        inprogressTasks: tasks.filter((t) => t.status === 'Inprogress'),
        reviewTasks: tasks.filter((t) => t.status === 'Review'),
        doneTasks: tasks.filter((t) => t.status === 'Done'),
        totalTasks: tasks.length,
        newTaskModal: false,
        newTask: null,
    });

    /*
     * Form validation schema
     */
    const schemaResolver = yupResolver(
        yup.object().shape({
            project: yup.string().required().notOneOf(['-1'], 'Select Project'),
            title: yup.string().required(),
            priority: yup.string().required('Select priority').notOneOf(['-1'], 'Select Priority'),
            description: yup.string().required(),
            user: yup.string().required(),
        })
    );

    /*
     * Form methods
     */
    const methods = useForm({ resolver: schemaResolver });
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;

    /**
     * Toggles the new task modal
     */
    const toggleNewTaskModal = () => {
        setState({
            ...state,
            newTaskModal: !state.newTaskModal,
        });
    };

    /**
     * Creates new empty task with given status
     */
    const newTask = (status: string, queue: TaskQueue) => {
        setState({
            ...state,
            newTask: {
                dueDate: new Date(),
                userAvatar: defaultAvatar,
                status: status,
                queue: queue,
            },
            newTaskModal: true,
        });
    };

    /**
     * When date changes
     * @param {} date
     */
    const handleDateChange = (date: Date) => {
        if (state.newTask) {
            setState({
                ...state,
                newTask: { ...state.newTask, dueDate: date },
            });
        }
    };

    /*
     * reordering the result
     */
    const reorder = (list: KanbanTaskItem[], startIndex: number, endIndex: number) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    /**
     * Moves an item from one list to another list.
     */
    const move = (
        source: Iterable<unknown> | ArrayLike<unknown>,
        destination: Iterable<unknown> | ArrayLike<unknown>,
        droppableSource: { index: number; droppableId: string | number },
        droppableDestination: { index: number; droppableId: string | number }
    ) => {
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        const [removed] = sourceClone.splice(droppableSource.index, 1);
        destClone.splice(droppableDestination.index, 0, removed);
        const result: Record<string | number, Object> = {};
        result[droppableSource.droppableId] = sourceClone;
        result[droppableDestination.droppableId] = destClone;

        return result;
    };

    /**
     * Gets the list
     */
    const getList = (id: TaskQueue) => {
        const modifiedState: StateType = { ...state };
        const stateTasks: KanbanTaskItem[] = modifiedState[id] && modifiedState[id];
        return stateTasks;
    };

    /**
     * On drag end
     */
    const onDragEnd = (result: DropResult) => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }
        if (source.droppableId === destination.droppableId) {
            const items = reorder(getList(source.droppableId as TaskQueue), source.index, destination.index);
            let localState: StateType = { ...state };
            localState[source.droppableId as TaskQueue] = items;
            setState(localState);
        } else {
            const result = move(
                getList(source.droppableId as TaskQueue),
                getList(destination.droppableId as TaskQueue),
                source,
                destination
            );
            const localState = { ...state, ...result };
            setState(localState);
        }
    };

    /**
     * Handles the new task form submission
     */
    const handleNewTask = (values: Record<string, string>) => {
        const formData = {
            project: values['project'],
            title: values['title'],
            priority: values['priority'],
            description: values['description'],
            user: values['user'],
        };
        const newTask = {
            ...state.newTask!,
            ...formData,
            id: state.totalTasks + 1,
            dueDate: state.newTask!.dueDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            }),
            totalComments: 0,
            totalSubTasks: 0,
        };

        var localState: StateType = { ...state };

        if (newTask) {
            var tasks = localState[newTask.queue];
            tasks.push(newTask);
            localState[newTask.queue] = tasks;
            localState['newTask'] = null;
            localState['newTaskModal'] = false;
            localState['totalTasks'] = localState.totalTasks + 1;
            setState(localState);
        }
    };

    return {
        state,
        handleSubmit,
        register,
        control,
        errors,
        toggleNewTaskModal,
        newTask,
        onDragEnd,
        handleDateChange,
        handleNewTask,
    };
}
