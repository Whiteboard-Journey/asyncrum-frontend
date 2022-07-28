import { Tldraw } from "@tldraw/tldraw"
import yorkie from 'yorkie-js-sdk';
import { useEffect } from "react";

const activateClient = async () => {
  const client = new yorkie.Client(`http://wbj-vpc-alb-private-152462774.ap-northeast-2.elb.amazonaws.com:8090`);
  await client.activate();
}

const Whiteboard = () => {

    useEffect(() => {
      activateClient();
    }, []);
    
    return (
    <div>
        <Tldraw />
    </div>);
}

export { Whiteboard };