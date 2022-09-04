import { Button } from 'react-bootstrap';
import { FormInput } from 'components';
import { TeamInfoFormProps } from './types';

const TeamInfoForm: React.FC<TeamInfoFormProps> = ({ teamname, onSubmitTeamInfo }: TeamInfoFormProps) => {
  return (
    <form onSubmit={onSubmitTeamInfo}>
      <FormInput
        label="Team Name"
        type="text"
        name="name"
        containerClass={'mb-3'}
        key="name"
        placeholder={teamname}
        required
      />
      <Button color="primary" type="submit">
        Save Changes
      </Button>
    </form>
  );
};

export default TeamInfoForm;
