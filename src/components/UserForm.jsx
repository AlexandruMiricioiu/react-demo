import { useState, useEffect } from "react";
import './UserForm.css';

const UserForm = (props) => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [isValidForm, setIsValidForm] = useState(false);

  const firstNameInputHandler = (event) => {
    const enteredFirstName = event.target.value;
    setFirstName(enteredFirstName);

    // lastname and age STATE is not reliable
    setIsValidForm(enteredFirstName !== '' && lastname !== '' && age !== '');
  }

  const lastNameInputHandler = (event) => {
    const enteredLastName = event.target.value;
    setLastName(enteredLastName);

    // firstname and age STATE is not reliable
    setIsValidForm(firstname !== '' && enteredLastName !== '' && age !== '');
  }

  const ageInputHandler = (event) => {
    const enteredAge = event.target.value;
    setAge(enteredAge);

    // firstname and lastname STATE is not reliable
    setIsValidForm(firstname !== '' && lastname !== '' && enteredAge !== '');
  }

  const submitHandler = (event) => {
    event.preventDefault();

    props.onAddName({
      firstname,
      lastname,
      age
    });

    setFirstName('');
    setLastName('');
    setAge('');
  }

  useEffect(() => {
    const deboucer = setTimeout(() => {
      console.log('debounce input with useEffect => this is nice!');
    }, 1000);

    return () => {
      console.log('run useEffect cleanup fn');
      clearTimeout(deboucer);
    }
  }, [firstname, lastname, age]);

  return (
    <form
      className="form-container"
      onSubmit={submitHandler}
    >
      <label
        htmlFor="firstname"
      >
        Firstname
      </label>

      <input
        type="text"
        id="firstname"
        onChange={firstNameInputHandler}
        value={firstname}
      />

      <label
        htmlFor="lastname"
      >
        Lastname
      </label>

      <input
        type="text"
        id="lastname"
        onChange={lastNameInputHandler}
        value={lastname}
      />

      <label
        htmlFor="age"
      >
        Age
      </label>

      <input
        type="number"
        id="age"
        onChange={ageInputHandler}
        value={age}
      />

      <div>Is Valid Form State: {isValidForm.toString()}</div>

      <button
        type="submit"
      >
        Submit
      </button>
    </form>
  )
}

export default UserForm;