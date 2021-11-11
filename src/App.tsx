import { useState } from 'react';
import UserForm from './components/UserFrom/UserForm';
import UsersList from './components/UsersList/UsersList';

const App = () => {
  const [users, setUsers] = useState([{ 
    id: 1, 
    name: 'Mayya'
  }]);

  const handleUserFormSubmit = (userName: string) => {
    setUsers([...users, { 
      id: users.length + 1, 
      name: userName
    }]);
  };

  return (
    <div>
      <div>
        <h1>List of users:</h1>
        <UsersList users={users} />
      </div>
      <UserForm onSubmit={handleUserFormSubmit} />
    </div>
    )
};

export default App;
