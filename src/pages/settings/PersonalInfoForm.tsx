import { Button, Form } from 'react-bootstrap';
import TimezoneSelect from 'react-timezone-select';
import { FormInput } from 'components';
import { usePersonalSettings } from './hooks';
import { useState } from 'react';
import { useRedux } from 'hooks';

const PersonalInfoForm: React.FC = () => {
  const { appSelector } = useRedux();

  const { user } = appSelector((state) => ({
    user: state.Auth.user,
  }));

  const { userFullname, onSubmitProfileInfo } = usePersonalSettings();
  const [selectedTimezone, setSelectedTimezone] = useState(
    user.timeZone
      ? { value: user.timeZone, label: '' }
      : { value: Intl.DateTimeFormat().resolvedOptions().timeZone, label: '' }
  );
  return (
    <form onSubmit={onSubmitProfileInfo}>
      <FormInput
        label="Full Name"
        type="text"
        name="fullname"
        containerClass={'mb-3'}
        key="fullname"
        placeholder={userFullname}
      />
      <FormInput label="Company Name" type="text" name="companyName" containerClass={'mb-3'} key="companyName" />
      <FormInput label="Role" type="text" name="role" containerClass={'mb-3'} key="role" />
      <Form.Label htmlFor="timezone">Timezone</Form.Label>
      <Form.Control type="hidden" id="timezone" aria-describedby="timezone" value={selectedTimezone.value} />
      <div className="mb-3">
        <TimezoneSelect value={selectedTimezone.value} onChange={setSelectedTimezone} />
      </div>
      <Button color="primary" type="submit">
        Save Changes
      </Button>
    </form>
  );
};

export default PersonalInfoForm;
