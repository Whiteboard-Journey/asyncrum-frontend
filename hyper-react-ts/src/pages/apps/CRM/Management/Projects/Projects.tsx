import { Col, Row } from 'react-bootstrap';
import { Project } from '../types';
import ProjectOverview from './ProjectOverview';

type ProjectsProps = {
    projectsData: Array<Project>;
};

const Projects = ({ projectsData }: ProjectsProps) => {
    return (
        <Row>
            {(projectsData || []).map((project, index) => {
                return (
                    <Col md={6} key={index.toString()}>
                        <ProjectOverview project={project} />
                    </Col>
                );
            })}
        </Row>
    );
};

export { Projects };
