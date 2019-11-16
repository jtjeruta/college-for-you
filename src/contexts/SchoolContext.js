/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, createContext } from 'react';
import cpuBuilding from '../assets/schools/cpu_building.jpg';
import upBuilding from '../assets/schools/up_building.jpg';
import wvsuBuilding from '../assets/schools/wvsu_building.png';
import cpuLogo from '../assets/schools/cpu_logo.png';
import upLogo from '../assets/schools/up_logo.png';
import wvsuLogo from '../assets/schools/wvsu_logo.png';

const SchoolContext = createContext();

const SchoolContextProvider = props => {
  const [currentSchool, setCurrentSchool] = useState(null);
  const [schools, setSchools] = useState([
    {
      id: 0,
      name: 'Central Philippine University',
      thumbnail: cpuLogo,
      image: cpuBuilding,
      motto: 'Scientia et Fides'
    },
    {
      id: 1,
      name: 'University of the Philippines Visayas',
      thumbnail: upLogo,
      image: upBuilding,
      motto: 'Honor and Excellence'
    },
    {
      id: 2,
      name: 'West Visayas State University',
      thumbnail: wvsuLogo,
      image: wvsuBuilding,
      motto: 'Servitium, Concordia, Excellentia'
    }
  ]);
  return (
    <SchoolContext.Provider
      value={{ schools, setSchools, currentSchool, setCurrentSchool }}
    >
      {props.children}
    </SchoolContext.Provider>
  );
};

export { SchoolContext, SchoolContextProvider };
