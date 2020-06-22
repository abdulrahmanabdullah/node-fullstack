import { run } from './js/app';
import { loadUsers } from './js/loadUser';
import { addUser } from './js/postUsers';
import './styles.scss';
import './main.scss';
run(loadUsers, addUser);
