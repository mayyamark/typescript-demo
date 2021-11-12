interface UserInfo {
  id: number;
  name: string;
}

interface Props {
  users: UserInfo[]; // string[] 
}

const UsersList: React.FC<Props> = ({ users }): JSX.Element => {
  return (
    <div>
      {users.map((user: UserInfo) => {
        return (
          <div key={user.id}>
            <h3>{user.name}</h3>
          </div>
        )
      })}
    </div>
  );
}

export default UsersList;