import React, { useState, useEffect } from 'react';
import { FormContext } from '../contexts/FormContext';
import axios from 'axios';
import './App.css';

import Header from '../components/Header'
import Form from '../components/SmurfForm';
import Smurf from '../components/Smurf';

const url = 'http://localhost:3333/smurfs';

function App() {
  const [smurfData, setSmurfData] = useState([]);

  const getSmurf = () => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);

        setSmurfData(res.data);
      })
      .catch((err) => {
        console.log('error!');
      });
  };

  useEffect(() => {
    getSmurf();
  }, []);

  const postSmurf = (smurf) => {
    axios
      .post(url, smurf)
      .then((res) => {
        console.log(res);
        setSmurfData([...smurfData, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='App'>
      <FormContext.Provider value={{ postSmurf, getSmurf }}>
        <Header /> 

        <Form />

        <div className='smurf-list'>
          {smurfData.map((smurf) => {
            return <Smurf smurf={smurf} />;
          })}
        </div>
      </FormContext.Provider>
    </div>
  );
}

export default App;
