// @flow
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Row, Col, OverlayTrigger, Tooltip, Modal, Button } from 'react-bootstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// components
import PageTitle from '../../../../components/PageTitle';
import HyperDatepicker from '../../../../components/Datepicker';
import { FormInput } from '../../../../components/';

import TaskItem from './Task';

// dummy data
import { tasks } from './Data';

// images
import defaultAvatar from '../../../../assets/images/users/avatar-1.jpg';

type StateType = {
    todoTasks: Array<any>,
    inprogressTasks: Array<any>,
    reviewTasks: Array<any>,
    doneTasks: Array<any>,
    totalTasks: number,
    newTaskModal: boolean,
    newTask: any,
};

// kanban
const Kanban = (): React$Element<React$FragmentType> => {
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
            project: yup.string().required(),
            title: yup.string().required(),
            priority: yup.string().required(),
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
    const newTask = (status, queue) => {
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
    const handleDateChange = (date) => {
        if (state.newTask) {
            setState({
                ...state,
                newTask: { ...state.newTask, dueDate: date },
            });
        }
    };

    // a little function to help us with reordering the result
    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    /**
     * Moves an item from one list to another list.
     */
    const move = (source, destination, droppableSource, droppableDestination) => {
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        const [removed] = sourceClone.splice(droppableSource.index, 1);
        destClone.splice(droppableDestination.index, 0, removed);
        const result = {};
        result[droppableSource.droppableId] = sourceClone;
        result[droppableDestination.droppableId] = destClone;

        return result;
    };

    /**
     * Gets the list
     */
    const getList = (id) => state[id];

    /**
     * On drag end
     */
    const onDragEnd = (result) => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }
        if (source.droppableId === destination.droppableId) {
            const items = reorder(getList(source.droppableId), source.index, destination.index);
            let localState = { ...state };
            localState[source.droppableId] = items;
            setState(localState);
        } else {
            const result = move(getList(source.droppableId), getList(destination.droppableId), source, destination);
            const localState = { ...state, ...result };
            setState(localState);
        }
    };

    /**
     * Handles the new task form submission
     */
    const handleNewTask = (event, values) => {
        const formData = {
            project: values.target['project'].value,
            title: values.target['title'].value,
            priority: values.target['priority'].value,
            description: values.target['description'].value,
            user: values.target['user'].value,
        };
        const newTask = {
            ...state.newTask,
            ...formData,
            id: state.totalTasks + 1,
            dueDate: state.newTask.dueDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            }),
            totalComments: 0,
        };

        var localState = { ...state };
        var tasks = localState[newTask.queue];
        tasks.push(newTask);
        localState[newTask.queue] = tasks;
        localState['newTask'] = {
            dueDate: new Date(),
            userAvatar: '',
            status: '',
            queue: '',
        };
        localState['newTaskModal'] = false;
        localState['totalTasks'] = localState.totalTasks + 1;
        setState(localState);
    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Tasks', path: 'apps/tasks/kanban' },
                    { label: 'Kanban', path: 'apps/tasks/kanban', active: true },
                ]}
                title={'Kanban'}
            />
            <Row>
                <Col>
                    <DragDropContext onDragEnd={onDragEnd}>
                        <div className="board">
                            {/* todo */}
                            <Droppable droppableId="todoTasks">
                                {(provided, snapshot) => (
                                    <div className="tasks" ref={provided.innerRef}>
                                        <OverlayTrigger
                                            key="bottom"
                                            placement="bottom"
                                            overlay={<Tooltip>Add New Todo Task</Tooltip>}>
                                            <button
                                                className="btn btn-link p-0 text-secondary float-end shadow-none px-0 py-2"
                                                id="addNewTodo"
                                                onClick={() => newTask('Pending', 'todoTasks')}>
                                                <i className="mdi mdi-plus"></i>
                                            </button>
                                        </OverlayTrigger>

                                        <h5 className="mt-0 task-header">TODO ({state.todoTasks.length})</h5>

                                        {state.todoTasks.length === 0 && (
                                            <p className="text-center text-muted pt-2 mb-0">No Tasks</p>
                                        )}

                                        {state.todoTasks.map((item, index) => (
                                            <Draggable key={item.id} draggableId={item.id + ''} index={index}>
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}>
                                                        <TaskItem task={item} />
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>

                            {/* in progress */}
                            <Droppable droppableId="inprogressTasks">
                                {(provided, snapshot) => (
                                    <div ref={provided.innerRef} className="tasks">
                                        <OverlayTrigger
                                            key="bottom"
                                            placement="bottom"
                                            overlay={<Tooltip>Add New In-progress Task</Tooltip>}>
                                            <button
                                                className="btn btn-link p-0 text-secondary float-end shadow-none px-0 py-2"
                                                id="addInprogressTask"
                                                onClick={() => newTask('Inprogress', 'inprogressTasks')}>
                                                <i className="mdi mdi-plus"></i>
                                            </button>
                                        </OverlayTrigger>

                                        <h5 className="mt-0 task-header text-uppercase">
                                            In Progress ({state.inprogressTasks.length})
                                        </h5>
                                        {state.inprogressTasks.length === 0 && (
                                            <p className="text-center text-muted pt-2 mb-0">No Tasks</p>
                                        )}

                                        {state.inprogressTasks.map((item, index) => (
                                            <Draggable key={item.id} draggableId={item.id + ''} index={index}>
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}>
                                                        <TaskItem task={item} />
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>

                            {/* review */}
                            <Droppable droppableId="reviewTasks">
                                {(provided, snapshot) => (
                                    <div ref={provided.innerRef} className="tasks">
                                        <OverlayTrigger
                                            key="bottom"
                                            placement="bottom"
                                            overlay={<Tooltip>Add New Review Task</Tooltip>}>
                                            <button
                                                className="btn btn-link p-0 text-secondary float-end shadow-none px-0 py-2"
                                                id="addReviewTask"
                                                onClick={() => newTask('Review', 'reviewTasks')}>
                                                <i className="mdi mdi-plus"></i>
                                            </button>
                                        </OverlayTrigger>

                                        <h5 className="mt-0 task-header text-uppercase">
                                            Review ({state.reviewTasks.length})
                                        </h5>
                                        {state.reviewTasks.length === 0 && (
                                            <p className="text-center text-muted pt-2 mb-0">No Tasks</p>
                                        )}

                                        {state.reviewTasks.map((item, index) => (
                                            <Draggable key={item.id} draggableId={item.id + ''} index={index}>
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}>
                                                        <TaskItem task={item} />
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>

                            {/* done */}
                            <Droppable droppableId="doneTasks">
                                {(provided, snapshot) => (
                                    <div ref={provided.innerRef} className="tasks">
                                        <OverlayTrigger
                                            key="bottom"
                                            placement="bottom"
                                            overlay={<Tooltip>Add New Completed Task</Tooltip>}>
                                            <button
                                                className="btn btn-link p-0 text-secondary float-end shadow-none px-0 py-2"
                                                id="addNewDone"
                                                onClick={() => newTask('Done', 'doneTasks')}>
                                                <i className="mdi mdi-plus"></i>
                                            </button>
                                        </OverlayTrigger>

                                        <h5 className="mt-0 task-header text-uppercase">
                                            Done ({state.doneTasks.length})
                                        </h5>
                                        {state.doneTasks.length === 0 && (
                                            <p className="text-center text-muted pt-2 mb-0">No Tasks</p>
                                        )}

                                        {state.doneTasks.map((item, index) => (
                                            <Draggable key={item.id} draggableId={item.id + ''} index={index}>
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}>
                                                        <TaskItem task={item} />
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </div>
                    </DragDropContext>
                </Col>
            </Row>

            {/* new task model */}
            {state.newTask && (
                <Modal show={state.newTaskModal} onHide={toggleNewTaskModal} size="lg" centered>
                    <Modal.Header closeButton>
                        <h4 className="modal-title">Create New Task</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit(handleNewTask)} className="p-2">
                            <FormInput
                                name="project"
                                label="Project"
                                type="select"
                                containerClass="mb-3"
                                className="form-select form-control-light"
                                register={register}
                                key="project"
                                errors={errors}
                                control={control}>
                                <option>Select</option>
                                <option>Hyper</option>
                                <option>CRM</option>
                                <option>iOS App</option>
                            </FormInput>

                            <Row>
                                <Col md={8}>
                                    <FormInput
                                        name="title"
                                        label="Title"
                                        placeholder="Enter title"
                                        type="text"
                                        containerClass="mb-3"
                                        className="form-control form-control-light"
                                        register={register}
                                        key="title"
                                        errors={errors}
                                        control={control}
                                    />
                                </Col>
                                <Col md={4}>
                                    <FormInput
                                        name="priority"
                                        label="Priority"
                                        type="select"
                                        containerClass="mb-3"
                                        className="form-select form-control-light"
                                        register={register}
                                        key="priority"
                                        errors={errors}
                                        control={control}>
                                        <option>Select</option>
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                    </FormInput>
                                </Col>
                            </Row>

                            <FormInput
                                name="description"
                                label="Description"
                                type="textarea"
                                containerClass="mb-3"
                                className="form-control form-control-light"
                                rows="3"
                                register={register}
                                key="description"
                                errors={errors}
                                control={control}
                            />

                            <Row>
                                <Col md={6}>
                                    <FormInput
                                        name="user"
                                        label="Assign To"
                                        type="select"
                                        containerClass="mb-3"
                                        className="form-select form-control-light"
                                        register={register}
                                        key="user"
                                        errors={errors}
                                        control={control}>
                                        <option>Select</option>
                                        <option>Coderthemes</option>
                                        <option>Robert Carlile</option>
                                        <option>Louis Allen</option>
                                        <option>Sean White</option>
                                        <option>Riley Steele</option>
                                        <option>Zak Turnbull</option>
                                    </FormInput>
                                </Col>
                                <Col md={6}>
                                    <div className="form-group">
                                        <label className="form-label">Due Date</label> <br />
                                        <HyperDatepicker
                                            hideAddon={true}
                                            dateFormat="yyyy-MM-dd"
                                            value={state.newTask.dueDate}
                                            onChange={(date) => {
                                                handleDateChange(date);
                                            }}
                                        />
                                    </div>
                                </Col>
                            </Row>

                            <div className="text-end">
                                <Button variant="light" type="button" className="me-1" onClick={toggleNewTaskModal}>
                                    Cancel
                                </Button>
                                <Button variant="primary" type="submit">
                                    Create
                                </Button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            )}
        </>
    );
};

export default Kanban;
