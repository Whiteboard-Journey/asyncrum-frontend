import { Button } from 'react-bootstrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { VerticalForm, FormInput } from 'components';

import { createTeam as createTeamAPI } from 'helpers';
import { CreateTeamNameFormProps } from './types';

const CreateTeamNameForm: React.FC<CreateTeamNameFormProps> = ({
  next,
  setTeamId,
  setTeamName,
}: CreateTeamNameFormProps) => {
  const onCreateTeam = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = ((e.target as HTMLFormElement).elements as { [key: string]: any })['name'].value;
    const code = name.slice(0, 3) + Date.now();
    const createTeamAPIResponse = await createTeamAPI({ name, code });
    setTeamId(createTeamAPIResponse.data.id);
    setTeamName(name);
  };

  const createValidationSchema = yupResolver(
    yup.object().shape({
      name: yup.string().required('Please enter a team name.'),
    })
  );

  return (
    <>
      <VerticalForm
        onSubmit={(_, values) => {
          onCreateTeam(values as React.FormEvent<HTMLFormElement>);
          if (next) {
            next();
          }
        }}
        resolver={createValidationSchema}
      >
        <FormInput label="Enter a team name" type="text" name="name" containerClass={'mb-3'} />

        <ul className="list-inline wizard mb-0">
          <li className="next list-inline-item float-end">
            <Button variant="primary" type="submit">
              Next
            </Button>
          </li>
        </ul>
      </VerticalForm>
    </>
  );
};

export default CreateTeamNameForm;
