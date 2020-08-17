import React, { useState, useContext } from 'react';
import { FormContext } from '../contexts/FormContext';

const initialFormValues = {
  name: '',
  age: '',
  height: '',
};

export default function SmurfForm() {
  const { postSmurf } = useContext(FormContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    postSmurf(formValues);
    setFormValues(initialFormValues);
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div className='container'>
      <form>
        <h3>Add a smurf to the Village</h3>
        <label>
          Name:&nbsp;
          <input
            value={formValues.name}
            onChange={changeHandler}
            name='name'
            type='text'
          />
        </label>
        <label>
          Age:&nbsp;
          <input
            value={formValues.age}
            onChange={changeHandler}
            name='age'
            type='text'
          />
        </label>
        <label>
          Height:&nbsp;
          <input
            value={formValues.height}
            onChange={changeHandler}
            name='height'
            type='text'
          />
        </label>
      </form>
      <button onClick={handleSubmit}>Add Smurf</button>
    </div>
  );
}