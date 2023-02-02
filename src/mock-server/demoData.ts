export const user = {
  id: 1,
  fullname: 'Demo User',
  profileImageUrl: '/images/asyncrum-logo-small.png',
  email: 'demo@demo.com',
  roleType: 'USER',
  timeZone: 'GMT',
};

export const allTeam = [
  {
    id: 1,
    name: 'Demo Team',
    code: 'dt1',
    pictureUrl: null,
  },
  {
    id: 2,
    name: 'Demo Team 2',
    code: 'dt2',
    pictureUrl: null,
  },
];

export const currentTeam = {
  id: 1,
  name: 'Demo Team',
  code: 'dt1',
  pictureUrl: null,
  members: [
    {
      id: 1,
      fullname: 'Demo User',
      profileImageUrl: '/images/asyncrum-logo-small.png',
      email: 'demo@demo.com',
      roleType: 'USER',
      timeZone: 'GMT',
    },
    {
      id: 2,
      fullname: 'Demo User 2',
      profileImageUrl: '/images/asyncrum-logo-small.png',
      email: 'demo2@demo.com',
      roleType: 'USER',
      timeZone: 'Asia/Seoul',
    },
  ],
};
