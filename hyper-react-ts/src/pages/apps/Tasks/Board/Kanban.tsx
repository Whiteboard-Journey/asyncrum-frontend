import { Row, Col, OverlayTrigger, Tooltip, Modal, Button } from 'react-bootstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { FormInput, HyperDatepicker, PageTitle } from 'components';
import TaskItem from './Task';
import { useKanban } from '../hooks';

const Kanban = () => {
    const {
        state,
        register,
        control,
        errors,
        handleSubmit,
        toggleNewTaskModal,
        newTask,
        onDragEnd,
        handleDateChange,
        handleNewTask,
    } = useKanban();

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
                                            overlay={<Tooltip>Add New Todo Task</Tooltip>}
                                        >
                                            <button
                                                className="btn btn-link p-0 text-secondary float-end shadow-none px-0 py-2"
                                                id="addNewTodo"
                                                onClick={() => newTask('Pending', 'todoTasks')}
                                            >
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
                                                        {...provided.dragHandleProps}
                                                    >
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
                                            overlay={<Tooltip>Add New In-progress Task</Tooltip>}
                                        >
                                            <button
                                                className="btn btn-link p-0 text-secondary float-end shadow-none px-0 py-2"
                                                id="addInprogressTask"
                                                onClick={() => newTask('Inprogress', 'inprogressTasks')}
                                            >
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
                                                        {...provided.dragHandleProps}
                                                    >
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
                                            overlay={<Tooltip>Add New Review Task</Tooltip>}
                                        >
                                            <button
                                                className="btn btn-link p-0 text-secondary float-end shadow-none px-0 py-2"
                                                id="addReviewTask"
                                                onClick={() => newTask('Review', 'reviewTasks')}
                                            >
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
                                                        {...provided.dragHandleProps}
                                                    >
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
                                            overlay={<Tooltip>Add New Completed Task</Tooltip>}
                                        >
                                            <button
                                                className="btn btn-link p-0 text-secondary float-end shadow-none px-0 py-2"
                                                id="addNewDone"
                                                onClick={() => newTask('Done', 'doneTasks')}
                                            >
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
                                                        {...provided.dragHandleProps}
                                                    >
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
                                control={control}
                            >
                                <option value="-1">Select</option>
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
                                        control={control}
                                    >
                                        <option value={-1}>Select</option>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
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
                                        control={control}
                                    >
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

export { Kanban };
