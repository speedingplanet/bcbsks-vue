import UserBrowser from './UserBrowser';
import SearchUsers from './SearchUsers';
import AddUser from './AddUser';
import ListUsers from './ListUsers';
const routes = [
  {
    path: 'add',
    component: ListUsers,
    name: 'ListUsers',
  },
  {
    path: 'add',
    component: AddUser,
    name: 'AddUser',
  },
  {
    path: 'search',
    component: SearchUsers,
    name: 'SearchUsers',
  },
  {
    path: 'browse',
    component: UserBrowser,
    name: 'UserBrowser',
  },
  {
    path: '',
    name: 'NoUser',
    component: { template: '<p></p>' },
  },
];

export default routes;
