import { Tldraw } from "@tldraw/tldraw"
import { Button } from "react-bootstrap";

const Whiteboard = () => {
    return (
    <div>
        <Button className="whiteboard-prev-button" href="dashboard/ecommerce" variant="primary" />
        <Tldraw />
    </div>);
}

export { Whiteboard };