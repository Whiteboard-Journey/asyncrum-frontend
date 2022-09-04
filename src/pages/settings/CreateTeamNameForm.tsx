import { Button } from 'react-bootstrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { VerticalForm, FormInput } from 'components';
import { CreateTeamNameFormProps } from './types';

const CreateTeamNameForm: React.FC<CreateTeamNameFormProps> = ({ next, onCreateTeam }: CreateTeamNameFormProps) => {
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
