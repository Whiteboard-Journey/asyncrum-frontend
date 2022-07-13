import { Row, Col, Breadcrumb } from 'react-bootstrap';

type BreadcrumbItems = {
    label: string;
    path: string;
    active?: boolean;
};

type PageTitleProps = {
    breadCrumbItems: Array<BreadcrumbItems>;
    title: string;
};

const PageTitle = ({ breadCrumbItems, title }: PageTitleProps) => {
    return (
        <Row>
            <Col>
                <div className="page-title-box">
                    <div className="page-title-right">
                        <Breadcrumb listProps={{ className: 'm-0' }}>
                            <Breadcrumb.Item href="/">Hyper</Breadcrumb.Item>

                            {breadCrumbItems.map((item, index) => {
                                return item.active ? (
                                    <Breadcrumb.Item active key={index.toString()}>
                                        {item.label}
                                    </Breadcrumb.Item>
                                ) : (
                                    <Breadcrumb.Item key={index.toString()} href={item.path}>
                                        {item.label}
                                    </Breadcrumb.Item>
                                );
                            })}
                        </Breadcrumb>
                    </div>
                    <h4 className="page-title">{title}</h4>
                </div>
            </Col>
        </Row>
    );
};

export default PageTitle;
