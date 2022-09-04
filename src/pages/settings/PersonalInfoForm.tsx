import { Button } from 'react-bootstrap';
import { FormInput } from 'components';
import { usePersonalSettings } from './hooks';

const PersonalInfoForm: React.FC = () => {
  const { userFullname, onSubmitProfileInfo } = usePersonalSettings();

  return (
    <form onSubmit={onSubmitProfileInfo}>
      <FormInput
        label="Full Name"
        type="text"
        name="fullname"
        containerClass={'mb-3'}
        key="fullname"
        placeholder={userFullname}
        required
      />
      <FormInput label="Company Name" type="text" name="companyName" containerClass={'mb-3'} key="companyName" />
      <FormInput label="Role" type="text" name="role" containerClass={'mb-3'} key="role" />
      <Button color="primary" type="submit">
        Save Changes
      </Button>
    </form>
  );
};

export default PersonalInfoForm;
