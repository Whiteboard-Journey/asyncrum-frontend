import { Link } from 'react-router-dom';
import { Dropdown, ButtonGroup, ProgressBar, ListGroup } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import config from 'config';
import axios from 'axios';

type Team = {
  id: number;
  name: string;
  pictureUrl: string;
};

type LeftPanelProps = {
  selected: string;
};

const LeftPanel = ({ selected }: LeftPanelProps) => {
  // const [teamList, setTeamList] = useState<Team[]>([]);
  // const user = JSON.parse(sessionStorage.getItem('asyncrum_user')!);

  // useEffect(() => {
  //     let currentList: Team[] = [];
  //     axios.get(config.API_URL + "/api/v1/teams?pageIndex=0&topId=0", { headers: { Authorization: 'Bearer ' + user.token }})
  //         .then(res => {
  //             for (const team of res.data.teamList) {
  //                 currentList.push({
  //                     id: team.id,
  //                     name: team.name,
  //                     pictureUrl: team.pictureUrl,
  //                 });
  //             }
  //             setTeamList(currentList);
  //         });
  // });

  return (
    <>
      {/* <Dropdown className="mb-3">
                <Dropdown.Toggle className="w-100">
                    <i className="mdi me-1"></i> Team 1
                </Dropdown.Toggle>
                <Dropdown.Menu className="w-100">
                    <Dropdown.Item active>
                        <i className=""></i> Team 1
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <i className=""></i> Team 2
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> */}

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
