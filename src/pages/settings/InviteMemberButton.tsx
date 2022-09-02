import { Button, InputGroup, Form, Modal } from 'react-bootstrap';
import { useToggle } from 'hooks';
import { InviteMemberButtonProps } from './types';

const InviteMemberButton: React.FC<InviteMemberButtonProps> = ({ onInvite }: InviteMemberButtonProps) => {
  const [isInviteOpen, toggleInvite] = useToggle();

  return (
    <>
      <Button className="btn btn-primary" onClick={toggleInvite}>
        <i className="mdi mdi-plus"></i> Invite
      </Button>
      <Modal show={isInviteOpen} onHide={toggleInvite}>
        <Modal.Body>
          <Modal.Header onHide={toggleInvite} closeButton>
            <h4 className="modal-title">Invite a new member</h4>
          </Modal.Header>
          <form className="ps-3 pe-3 mt-3" onSubmit={onInvite}>
            <Form.Group>
              <Form.Label htmlFor="email">Invite by Email</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control id="email" type="email" placeholder="example@email.com" />
                <Button type="submit">Send Invitation</Button>
              </InputGroup>
            </Form.Group>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default InviteMemberButton;
