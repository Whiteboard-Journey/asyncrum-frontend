import { Button } from 'react-bootstrap';
import { FormInput } from 'components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TeamInfoFormProps } from './types';
import { updateTeamInfo as updateTeamInfoAPI } from 'helpers';

const TeamInfoForm: React.FC<TeamInfoFormProps> = ({ team, teamname, setTeamname }: TeamInfoFormProps) => {
  const onSubmitTeamInfo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!team) {
      return;
    }
    const name = ((e.target as HTMLFormElement).elements as { [key: string]: any })['name'].value;
    await updateTeamInfoAPI(team.id, { name });
    setTeamname(name);
    (e.target as HTMLFormElement).reset();
    changeInfoNotify();
  };

  const changeInfoNotify = () => toast(<div>Team Information changed successfully!</div>);

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
