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
      motto: 'Scientia et Fides',
      courses: [
        {
          name: 'BS in Business of Administration',
          description:
            'The Bachelor Of Science In Business Administration - In The Philippines That Is Concerned With The Various Factors That Affect Businesses. Through This Major, You’ll Gain A Better Understanding Of Economic Development By Learning The Characteristics And Problems Of Less Developed Countries, The Criteria For Growth And Development, The Obstacles To Economic Growth, And The Policies For Promoting It'
        },
        {
          name: 'BS in Information Technology',
          description:
            'The Bachelor Of Science In Information Technology (BS IT) Is A Four-Year Degree Program That Equips Students With The Basic Ability To Conceptualize, Design And Implement Software Applications. It Prepares Students To Be IT Professionals Who Are Able To Perform Installation, Operation, Development, Maintenance, And Administration Of Computer Applications. The Goal Of The Program Is To Produce Information Technologists Who Can Assist Individuals And Organizations In Solving Problems Using Information Technology Techniques And Processes. '
        },
        {
          name: 'Bachelor of Elementary Education',
          description:
            'Bachelor of Elementary Education (BEED) is a four-year degree program in the Philippines that will train you in teaching grade school students.'
        },
        {
          name: 'Bachelor of Secondary Education',
          description:
            'Bachelor Of Secondary Education (BSED) Is A Four Year Degree Program Designed To Prepare Students For Becoming High School Teachers. The Program Combines Both Theory And Practice In Order To Teach Students The Necessary Knowledge And Skills A High School Teacher Needs. The Program Aims To Produce Competent Teachers Who Provide A Conducive Learning Experience To Their Students'
        },
        {
          name: 'BS in  Restaurant Management',
          description:
            'The Bachelor Of Science In Hotel And Restaurant Management Is A Four-Year Degree Program That Equips Students With The Necessary Knowledge, Skills, And Attitude To Provide Quality Service In The Hospitality Industry. It Contains Subjects That Will Address The Needs Of Different Sectors In The Hospitality Industry Such As Culinary, Front Office, Tourism, Resort, And Hotel Operations. The Program Also Helps Students To Develop Effective Communication And Interpersonal Skills Which Are Essential In Establishing Positive Customer Relations'
        },
        {
          name: 'BS in Computer Science',
          description:
            'The BS In Computer Science(BSCS)  Is A Four-Year Degree Program That Focuses On The Study Of Computer Algorithms And Its Implementation Through Computer Software And Hardware. It Also Equips Students With Proficiency In Designing, Writing, And Developing Computer Programs And Computer Networks; As Well As Intricacies Of Software Applications, Data Processing, Web Development, Programming, And Computer Architecture.'
        },
        {
          name: 'BS Civil Engineering',
          description: `The Four-Year Curriculum Leading To The Bachelor Of Science In Civil Engineering Prepares Our Graduates To Enter Professional Practice As An Engineer Or To Continue Their Studies And Earn A Master's Or Doctoral Degree. The Degree Program Is Designed To Offer Depth In The Course Material Considered Essential For All Civil Engineers Along With The Flexibility To Select Elective Courses That Meet Students' Interests And Expose Them To The Breadth Of Civil Engineering Specialties.`
        }
      ]
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
