import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Topic } from './types';
import { CardTitle } from 'components';

const News = () => {
    const news: Topic[] = [
        {
            id: 1,
            title: 'Golden Globes',
            description: 'The 27 Best moments from the Golden Globe Awards',
        },
        {
            id: 2,
            title: 'World Cricket',
            description: 'India has won ICC T20 World Cup Yesterday',
        },
        {
            id: 3,
            title: 'Antartica',
            description: 'Metling of Totten Glacier could cause high risk to areas near by sea',
        },
    ];

    return (
        <Card>
            <Card.Body>
                <CardTitle
                    containerClass="d-flex align-items-center justify-content-between mb-1"
                    title="Trending"
                    icon="mdi mdi-dots-horizontal"
                    menuItems={[
                        { label: 'Today' },
                        { label: 'Yesterday' },
                        { label: 'Last Week' },
                        { label: 'Last Month' },
                    ]}
                />

                {news.map((item, index) => {
                    return (
                        <div key={index.toString()} className="d-flex mt-3">
                            <i className="uil uil-arrow-growth me-2 font-18 text-primary"></i>
                            <div>
                                <Link className="mt-1 font-14" to="#">
                                    <strong>{item.title}:</strong>
                                    <span className="text-muted">{item.description}</span>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </Card.Body>
        </Card>
    );
};

export default News;
