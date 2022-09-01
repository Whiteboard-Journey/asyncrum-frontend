import { Button } from 'react-bootstrap';
import { FormInput } from 'components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  updateProfileInfo as updateProfileInfoAPI,
} from 'helpers';
import { APICore } from 'helpers/api/apiCore'
import { useState } from 'react';

const PersonalInfoForm: React.FC = () => {
  const api = new APICore();
  const user = api.getLoggedInUser();
  const [userFullname, setUserFullname] = useState<string>(user.fullname);

  const onSubmitProfileInfo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fullname = ((e.target as HTMLFormElement).elements as { [key: string]: any })['fullname'].value;
    const nickname = '';
    await updateProfileInfoAPI({ fullname, nickname });
    setUserFullname(fullname);
    user.fullname = fullname;
    sessionStorage.setItem('asyncrum_user', JSON.stringify(user));
    (e.target as HTMLFormElement).reset();
    changeInfoNotify();
  };

  const changeInfoNotify = () => toast(<div>Personal information changed successfully!</div>);

    
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
      <FormInput
        label="Company Name"
        type="text"
        name="companyName"
        containerClass={'mb-3'}
        key="companyName"
      />
      <FormInput label="Role" type="text" name="role" containerClass={'mb-3'} key="role" />
      <Button color="primary" type="submit">
        Save Changes
      </Button>
    </form>
    );
}

export default PersonalInfoForm;