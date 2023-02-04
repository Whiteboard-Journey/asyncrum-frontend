import { Link } from 'react-router-dom';
import { Team } from './types';
import { Dropdown } from 'react-bootstrap';
import { readTeam } from 'redux/actions';
import { allTeam as teamList, currentTeam } from 'mock-server/demoData';

type LeftPanelProps = {
  selected: string;
};

const LeftPanel = ({ selected }: LeftPanelProps) => {
  return (
    <>
      {currentTeam && (
        <Dropdown className="mb-3">
          <Dropdown.Toggle className="w-100">
            <i className="mdi me-1"></i> {currentTeam.name}
          </Dropdown.Toggle>
          <Dropdown.Menu className="w-100">
            {teamList.map((team: Team) => {
              return (
                <Dropdown.Item
                  key={team.id}
                  onClick={() => {
                    // dispatch(readTeam(team.id));
                  }}
                  active={team.id === currentTeam.id ? true : false}>
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
    </>
  );
};

export default LeftPanel;
