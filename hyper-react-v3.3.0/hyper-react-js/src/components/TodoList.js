// @flow
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Row, Col, Card, Button } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// components
import { FormInput } from './';
import CardTitle from './CardTitle';

type TodoListProps = {
    addTodo?: boolean,
    height?: string,
};

type TodoDataItems = {
    id: number,
    text: string,
    done: boolean,
};

type TodoListState = {
    todoData?: Array<TodoDataItems>,
};

const TodoList = ({ addTodo, height }: TodoListProps, state: TodoListState): React$Element<any> => {
    const addTodos = addTodo ? addTodo : false;

    // default todo data
    const [todoData, setTodoData] = useState([
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
    const saveTodo = (e, values) => {
        let newTodo = [...todoData];
        newTodo.push({
            id: todoData.length + 1,
            text: values.target[0].value,
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
    const toggleTodo = (todoItem, index) => {
        const newTodoData = todoData.map((todo, i) => {
            return index === i ? Object.assign(todo, { done: !todoItem.done }) : todo;
        });
        setTodoData(newTodoData);
    };

    return (
        <Card>
            <Card.Body className="pb-0">
                <CardTitle
                    containerClass="d-flex align-items-center justify-content-between mb-2"
                    title="ToDo"
                    menuItems={[{ label: 'Settings' }, { label: 'Action' }]}
                />
            </Card.Body>
            <div className="todoapp">
                <Card.Body className="p-0">
                    {addTodos ? (
                        <>
                            <Row className="px-3">
                                <Col>
                                    <h5 id="todo-message">
                                        <span id="todo-remaining">{getInprogressTodos().length}</span> of{' '}
                                        <span id="todo-total">{todoData.length}</span> remaining
                                    </h5>
                                </Col>
                                <Col className="col-auto">
                                    <Button
                                        className="float-end btn-sm"
                                        variant="light"
                                        id="btn-archive"
                                        onClick={archiveTodos}>
                                        Archive
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <SimpleBar className="px-3" style={{ maxHeight: height }}>
                                        <ul className="list-group list-group-flush todo-list" id="todo-list">
                                            {todoData.map((todo, index) => {
                                                return (
                                                    <li key={index} className="list-group-item border-0 ps-0">
                                                        {todo.done ? (
                                                            <div className="form-check mb-0">
                                                                <input
                                                                    type="checkbox"
                                                                    className="form-check-input todo-done"
                                                                    id={todo.id}
                                                                    checked={todo.done}
                                                                    onChange={() => toggleTodo(todo, index)}
                                                                />
                                                                <label className="form-check-label" htmlFor={todo.id}>
                                                                    <s>{todo.text}</s>
                                                                </label>
                                                            </div>
                                                        ) : (
                                                            <div className="form-check mb-0">
                                                                <input
                                                                    type="checkbox"
                                                                    className="form-check-input todo-done"
                                                                    id={todo.id}
                                                                    checked={todo.done}
                                                                    onChange={() => toggleTodo(todo, index)}
                                                                />
                                                                <label className="form-check-label" htmlFor={todo.id}>
                                                                    {todo.text}
                                                                </label>
                                                            </div>
                                                        )}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </SimpleBar>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <form
                                        name="todo-form"
                                        id="todo-form"
                                        onSubmit={handleSubmit(saveTodo)}
                                        className="needs-validation mx-3 mb-3">
                                        <Row>
                                            <Col>
                                                <FormInput
                                                    type="text"
                                                    name="newTodo"
                                                    className="form-control"
                                                    placeholder="Add new todo"
                                                    register={register}
                                                    key="newTodo"
                                                    errors={errors}
                                                    control={control}
                                                />
                                            </Col>
                                            <Col className="col-auto">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary waves-effect waves-light">
                                                    Add
                                                </button>
                                            </Col>
                                        </Row>
                                    </form>
                                </Col>
                            </Row>
                        </>
                    ) : (
                        <Row>
                            <Col>
                                <SimpleBar className="px-3" style={{ maxHeight: height }}>
                                    <ul className="list-group list-group-flush todo-list" id="todo-list">
                                        {todoData.map((todo, index) => {
                                            return (
                                                <li key={index} className="list-group-item border-0 ps-0">
                                                    {todo.done ? (
                                                        <div className="form-check mb-0">
                                                            <input
                                                                type="checkbox"
                                                                className="form-check-input todo-done"
                                                                id={todo.id}
                                                                checked={todo.done}
                                                                onChange={() => toggleTodo(todo, index)}
                                                            />
                                                            <label className="form-check-label" htmlFor={todo.id}>
                                                                <s>{todo.text}</s>
                                                            </label>
                                                        </div>
                                                    ) : (
                                                        <div className="form-check mb-0">
                                                            <input
                                                                type="checkbox"
                                                                className="form-check-input todo-done"
                                                                id={todo.id}
                                                                checked={todo.done}
                                                                onChange={() => toggleTodo(todo, index)}
                                                            />
                                                            <label className="form-check-label" htmlFor={todo.id}>
                                                                {todo.text}
                                                            </label>
                                                        </div>
                                                    )}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </SimpleBar>
                            </Col>
                        </Row>
                    )}
                </Card.Body>
            </div>
        </Card>
    );
};

export default TodoList;
