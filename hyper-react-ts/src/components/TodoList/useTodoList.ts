import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type TodoDataItem = {
    id: number;
    text: string;
    done: boolean;
};

export default function useTodoList() {
    // default todo data
    const [todoData, setTodoData] = useState<TodoDataItem[]>([
        {
            id: 1,
            text: 'Design One page theme',
            done: false,
        },
        {
            id: 2,
            text: 'Build a js based app',
            done: true,
        },
        {
            id: 3,
            text: 'Creating component page',
            done: true,
        },
        {
            id: 4,
            text: 'Testing??',
            done: true,
        },
        {
            id: 5,
            text: 'Hehe!! This looks cool!',
            done: false,
        },
        {
            id: 6,
            text: 'Create new version 3.0',
            done: false,
        },
        {
            id: 7,
            text: 'Build an angular app',
            done: true,
        },
    ]);

    /*
     * form validation schema
     */
    const schemaResolver = yupResolver(
        yup.object().shape({
            newTodo: yup.string().required('Please enter your task name'),
        })
    );

    /*
     * form methods
     */
    const methods = useForm({ resolver: schemaResolver });
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
        reset,
    } = methods;

    /**
     * Saves the todo
     */
    const saveTodo = (value: Record<string, string>) => {
        let newTodo = [...todoData];
        newTodo.push({
            id: todoData.length + 1,
            text: value['newTodo'],
            done: false,
        });
        setTodoData(newTodo);
        reset();
    };

    /**
     * Returns the remaining todos
     */
    const getInprogressTodos = () => {
        return todoData.filter((item) => item.done === false);
    };

    /**
     * Archives the todos
     */
    const archiveTodos = () => {
        setTodoData(todoData.filter((item) => item.done !== true));
    };

    /**
     * Toggle the status
     * @param todoItem todo item
     */
    const toggleTodo = (todoItem: TodoDataItem, index: number) => {
        const newTodoData = todoData.map((todo, i) => {
            return index === i ? Object.assign(todo, { done: !todoItem.done }) : todo;
        });
        setTodoData(newTodoData);
    };

    return {
        register,
        control,
        errors,
        todoData,
        handleSubmit,
        archiveTodos,
        toggleTodo,
        saveTodo,
        getInprogressTodos,
    };
}
