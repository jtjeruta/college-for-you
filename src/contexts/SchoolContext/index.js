/* eslint-disable react/destructuring-assignment */
import React, { useState, createContext } from 'react';
import CPU from './SchoolData/CPU';
import UPV from './SchoolData/UPV';
import WVSU from './SchoolData/WVSU';
import WIT from './SchoolData/WIT';
import JBL from './SchoolData/JBL';

const SchoolContext = createContext();

const SchoolContextProvider = props => {
  const [currentSchool, setCurrentSchool] = useState(null);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [schools, setSchools] = useState([CPU, UPV, WVSU, WIT, JBL]);
  return (
    <SchoolContext.Provider
      value={{
        schools,
        setSchools,
        currentSchool,
        setCurrentSchool,
        currentCourse,
        setCurrentCourse
      }}
    >
      {props.children}
    </SchoolContext.Provider>
  );
};

export { SchoolContext, SchoolContextProvider };
