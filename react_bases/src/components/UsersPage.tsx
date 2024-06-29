
import type { User } from "../interfaces";

import useUser from '../hooks/UseUsers'



const UsersPage = () => {
  
  const { users, prevPage, nextPage } = useUser()

  return (
    <>
      <h3>Usuarios:</h3>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={prevPage}>Prev</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={nextPage}>Next</button>
      </div>
    </>
  );
};

interface Props {
  user: User;
}

const UserRow = ({ user }: Props) => {
  const { avatar, first_name, email } = user;

  return (
    <tr>
      <td>
        <img src={avatar} alt="user avatar" />
      </td>
      <td>{first_name}</td>
      <td>{email}</td>
    </tr>
  );
};

export default UsersPage;
