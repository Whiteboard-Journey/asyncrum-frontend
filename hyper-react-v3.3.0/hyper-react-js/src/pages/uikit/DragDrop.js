// @flow
import React, { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import classNames from 'classnames';

// components
import PageTitle from '../../components/PageTitle';

const Item = ({ color }) => {
    return (
        <Card className={classNames('mb-0', 'mt-3', 'text-white', 'bg-' + color)}>
            <Card.Body>
                <blockquote className="card-bodyquote mb-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer>
                        Someone famous in <cite title="Source Title">Source Title</cite>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
};

/**
 * Reorders the list
 * @param {*} list
 * @param {*} startIndex
 * @param {*} endIndex
 */
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

// DragDrop
const DragDrop = (): React$Element<React$FragmentType> => {
    const [items, setItems] = useState(['primary', 'success', 'info', 'danger']);

    /**
     * On drag ends
     * @param {3} result
     */
    const onDragEnd = (result) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const localItems = reorder(items, result.source.index, result.destination.index);
        setItems(localItems);
    };
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Extended UI', path: '/ui/dragdrop' },
                    { label: 'Drag and Drop', path: '/ui/dragdrop', active: true },
                ]}
                title={'Drag and Drop'}
            />

            <Row>
                <Col>
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <Droppable droppableId="droppable" direction="horizontal">
                                            {(provided, snapshot) => (
                                                <div {...provided.droppableProps} ref={provided.innerRef}>
                                                    <h4 className="header-title">Simple Drag and Drop Example</h4>
                                                    <p className="text-muted font-14">Drag and drop cards in a list</p>
                                                    <div className="d-flex">
                                                        {items.map((color, index) => (
                                                            <Draggable key={color} draggableId={color} index={index}>
                                                                {(provided, snapshot) => (
                                                                    <div
                                                                        className="me-2"
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}>
                                                                        <Item color={color} />
                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        ))}
                                                        {provided.placeholder}
                                                    </div>
                                                </div>
                                            )}
                                        </Droppable>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </DragDropContext>
                </Col>
            </Row>
        </>
    );
};

export default DragDrop;
