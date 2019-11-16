/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, createContext } from 'react';
import cpuBuilding from '../assets/schools/cpu_building.jpg';
import upBuilding from '../assets/schools/up_building.jpg';
import wvsuBuilding from '../assets/schools/wvsu_building.png';
import cpuLogo from '../assets/schools/cpu_logo.png';
import upLogo from '../assets/schools/up_logo.png';
import wvsuLogo from '../assets/schools/wvsu_logo.png';
import cpuLocation from '../assets/schools/cpu_location.png';
import upvLocation from '../assets/schools/upv_location.png';
import wvsuLocation from '../assets/schools/wvsu_location.png';

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
      location: cpuLocation,
      courses: [
        {
          id: 0,
          name: 'BS in Business of Administration',
          description: `
The Bachelor of Science in Business Administration - in The Philippines That is Concerned With The Various Factors That Affect Businesses. Through This Major, You’ll Gain A Better Understanding of Economic Development By Learning The Characteristics and Problems of Less Developed Countries, The Criteria For Growth and Development, The Obstacles To Economic Growth, and The Policies For Promoting It. Listed Below Are Some of The Courses That You May Take While Enrolled in This Program:

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
The Bachelor of Science in Information Technology (BS IT) is A Four-Year Degree Program That Equips Students With The Basic Ability To Conceptualize, Design and Implement Software Applications. It Prepares Students To Be IT Professionals Who Are Able To Perform Installation, Operation, Development, Maintenance, and Administration of Computer Applications. The Goal of The Program is To Produce Information Technologists Who Can Assist Individuals and Organizations in Solving Problems Using Information Technology Techniques and Processes. The Bachelor of Science in Information Technology Program Will Offer Three Professional Elective Tracks For Students:
Network and Security
Web and Mobile App Development
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
            'Bachelor of Secondary Education (BSED) is A Four Year Degree Program Designed To Prepare Students For Becoming High School Teachers. The Program Combines Both Theory and Practice in Order To Teach Students The Necessary Knowledge and Skills A High School Teacher Needs. The Program Aims To Produce Competent Teachers Who Provide A Conducive Learning Experience To Their Students'
        },
        {
          id: 4,
          name: 'BS in  Restaurant Management',
          description:
            'The Bachelor of Science in Hotel and Restaurant Management is A Four-Year Degree Program That Equips Students With The Necessary Knowledge, Skills, and Attitude To Provide Quality Service in The Hospitality Industry. It Contains Subjects That Will Address The Needs of Different Sectors in The Hospitality Industry Such As Culinary, Front Office, Tourism, Resort, and Hotel Operations. The Program Also Helps Students To Develop Effective Communication and Interpersonal Skills Which Are Essential in Establishing Positive Customer Relations'
        },
        {
          id: 5,
          name: 'BS in Computer Science',
          description: `
The BS in Computer Science(BSCS)  is A Four-Year Degree Program That Focuses On The Study of Computer Algorithms and Its Implementation Through Computer Software and Hardware. It Also Equips Students With Proficiency in Designing, Writing, and Developing Computer Programs and Computer Networks; As Well As Intricacies of Software Applications, Data Processing, Web Development, Programming, and Computer Architecture.

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
          description: `The Four-Year Curriculum Leading To The Bachelor of Science in Civil Engineering Prepares Our Graduates To Enter Professional Practice As An Engineer Or To Continue Their Studies and Earn A Master's Or Doctoral Degree. The Degree Program is Designed To Offer Depth in The Course Material Considered Essential For All Civil Engineers Along With The Flexibility To Select Elective Courses That Meet Students' Interests and Expose Them To The Breadth of Civil Engineering Specialties.`
        }
      ]
    },
    {
      id: 1,
      name: 'University of the Philippines Visayas',
      thumbnail: upLogo,
      image: upBuilding,
      motto: 'Honor and Excellence',
      location: upvLocation,
      courses: [
        {
          id: 0,
          name: 'BS in Business of Administration',
          description: `
The Bachelor of Science in Business Administration - in The Philippines That is Concerned With The Various Factors That Affect Businesses. Through This Major, You’ll Gain A Better Understanding of Economic Development By Learning The Characteristics and Problems of Less Developed Countries, The Criteria For Growth and Development, The Obstacles To Economic Growth, and The Policies For Promoting It. Listed Below Are Some of The Courses That You May Take While Enrolled in This Program:

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
The Bachelor of Science in Accountancy (Bsa) is A Four-Year Degree Program in The Philippines That is Primarily Concerned With The Effective Management of A Person’s, Group’s, Or Company’s Financial Resources Including The Proper Ways of Monitoring and Documenting The Flow of Money Or Goods Within The System and The Applicable Laws Related To It. Among The Courses That You May Take Under This Program Are:
Business Organization and Management
Business Statistics
Fundamentals of Accounting
Financial Accounting and Reporting
Microeconomic Theory and Practice Macroeconomic Theory and Practice
Cost Accounting and Cost Management
Fundamentals of Information Systems and Systems Development
Applied Auditing
Income Taxation Business and Transfer Tactics Sales, Agency, Labor, and Other Commercial Laws Management Consultancy
Good Governance and Corporate Responsibility
It Concepts and Systems Analysis and Design Accounting Systems
Auditing in A Cis Environment Calculus For Business Financial Management
Management Accounting
Business Statistics
Accounting For Governmental, Not-For-Profit Entities and Specialized Industries
        `
        },
        {
          id: 2,
          name: 'BS in Management',
          description: `
IN ARCHIVES MANAGEMENT
Contracts, Memos, E-Mail and Chat Exchanges, Video and Audio Recordings, and Maintenance Logs Can Contain Data That Can Dictate The Outcome of A Lawsuit. For This Reason, Companies and Organizations Typically Try Their Best To Preserve Such Documents Should They Become Necessary in The Future.
Additionally, in Some Countries, There Are Actual Laws That Require Companies To Store All Information That May Be Used For Possible Lawsuits and To Make Them Readily Available Upon Official Request.

IN COLLECTION MANAGEMENT
Is The Process in Which Librarians Review All Books and Resources That Are Currently Owned By A Particular Library, Taking Into Consideration Things Like The Physical Condition of The Books, The Timeliness of Their Contents, and The Demand Among The Library’s Users For Them. Based On Their Findings, Librarians Will Then Decide Whether New Materials Should Be Acquired Or If Currently Owned Materials Should Be Transferred, Removed, Or Preserved.

IN LOGISTICS MANAGEMENT
For Example, Companies Delivering Goods Do Not Simply Hop On A Van Or A Truck and Drive From Point A To Point B. To Ensure Efficiency, They Carefully Plan The Whole Transportation Process in Advance Taking Into Consideration Things Like Weather Forecasts, Traffic Rerouting, and Other Sources of Potential Delays. They Also Decide On Which Mode of Transport (Motorcycle, Van, Truck, Train, Ship, Plane) Would Be Best For A Particular Batch of Deliveries Based On The Distance Expected To Be Traveled and The Total Amount Or Weight of The Cargo That Needs To Be Transported.
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
      location: wvsuLocation,
      courses: [
        {
          id: 0,
          name: 'BS in Business of Administration',
          description: `
The Bachelor of Science in Business Administration - in The Philippines That is Concerned With The Various Factors That Affect Businesses. Through This Major, You’ll Gain A Better Understanding of Economic Development By Learning The Characteristics and Problems of Less Developed Countries, The Criteria For Growth and Development, The Obstacles To Economic Growth, and The Policies For Promoting It. Listed Below Are Some of The Courses That You May Take While Enrolled in This Program:

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
The Bachelor of Science in Information Technology (BS IT) is A Four-Year Degree Program That Equips Students With The Basic Ability To Conceptualize, Design and Implement Software Applications. It Prepares Students To Be IT Professionals Who Are Able To Perform Installation, Operation, Development, Maintenance, and Administration of Computer Applications. The Goal of The Program is To Produce Information Technologists Who Can Assist Individuals and Organizations in Solving Problems Using Information Technology Techniques and Processes. The Bachelor of Science in Information Technology Program Will Offer Three Professional Elective Tracks For Students:
Network and Security
Web and Mobile App Development
Robotics
          `
        },
        {
          id: 2,
          name: 'Bachelor of Elementary  Education',
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
          description: `Bachelor of Secondary Education (BSED) is A Four Year Degree Program Designed To Prepare Students For Becoming High School Teachers. The Program Combines Both Theory and Practice in Order To Teach Students The Necessary Knowledge and Skills A High School Teacher Needs. The Program Aims To Produce Competent Teachers Who Provide A Conducive Learning Experience To Their Students.`
        },
        {
          id: 4,
          name: 'BS in NURSING',
          description: `
Bachelor of Science in Nursing (BSN) is A Four-Year Degree Program in The Philippines That Revolves Around Caring For The Sick Or Injured. This Does Not Only Involve Addressing Immediate Threats To The Patient’s Health, But Also Guiding The Patient All The Way Through Physical, Mental, and Emotional Recovery.
As A Nursing Student You Will Be Trained To Conduct Health Assessments, Provide Patients With Preoperative, Intraoperative, and Postoperative Care, Perform Life-Saving Interventions, Respond To Disaster and Emergency Situations, and Keep Medical Documentations.
Through The Course of Your Study, You Will Learn How To Perform First Aid Techniques, Take Care of Wounds,  Prepare and Administer Drugs, Feed Patients Through Intravenous Tubes, Monitor Vital Signs, and Care For Patients With Special Needs Such As Those With Physical Disabilities, Mental Illnesses (Alzheimer’s Disease), Developmental Disorders (Autism), Recurring Illnesses, and Patients Who Are Only Awaiting Death.
In Addition To Those,  You Will Also Be Introduced To The Administrative Side of Nursing Such As The Organizational Structures of Hospitals, Patient Classification Systems, Delegation of Tasks, Staffing, Scheduling, and Performance Evaluation.
Some Examples of Subjects That You May Take While Enrolled in This Program Include:

Care of Mother, Child, and Family
Community Health Nursing
Microbiology and Parasitology
Bioethics
Care of Mother, Child, Family, and Population Group At Risk Or With Problems
Nutrition and Diet Therapy
Pharmacology
Health Education
Care of Clients With Problems in Oxygenation, Fluid and Electrolyte Balance, Metabolism, and Endocrine
Care of Patients With Maladaptive Patterns of Behaviour
Competency Appraisal
Nursing Leadership and Management
Nursing Research
Biostatistics
Aside From Taking The Courses Mentioned Above, Your School May Also Facilitate A Minimum of 2346 Hours of On-The-Job Training At Hospitals, Community Clinics, Or Similar Facilities in Order To Give You A Chance To Apply What You Have Learned in School in A Professional Setting.
          `
        },
        {
          id: 6,
          name: 'BS in Tourism Management',
          description: `Bachelor of Science in Tourism Management is A (4) Four-Year Degree Program That Provides Students A Concrete View in The Field of Tourism. This Program Leads To Expertise in Management of Tour-Operating Agencies, As Well As Other Jobs in The Travel, Events and Hotel Sector. It Aims To Address The Need For Professionals Who Can Help in Promoting The Tourism and Hospitality Industries in The Philippines. The Curriculum is Designed To Develop Skills in Critical Thinking, Creative Problem Solving, Research, Intellectual Curiosity, and Operational Competencies. The Combination of Theories Learned Inside The Classroom, Industry Immersion and On-The-Job Training Will Prepare The Students To Be Globally Competitive in Tourism Management Operations.

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
Human Resources officer
Marketing Executive
Retail Manager
Tour Manager
Tourism Officer
          `
        },
        {
          id: 7,
          name: 'BS in Hospitality Management',
          description: `
The Bachelor of Science in Hospitality Management is A Four-Year Degree Program in The Philippines That Prepares Students To Have Employable Skills/Competencies At Every Academic Year Level For Them To Be Competitive in The Hospitality Industry Locally and Globally.  This Also Prepares The Students To Be Entrepreneurs. This Curriculum Includes Laboratory Experiences As Well As Local Or International Internship Requirement in The Industry.

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
