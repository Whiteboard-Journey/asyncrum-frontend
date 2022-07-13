import { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import classNames from 'classnames';
import { ReactSortable } from 'react-sortablejs';
import { PageTitle } from 'components';
import user1 from 'assets/images/users/avatar-2.jpg';
import user2 from 'assets/images/users/avatar-3.jpg';
import user3 from 'assets/images/users/avatar-4.jpg';
import user4 from 'assets/images/users/avatar-5.jpg';
import user5 from 'assets/images/users/avatar-6.jpg';
import user7 from 'assets/images/users/avatar-1.jpg';

type Color = {
    id: number;
    color: string;
};

type TeamMember = {
    id: number;
    name: string;
    avatar: string;
    position: string;
    desc?: string;
};

const MovableCard = ({ item }: { item: Color }) => {
    return (
        <Card className={classNames('mb-0', 'mt-3', 'text-white', 'bg-' + item.color)}>
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

const MovableCard2 = ({ item }: { item: TeamMember }) => {
    return (
        <Card className="mb-0 mt-2">
            <Card.Body>
                <div className="d-flex align-itames-start">
                    <img src={item.avatar} alt="" className="me-3 d-none d-sm-block avatar-sm rounded-circle" />
                    <div className="w-100">
                        <h5 className="mb-1 mt-0">{item.name}</h5>
                        <p> {item.position} </p>
                        <p className="mb-0 text-muted">
                            <span className="fst-italic">
                                <b>"</b>
                                {item.desc}
                            </span>
                        </p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

const MovableCard3 = ({ item }: { item: TeamMember }) => {
    return (
        <Card className="mb-0 mt-2">
            <Card.Body>
                <div className="d-flex align-itames-start">
                    <img src={item.avatar} alt="" className="me-3 d-none d-sm-block avatar-sm rounded-circle" />
                    <div className="w-100 overflow-hidden">
                        <h5 className="mb-1 mt-1">{item.name}</h5>
                        <p className="mb-0"> {item.position} </p>
                    </div>
                    <span className="dragula-handle"></span>
                </div>
            </Card.Body>
        </Card>
    );
};

const DragDrop = () => {
    const [items, setItems] = useState<Color[]>([
        {
            id: 1,
            color: 'primary',
        },
        {
            id: 2,
            color: 'secondary',
        },
        {
            id: 3,
            color: 'success',
        },
        {
            id: 4,
            color: 'info',
        },
        {
            id: 5,
            color: 'warning',
        },
        {
            id: 6,
            color: 'danger',
        },
    ]);

    const [team1, setTeam1] = useState<TeamMember[]>([
        {
            id: 1,
            name: 'Louis K. Bond',
            avatar: user7,
            position: 'Founder & CEO',
            desc: "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
        },
        {
            id: 2,
            name: 'Dennis N. Cloutier',
            avatar: user1,
            position: 'Software Engineer',
            desc: "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
        },
        {
            id: 3,
            name: 'Susan J. Sander',
            avatar: user2,
            position: 'Web Designer',
            desc: "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
        },
    ]);

    const [team2, setTeam2] = useState<TeamMember[]>([
        {
            id: 1,
            name: 'James M. Short',
            avatar: user3,
            position: 'Web Developer',
            desc: "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
        },
        {
            id: 2,
            name: 'Gabriel J. Snyder',
            avatar: user4,
            position: 'Business Analyst',
            desc: "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
        },
        {
            id: 3,
            name: 'Louie C. Mason',
            avatar: user5,
            position: 'Human Resources',
            desc: "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
        },
    ]);

    const [part1, setPart1] = useState<TeamMember[]>([
        {
            id: 1,
            name: 'Louis K. Bond',
            avatar: user7,
            position: 'Founder & CEO',
        },
        {
            id: 2,
            name: 'Dennis N. Cloutier',
            avatar: user1,
            position: 'Software Engineer',
        },
        {
            id: 3,
            name: 'Susan J. Sander',
            avatar: user2,
            position: 'Web Designer',
        },
    ]);

    const [part2, setPart2] = useState<TeamMember[]>([
        {
            id: 1,
            name: 'James M. Short',
            avatar: user3,
            position: 'Web Developer',
        },
        {
            id: 2,
            name: 'Gabriel J. Snyder',
            avatar: user4,
            position: 'Business Analyst',
        },
        {
            id: 3,
            name: 'Louie C. Mason',
            avatar: user5,
            position: 'Human Resources',
        },
    ]);

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Extended UI', path: '/ui/extended/dragdrop' },
                    {
                        label: 'Drag and Drop',
                        path: '/ui/extended/dragdrop',
                        active: true,
                    },
                ]}
                title={'Drag and Drop'}
            />

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Simple Drag and Drop Example</h4>
                            <p className="text-muted font-14">Drag and drop cards in a list </p>

                            <ReactSortable className="row" list={items} setList={setItems}>
                                {(items || []).map((item, index) => {
                                    return (
                                        <Col key={index.toString()} md={4}>
                                            <MovableCard item={item} />
                                        </Col>
                                    );
                                })}
                            </ReactSortable>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Move stuff between containers</h4>
                            <p className="text-muted font-14 mb-3">Drag and drop cards between two containers</p>

                            <Row>
                                <Col md={6}>
                                    <div className="bg-dragula p-2 p-lg-4">
                                        <h5 className="mt-0">Part 1</h5>
                                        <ReactSortable
                                            group="teamList"
                                            list={team1}
                                            setList={setTeam1}
                                            className="py-2"
                                        >
                                            {(team1 || []).map((item, index) => {
                                                return <MovableCard2 key={index.toString()} item={item} />;
                                            })}
                                        </ReactSortable>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="bg-dragula p-2 p-lg-4">
                                        <h5 className="mt-0">Part 2</h5>
                                        <ReactSortable
                                            group="teamList"
                                            list={team2}
                                            setList={setTeam2}
                                            className="py-2"
                                        >
                                            {(team2 || []).map((item, index) => {
                                                return <MovableCard2 key={index.toString()} item={item} />;
                                            })}
                                        </ReactSortable>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Move stuff between containers using handle</h4>
                            <p className="text-muted font-14 mb-3">Drag and drop cards between two containers</p>

                            <Row>
                                <Col md={6}>
                                    <div className="bg-dragula p-2 p-lg-4">
                                        <h5 className="mt-0">Part 1</h5>
                                        <ReactSortable
                                            group="teamList2"
                                            handle=".dragula-handle"
                                            list={part1}
                                            setList={setPart1}
                                            className="py-2"
                                        >
                                            {(part1 || []).map((item, index) => {
                                                return <MovableCard3 key={index.toString()} item={item} />;
                                            })}
                                        </ReactSortable>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="bg-dragula p-2 p-lg-4">
                                        <h5 className="mt-0">Part 1</h5>
                                        <ReactSortable
                                            group="teamList2"
                                            handle=".dragula-handle"
                                            list={part2}
                                            setList={setPart2}
                                            className="py-2"
                                        >
                                            {(part2 || []).map((item, index) => {
                                                return <MovableCard3 key={index.toString()} item={item} />;
                                            })}
                                        </ReactSortable>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default DragDrop;
