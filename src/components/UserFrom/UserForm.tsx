import React, { useState } from 'react';
import Form from '../Form/Form';

// Declaring an interface for the types
// interface Props {
//   onSubmit: (userName: string) => void;
// }
// const UserForm: React.FC<Props> = ({ onSubmit }): JSX.Element => { ... }

// Declaring the types inline
const UserForm = ({ onSubmit }: { onSubmit: (userName: string) => void}): JSX.Element => {
  const [userName, setUserName] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserName(event.target.value);
  };

  const handleFormSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    onSubmit(userName);
    setUserName('');
  }

  return (
    <Form 
      formTitle='Create a user:' 
      inputFields={[{ 
        inputName: 'name', 
        labelText: 'User name:', 
        inputValue: userName, // Note: Passing an input value like this is not a great idea in real life, because it changes on each keypress => the component rerenders => this array is recomputed
        onChange: handleChange 
      }]} 
      onSubmit={handleFormSubmit} 
    />
  );
}

export default UserForm;