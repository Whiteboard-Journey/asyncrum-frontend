import { Link } from 'react-router-dom';
import { Team } from './types';
import { Dropdown } from 'react-bootstrap';
import { changeTeam } from 'helpers';
import { APICore } from 'helpers/api/apiCore';

type LeftPanelProps = {
  selected: string;
};

const LeftPanel = ({ selected }: LeftPanelProps) => {
  const api = new APICore();
  const user = api.getLoggedInUser();

  return (
    <>
      {user.teams && (
        <Dropdown className="mb-3">
          <Dropdown.Toggle className="w-100">
            <i className="mdi me-1"></i> {user.currentTeam.name}
          </Dropdown.Toggle>
          <Dropdown.Menu className="w-100">
            {user.teams.map((team: Team) => {
              return (
                <Dropdown.Item
                  key={team.id}
                  onClick={() => {
                    changeTeam(team.id);
                  }}
                  active={team.id === user.currentTeam.id ? true : false}
                >
                  <i className=""></i> {team.name}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      )}
      <div className="email-menu-list">
        <Link to="/settings/user" className={selected === 'personal' ? 'active text-primary' : ''}>
          <i className="mdi mdi-account-outline font-18 align-middle me-2"></i>Personal Profile
        </Link>
        <Link to="/settings/team" className={selected === 'team' ? 'active text-primary' : ''}>
          <i className="mdi mdi-account-group-outline font-18 align-middle me-2"></i>Team Profile
        </Link>
        <Link to="/settings/create-team">
          <i className="mdi mdi-plus font-18 align-middle me-2"></i>Create Team
        </Link>
      </div>
      <div className="mt-4">
        <h4>
          <span className="badge rounded-pill p-1 px-2 badge-secondary-lighten">FREE</span>
        </h4>
      </div>
    </>
  );
};

export default LeftPanel;
