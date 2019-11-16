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
  const [currentCourse, setCurrentCourse] = useState(null);
  const [schools, setSchools] = useState([
    {
      id: 0,
      name: 'Central Philippine University',
      thumbnail: cpuLogo,
      image: cpuBuilding,
      motto: 'Scientia et Fides',
      courses: [
        {
          id: 0,
          name: 'BS in Business of Administration',
          description: `
The Bachelor Of Science In Business Administration - In The Philippines That Is Concerned With The Various Factors That Affect Businesses. Through This Major, You’ll Gain A Better Understanding Of Economic Development By Learning The Characteristics And Problems Of Less Developed Countries, The Criteria For Growth And Development, The Obstacles To Economic Growth, And The Policies For Promoting It. Listed Below Are Some Of The Courses That You May Take While Enrolled In This Program:

Basic Macroeconomics
Basic Microeconomics
Accounting II
Business Law (Obligation and Contract)
Taxation (Income Taxation)
Total Quality Management
Human Resource Management
Social Responsibility and Good Governance
History of Economic Thoughts
Advanced Microeconomics
Advanced Macroeconomics
Managerial Economics
International Economics
Project Development Management
Strategic Corporate Development
Economic Development (Elective)
Mathematical Economics (Elective)
Policies and Standards for BSBA (Elective)
Economic Statistics (Elective)
Current Economic Issues (Elective)
Operations Research (Elective)
Industrial Economics (Elective)
Monetary and Fiscal Economics (Elective)
Economic Research (Elective)
Labor Economics (Elective)
Environmental Economics (Elective)
Agricultural Economics (Elective)
Entrepreneurial Management (Elective)
Special Topics in Business Economics (Elective)
Feasibility Study (Elective)
Aside from studying the subjects mentioned above, you may also undergo an On the Job Training that will help you understand the practical applications of the things you’ll learn in school.

CAREERS
Graduates of Bachelor of Science in Business Administration Major in Business Economics
are free to apply for any of the following positions:
Management Trainee
Research Assistant
Field Researcher
Corporate Planning Analyst
Stock Trader
Professor
          `
        },
        {
          id: 1,
          name: 'BS in Information Technology',
          description: `
The Bachelor Of Science In Information Technology (BS IT) Is A Four-Year Degree Program That Equips Students With The Basic Ability To Conceptualize, Design And Implement Software Applications. It Prepares Students To Be IT Professionals Who Are Able To Perform Installation, Operation, Development, Maintenance, And Administration Of Computer Applications. The Goal Of The Program Is To Produce Information Technologists Who Can Assist Individuals And Organizations In Solving Problems Using Information Technology Techniques And Processes. The Bachelor Of Science In Information Technology Program Will Offer Three Professional Elective Tracks For Students:
Network And Security
Web And Mobile App Development
Robotics
          `
        },
        {
          id: 2,
          name: 'Bachelor of Elementary Education',
          description: `
Bachelor of Elementary Education (BEED) is a four-year degree program in the Philippines that will train you in teaching grade school students.
BEED has two specializations:
Bachelor of Elementary Education Major in Preschool Education
Bachelor in Elementary Education Major in Special Education
Enrolling in either of these programs will help you learn about the basic concepts and theories of teaching, the techniques for simplifying learning, and the effect of child and adolescent development on students’ ability to learn.
Some examples of the courses that you may take as a BEED student include:

Science
Mathematics
English
Filipino
Social Studies
Music, Arts, and Physical Education
Home Economics and Livelihood Education
Values Education
Child and Adolescent Development
Facilitating Learning
Social Dimensions of Education
The Teaching Professions
Principles of Teaching
Assessment of Student Learning
Educational Psychology
Curriculum Development
Educational Technology
Developmental Reading
Practice Teaching
Teaching Multigrade Classes (Elective)
Teaching Multicultural Classrooms (Elective)
Problem-Based Teaching (Elective)
Teaching Indigenous People (Elective)
Topics on Distance Learning (Elective)
          `
        },
        {
          id: 3,
          name: 'Bachelor of Secondary Education',
          description:
            'Bachelor Of Secondary Education (BSED) Is A Four Year Degree Program Designed To Prepare Students For Becoming High School Teachers. The Program Combines Both Theory And Practice In Order To Teach Students The Necessary Knowledge And Skills A High School Teacher Needs. The Program Aims To Produce Competent Teachers Who Provide A Conducive Learning Experience To Their Students'
        },
        {
          id: 4,
          name: 'BS in  Restaurant Management',
          description:
            'The Bachelor Of Science In Hotel And Restaurant Management Is A Four-Year Degree Program That Equips Students With The Necessary Knowledge, Skills, And Attitude To Provide Quality Service In The Hospitality Industry. It Contains Subjects That Will Address The Needs Of Different Sectors In The Hospitality Industry Such As Culinary, Front Office, Tourism, Resort, And Hotel Operations. The Program Also Helps Students To Develop Effective Communication And Interpersonal Skills Which Are Essential In Establishing Positive Customer Relations'
        },
        {
          id: 5,
          name: 'BS in Computer Science',
          description: `
The BS In Computer Science(BSCS)  Is A Four-Year Degree Program That Focuses On The Study Of Computer Algorithms And Its Implementation Through Computer Software And Hardware. It Also Equips Students With Proficiency In Designing, Writing, And Developing Computer Programs And Computer Networks; As Well As Intricacies Of Software Applications, Data Processing, Web Development, Programming, And Computer Architecture.

Application Analyst
Applications Developer
CAD Technician
Cyber Security Analyst
Data Analyst
Database Administrator
Forensic Computer Analyst
Game Designer
Games Developer
Information Systems Manager
IT Consultant
Machine Learning Engineer
Multimedia Programmer
Penetration Tester
SEO Specialist
Software Engineer
Systems Analyst
UX Designer
VFX Artist
Web Designer
Web Developer
Digital Copywriter
IT Sales Professional
IT Trainer
Nanotechnologist
Network Engineer
PPC Specialist
Social Media Manager
Sound Designer
Supply Chain Manager
Technical Author
Telecommunications Researcher
Web Content Manager
          `
        },
        {
          id: 6,
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
      motto: 'Honor and Excellence',
      courses: [
        {
          id: 0,
          name: 'BS in Business of Administration',
          description: `
The Bachelor Of Science In Business Administration - In The Philippines That Is Concerned With The Various Factors That Affect Businesses. Through This Major, You’ll Gain A Better Understanding Of Economic Development By Learning The Characteristics And Problems Of Less Developed Countries, The Criteria For Growth And Development, The Obstacles To Economic Growth, And The Policies For Promoting It. Listed Below Are Some Of The Courses That You May Take While Enrolled In This Program:

Basic Macroeconomics
Basic Microeconomics
Accounting II
Business Law (Obligation and Contract)
Taxation (Income Taxation)
Total Quality Management
Human Resource Management
Social Responsibility and Good Governance
History of Economic Thoughts
Advanced Microeconomics
Advanced Macroeconomics
Managerial Economics
International Economics
Project Development Management
Strategic Corporate Development
Economic Development (Elective)
Mathematical Economics (Elective)
Policies and Standards for BSBA (Elective)
Economic Statistics (Elective)
Current Economic Issues (Elective)
Operations Research (Elective)
Industrial Economics (Elective)
Monetary and Fiscal Economics (Elective)
Economic Research (Elective)
Labor Economics (Elective)
Environmental Economics (Elective)
Agricultural Economics (Elective)
Entrepreneurial Management (Elective)
Special Topics in Business Economics (Elective)
Feasibility Study (Elective)
Aside from studying the subjects mentioned above, you may also undergo an On the Job Training that will help you understand the practical applications of the things you’ll learn in school.

CAREERS
Graduates of Bachelor of Science in Business Administration Major in Business Economics
are free to apply for any of the following positions:
Management Trainee
Research Assistant
Field Researcher
Corporate Planning Analyst
Stock Trader
Professor
          `
        },
        {
          id: 1,
          name: 'BS in Accountancy',
          description: `
The Bachelor Of Science In Accountancy (Bsa) Is A Four-Year Degree Program In The Philippines That Is Primarily Concerned With The Effective Management Of A Person’s, Group’s, Or Company’s Financial Resources Including The Proper Ways Of Monitoring And Documenting The Flow Of Money Or Goods Within The System And The Applicable Laws Related To It. Among The Courses That You May Take Under This Program Are:
Business Organization And Management
Business Statistics
Fundamentals Of Accounting
Financial Accounting And Reporting
Microeconomic Theory And Practice Macroeconomic Theory And Practice
Cost Accounting And Cost Management
Fundamentals Of Information Systems And Systems Development
Applied Auditing
Income Taxation Business And Transfer Tactics Sales, Agency, Labor, And Other Commercial Laws Management Consultancy
Good Governance And Corporate Responsibility
It Concepts And Systems Analysis And Design Accounting Systems
Auditing In A Cis Environment Calculus For Business Financial Management
Management Accounting
Business Statistics
Accounting For Governmental, Not-For-Profit Entities And Specialized Industries
        `
        },
        {
          id: 2,
          name: 'BS in Management',
          description: `
IN ARCHIVES MANAGEMENT
Contracts, Memos, E-Mail And Chat Exchanges, Video And Audio Recordings, And Maintenance Logs Can Contain Data That Can Dictate The Outcome Of A Lawsuit. For This Reason, Companies And Organizations Typically Try Their Best To Preserve Such Documents Should They Become Necessary In The Future.
Additionally, In Some Countries, There Are Actual Laws That Require Companies To Store All Information That May Be Used For Possible Lawsuits And To Make Them Readily Available Upon Official Request.

IN COLLECTION MANAGEMENT
Is The Process In Which Librarians Review All Books And Resources That Are Currently Owned By A Particular Library, Taking Into Consideration Things Like The Physical Condition Of The Books, The Timeliness Of Their Contents, And The Demand Among The Library’s Users For Them. Based On Their Findings, Librarians Will Then Decide Whether New Materials Should Be Acquired Or If Currently Owned Materials Should Be Transferred, Removed, Or Preserved.

IN LOGISTICS MANAGEMENT
For Example, Companies Delivering Goods Do Not Simply Hop On A Van Or A Truck And Drive From Point A To Point B. To Ensure Efficiency, They Carefully Plan The Whole Transportation Process In Advance Taking Into Consideration Things Like Weather Forecasts, Traffic Rerouting, And Other Sources Of Potential Delays. They Also Decide On Which Mode Of Transport (Motorcycle, Van, Truck, Train, Ship, Plane) Would Be Best For A Particular Batch Of Deliveries Based On The Distance Expected To Be Traveled And The Total Amount Or Weight Of The Cargo That Needs To Be Transported.
        `
        }
      ]
    },
    {
      id: 2,
      name: 'West Visayas State University',
      thumbnail: wvsuLogo,
      image: wvsuBuilding,
      motto: 'Servitium, Concordia, Excellentia',
      courses: [
        {
          id: 0,
          name: 'BS in Business of Administration',
          description: `
The Bachelor Of Science In Business Administration - In The Philippines That Is Concerned With The Various Factors That Affect Businesses. Through This Major, You’ll Gain A Better Understanding Of Economic Development By Learning The Characteristics And Problems Of Less Developed Countries, The Criteria For Growth And Development, The Obstacles To Economic Growth, And The Policies For Promoting It. Listed Below Are Some Of The Courses That You May Take While Enrolled In This Program:

Basic Macroeconomics
Basic Microeconomics
Accounting II
Business Law (Obligation and Contract)
Taxation (Income Taxation)
Total Quality Management
Human Resource Management
Social Responsibility and Good Governance
History of Economic Thoughts
Advanced Microeconomics
Advanced Macroeconomics
Managerial Economics
International Economics
Project Development Management
Strategic Corporate Development
Economic Development (Elective)
Mathematical Economics (Elective)
Policies and Standards for BSBA (Elective)
Economic Statistics (Elective)
Current Economic Issues (Elective)
Operations Research (Elective)
Industrial Economics (Elective)
Monetary and Fiscal Economics (Elective)
Economic Research (Elective)
Labor Economics (Elective)
Environmental Economics (Elective)
Agricultural Economics (Elective)
Entrepreneurial Management (Elective)
Special Topics in Business Economics (Elective)
Feasibility Study (Elective)
Aside from studying the subjects mentioned above, you may also undergo an On the Job Training that will help you understand the practical applications of the things you’ll learn in school.

CAREERS
Graduates of Bachelor of Science in Business Administration Major in Business Economics
are free to apply for any of the following positions:
Management Trainee
Research Assistant
Field Researcher
Corporate Planning Analyst
Stock Trader
Professor
      `
        },
        {
          id: 1,
          name: 'BS in Information Technology',
          description: `
The Bachelor Of Science In Information Technology (BS IT) Is A Four-Year Degree Program That Equips Students With The Basic Ability To Conceptualize, Design And Implement Software Applications. It Prepares Students To Be IT Professionals Who Are Able To Perform Installation, Operation, Development, Maintenance, And Administration Of Computer Applications. The Goal Of The Program Is To Produce Information Technologists Who Can Assist Individuals And Organizations In Solving Problems Using Information Technology Techniques And Processes. The Bachelor Of Science In Information Technology Program Will Offer Three Professional Elective Tracks For Students:
Network And Security
Web And Mobile App Development
Robotics
          `
        },
        {
          id: 2,
          name: 'BACHELOR OF ELEMENTARY EDUCATION',
          description: `
Bachelor of Elementary Education (BEED) is a four-year degree program in the Philippines that will train you in teaching grade school students.
BEED has two specializations:
Bachelor of Elementary Education Major in Preschool Education
Bachelor in Elementary Education Major in Special Education
Enrolling in either of these programs will help you learn about the basic concepts and theories of teaching, the techniques for simplifying learning, and the effect of child and adolescent development on students’ ability to learn.
Some examples of the courses that you may take as a BEED student include:

Science
Mathematics
English
Filipino
Social Studies
Music, Arts, and Physical Education
Home Economics and Livelihood Education
Values Education
Child and Adolescent Development
Facilitating Learning
Social Dimensions of Education
The Teaching Professions
Principles of Teaching
Assessment of Student Learning
Educational Psychology
Curriculum Development
Educational Technology
Developmental Reading
Practice Teaching
Teaching Multigrade Classes (Elective)
Teaching Multicultural Classrooms (Elective)
Problem-Based Teaching (Elective)
Teaching Indigenous People (Elective)
Topics on Distance Learning (Elective)
          `
        },
        {
          id: 3,
          name: 'BACHELOR OF SECONDARY EDUCATION',
          description: `Bachelor Of Secondary Education (BSED) Is A Four Year Degree Program Designed To Prepare Students For Becoming High School Teachers. The Program Combines Both Theory And Practice In Order To Teach Students The Necessary Knowledge And Skills A High School Teacher Needs. The Program Aims To Produce Competent Teachers Who Provide A Conducive Learning Experience To Their Students.`
        },
        {
          id: 4,
          name: 'BS IN NURSING',
          description: `
Bachelor Of Science In Nursing (BSN) Is A Four-Year Degree Program In The Philippines That Revolves Around Caring For The Sick Or Injured. This Does Not Only Involve Addressing Immediate Threats To The Patient’s Health, But Also Guiding The Patient All The Way Through Physical, Mental, And Emotional Recovery.
As A Nursing Student You Will Be Trained To Conduct Health Assessments, Provide Patients With Preoperative, Intraoperative, And Postoperative Care, Perform Life-Saving Interventions, Respond To Disaster And Emergency Situations, And Keep Medical Documentations.
Through The Course Of Your Study, You Will Learn How To Perform First Aid Techniques, Take Care Of Wounds,  Prepare And Administer Drugs, Feed Patients Through Intravenous Tubes, Monitor Vital Signs, And Care For Patients With Special Needs Such As Those With Physical Disabilities, Mental Illnesses (Alzheimer’s Disease), Developmental Disorders (Autism), Recurring Illnesses, And Patients Who Are Only Awaiting Death.
In Addition To Those,  You Will Also Be Introduced To The Administrative Side Of Nursing Such As The Organizational Structures Of Hospitals, Patient Classification Systems, Delegation Of Tasks, Staffing, Scheduling, And Performance Evaluation.
Some Examples Of Subjects That You May Take While Enrolled In This Program Include:

Care Of Mother, Child, And Family
Community Health Nursing
Microbiology And Parasitology
Bioethics
Care Of Mother, Child, Family, And Population Group At Risk Or With Problems
Nutrition And Diet Therapy
Pharmacology
Health Education
Care Of Clients With Problems In Oxygenation, Fluid And Electrolyte Balance, Metabolism, And Endocrine
Care Of Patients With Maladaptive Patterns Of Behaviour
Competency Appraisal
Nursing Leadership And Management
Nursing Research
Biostatistics
Aside From Taking The Courses Mentioned Above, Your School May Also Facilitate A Minimum Of 2346 Hours Of On-The-Job Training At Hospitals, Community Clinics, Or Similar Facilities In Order To Give You A Chance To Apply What You Have Learned In School In A Professional Setting.
          `
        },
        {
          id: 6,
          name: 'BS IN TOURISM MANAGEMENT',
          description: `Bachelor Of Science In Tourism Management Is A (4) Four-Year Degree Program That Provides Students A Concrete View In The Field Of Tourism. This Program Leads To Expertise In Management Of Tour-Operating Agencies, As Well As Other Jobs In The Travel, Events And Hotel Sector. It Aims To Address The Need For Professionals Who Can Help In Promoting The Tourism And Hospitality Industries In The Philippines. The Curriculum Is Designed To Develop Skills In Critical Thinking, Creative Problem Solving, Research, Intellectual Curiosity, And Operational Competencies. The Combination Of Theories Learned Inside The Classroom, Industry Immersion And On-The-Job Training Will Prepare The Students To Be Globally Competitive In Tourism Management Operations.

Jobs:
Accommodation Manager
Catering Manager
Chef
Conference Centre Manager
Event Manager
Fast Food Restaurant Manager
Hotel Manager
Public House Manager
Restaurant Manager
Air Cabin Crew
Customer Service Manager
Fire Risk Assessor
Human Resources Officer
Marketing Executive
Retail Manager
Tour Manager
Tourism Officer
          `
        },
        {
          id: 7,
          name: 'BS IN HOSPITALITY MANAGEMENT',
          description: `
The Bachelor Of Science In Hospitality Management Is A Four-Year Degree Program In The Philippines That Prepares Students To Have Employable Skills/Competencies At Every Academic Year Level For Them To Be Competitive In The Hospitality Industry Locally And Globally.  This Also Prepares The Students To Be Entrepreneurs. This Curriculum Includes Laboratory Experiences As Well As Local Or International Internship Requirement In The Industry.

Hotel and Restaurant Management
Food and Beverage Service Attendant
Bartender
Housekeeping Attendant
Front Office Desk Clerk
Storekeeper
Kitchen Commis
Cabin Crew
Assistant Baker
Travel Agency Staff
Tour Guide
Banquet Supervisor
Front Office Supervisor
Housekeeping Supervisor
Head Waiter
Chef de Partie/Chief Cook
Event Planner
Kitchen Supervisor
Tour Coordinator
Sous Chef
Food and Beverage Manager
Restaurant Management
Executive Housekeeper
Hotel and Restaurant Training Manager
Entrepreneur
Resort Operations Manager
Kitchen Manager
Sales Manager
Hostel Manager
Club Manager
Professor

        `
        }
      ]
    }
  ]);
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
