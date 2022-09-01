import { Card } from 'react-bootstrap';
import { Member } from './types';

const MemberCard = ({ member }: { member: Member }) => {
    return (
      <Card className="d-block mx-2 mb-2 h-100">
        <Card.Body>
          <div className="text-center mb-2">
            <img src={member.profileImageUrl} className="rounded avatar-lg" alt="member" referrerPolicy="no-referrer" />
          </div>
          <h4 className="text-center font-weight-bold mt-3 mb-0">{member.fullname}</h4>
        </Card.Body>
      </Card>
    );
  };

export default MemberCard;