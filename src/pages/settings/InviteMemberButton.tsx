import { Button, InputGroup, Form, Modal } from 'react-bootstrap';
import { useToggle } from 'hooks';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    inviteMember as inviteMemberAPI,
  } from 'helpers';
  import { Invitation, InviteMemberButtonProps } from './types';

const InviteMemberButton: React.FC<InviteMemberButtonProps> = ({team}: InviteMemberButtonProps) => {
  const [isInviteOpen, toggleInvite] = useToggle();

    const onInvite = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!team) {
          return;
        }
        const email = ((e.target as HTMLFormElement).elements as { [key: string]: any })['email'].value;
        const invitationData: Invitation = {
          memberId: null,
          memberEmail: email,
        };
        await inviteMemberAPI(team.id, invitationData);
        (e.target as HTMLFormElement).reset();
        invitationNotify(email);
      };
    
      const invitationNotify = (email: string) =>
        toast(
          <div>
            Invitation sent to <b>{email}</b>!
          </div>
        );

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
}

export default InviteMemberButton;