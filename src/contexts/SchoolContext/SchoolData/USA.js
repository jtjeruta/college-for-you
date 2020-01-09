import Building from '../../../assets/schools/usa_building.jpg';
import Logo from '../../../assets/schools/usa_logo.jpg';
// import Location from '../../../assets/schools/';

const data = {
  id: 5,
  name: 'UNIVERSITY OF SAN AGUSTIN',
  thumbnail: Logo,
  image: Building,
  motto: 'Virtus et Scientia',
  // location: Location,
  courses: [
    {
      id: 0,
      name: 'Bachelor of Elementary education',
      description: `The Bachelor of Elementary Education (BEED) is a four-year degree program designed to prepare students to become primary school teachers. The program combines both theory and practice in order to teach students the necessary knowledge and skills a primary school teacher needs. The program aims to produce competent teachers specializing in the pedagogical approach of education.`
    },
    {
      id: 1,
      name: 'Bachelor of secondary education',
      description: `Bachelor of Secondary Education (BSED) is a four year degree program designed to prepare students for becoming high school teachers. The program combines both theory and practice in order to teach students the necessary knowledge and skills a high school teacher needs. The program aims to produce competent teachers who provide a conducive learning experience to their students.`
    },
    {
      id: 2,
      name: 'BS in accountancy',
      description: `The primary goal of the BS Accountancy program is to produce Augustinian accounting graduates who possess high standards of academic and professional knowledge to meet the challenges of a dynamic global business environment. It also aims to prepare students for the CPA licensure examinations and for employment in private and public sectors. Entry-level jobs of graduates of the program include the following: Audit Staff, Management Consulting Staff, Accounting Staff, Internal Audit Staff, Financial Analyst, Budget Analyst, Credit Analyst, Cost Accountant, State Accounting Examiner, LGU Accountant, Revenue Officer, Audit Examiner, Junior Accounting Instructor, Entrepreneur, among others.
      After 5 years, the graduates of the Accountancy Program should be:
      1. Certified Public Accountants imbued with Augustinian values and committed to ethical and sustainable development;
      2. Practicing accountants with strong leadership and team spirit in their professional work;
      3. Active members/and/or leaders of the Philippine Institute of Certified Public accountants (PICPA) and other related professional organizations;
      4. Pursuing professional competence through related work experience and Continuing Professional Development (CPD); and
      5. Actively involved in community service towards the improvement and development of the society.

      Accountancy Program Outcomes
      The graduates of the program shall be able to:
      a. demonstrate readiness  to take and pass the CPA Licensure Examination;
      b. apply organizational and business knowledge in the performance of their job assignments;
      c. apply critical thinking skills in problem solving and decision-making;
      d. work independently in multidisciplinary and multi-cultural teams;
      e. recognize the need for lifelong learning;
      f. use and evaluate computer-based accounting system;
      g. demonstrate proficiency in the international financial reporting, auditing standards and management accounting; and
      h. communicate effectively both in oral and written form.
      i. conduct feasibility study and research.
      j. act in recognition of professional, social, and ethical responsibilities.
      k. preserve and promote “Filipino historical and cultural heritage”; and
      l. demonstrate an understanding of fundamental Augustinian values in relation to their profession.
      `
    },
    {
      id: 3,
      name: 'BS in accounting information system',
      description: `accounting processes. While most accounting degrees do cover information systems, this degree particularly focuses on the creation, deployment, and use of the information systems that make accountants’ work more efficient. This degree can be attained at the associate’s, bachelor’s, master’s, and PhD levels.
      This is the program that provides general accounting education to students wanting to pursue a professional career in Accounting Information System. Further, this is the program that complies with the latest competency framework for professional accountants issued by the International Federation of Accountants (IFAC) thru their International Education Standards. Thus, this qualifies the graduate of this program to take assessments leading to certifications in Accounting Information System given by global professional Accounting Information System Organization.`
    },
    {
      id: 4,
      name: 'BS in Entrepreneurship',
      description: `The Bachelor of Science in Entrepreneurship is a four-year degree program that centers on how to start and manage a business by combining management, accounting, finance, and marketing principles. This program is designed in order to equip students with the necessary knowledge and skills in identifying business opportunities, business planning, financing, company valuation, and business management.`
    },
    {
      id: 5,
      name: 'BSBA in financial management',
      description: `The Financial Management program aims to prepare the students to possess a strong foundation on theory, principles, and concepts, as well as analytical tools and perspectives that would provide a sound competitive basis for financial decision making. Job opportunities of fresh graduates of the program include Management Trainee in Finance, New Account Personnel, Credit and Collection Assistant, Credit Analyst, Treasury Assistant, Entrepreneur, Order/Cashier, Traders/Stock Financial Analyst.
      After 3 to 5 years, the BSBA major in Financial Management graduates shall:
      1.utilize knowledge gained, skills developed, and attitudes formed from their academic program;
      2. hold the first-line management position exhibiting Augustinian business education;
      3. continue to learn financial management and adapt in a world of continually changing business environment;
      4. model professional, ethical, and socially responsible behavior imbued by Augustinian values; and
      5. be active members of business, social, religious, and/or civic organizations.
      `
    },
    {
      id: 6,
      name: 'BS in internal auditing',
      description: `The four-year degree program provides general business, accounting, and internal auditing education geared towards qualifying for assessments leading to certifications in internal auditing given by The Institute of Internal Auditors. Students who are interested in this path look forward to a career in helping organizations achieve strategy, goals, and objectives by understanding how organizations operate and improve them, designing internal controls to mitigate risks, assessing efficiency and effectiveness of operations, protecting assets, and promoting ethics, governance, and sustainability programs. The goal of the program is to develop graduates that qualify to become a Certified Internal Auditor (CIA), the only globally accepted internal audit qualification.`
    },
    {
      id: 7,
      name: 'BSBA in marketing management',
      description: `The BSBA in Marketing Management is a four-year program designed to equip students with the knowledge and skills effective for marketing and sales strategies; how a company determines what product or service to sell, how customers and markets are delineated into target demographics and the methods of reaching them. The course also focuses on strategic marketing issues that marketing managers assess before findings are presented to their executives. By learning to be an effective marketer and manager, you will learn to respond to the demands of competitors, the government, and larger social issues. Among the concepts and theories that will be discussed are sales management, brand, distribution, e-commerce, franchising, retailing, information technology, and corporate social responsibility.`
    },
    {
      id: 8,
      name: 'Bachelor of Music',
      description: `The Bachelor of Music major in Music Education program (BM-ME) is a four-year program that provides a strong foundation in the theories and concepts of music. This program prepares students to become music teachers that may specialize in: piano, guitar, voice, organ, strings, etc.`
    },
    {
      id: 9,
      name: 'BS in chemical engineering',
      description: `The Bachelor of Science in Mechanical Engineering (BSME) is a five-year program that deals with the design, development, installation, operation, and maintenance of machinery, engines, and structures used in industrial, biomedical, instrumentation and transportation systems. The program discusses the study of the conversion of thermal and chemical energy into mechanical work through engines and power plants while teaching students the proper utilization of these energies, forces, and structures to successfully perform a variety of tasks.`
    },
    {
      id: 10,
      name: 'BS IN CIVIL ENGINEERING',
      description: `The Bachelor of Science in Civil Engineering (BS CE) program is a five-year program designed to teach students the basic principles of science and mathematical tools used in engineering. The program covers the five essential fields of civil engineering: structural engineering, transportation engineering, water resources engineering, Geo-technical engineering and construction engineering and management. It also aims to provide students with technical skills and knowledge in planning, design, construction, supervision, and maintenance of civil engineering works.`
    },
    {
      id: 11,
      name: 'BS IN COMPUTER ENGINEERING',
      description: `The Bachelor of Science in Computer Engineering (BS CpE) is a five-year program that is a combination of electrical engineering and computer science. The curriculum provides students with a foundation in basic science, mathematics, software, and engineering. It covers topics on how to design a microprocessor and develop embedded systems that are used in desktops or hand held devices. The program also equips students with the ability to analyze, plan, design, install, operate and maintain digital devices, computer hardware, and software systems.`
    },
    {
      id: 12,
      name: 'BS IN ELECTRICAL ENGINEERING',
      description: `The Bachelor of Science in Electrical Engineering is a five-year degree program that focuses on conceptualizing, developing, and designing a safe, economical, and ethical utilization of electrical energy. The program also trains students to effectively develop and test real-life applications of electrical circuitry, digital systems, electrical equipment, and machinery control.`
    },
    {
      id: 13,
      name: 'BS IN MECHANICAL ENGINEERING',
      description: `The Bachelor of Science in Mechanical Engineering (BSME) is a five-year program that deals with the design, development, installation, operation, and maintenance of machinery, engines, and structures used in industrial, biomedical, instrumentation and transportation systems. The program discusses the study of the conversion of thermal and chemical energy into mechanical work through engines and power plants while teaching students the proper utilization of these energies, forces, and structures to successfully perform a variety of tasks`
    },
    {
      id: 14,
      name: 'BACHELOR IN MEDICAL LABORATORY SCIENCE',
      description: `The Bachelor of Science in Medical Technology (BS MT) is a four-year degree program that equips students with knowledge and skills in laboratory tests used in the detection, diagnosis, prevention, and treatment of diseases. Students will also learn how to use modern equipment, instruments and scientific methods to provide accurate laboratory results.`
    },
    {
      id: 15,
      name: 'BS IN NURSING',
      description: `The Bachelor of Science in Nursing (BSN) is a four-year degree program that teaches students the necessary skills and knowledge for health care. It revolves around four main components; health promotion, disease prevention, risk reduction, and health restoration. The program aims to develop nursing students who are capable of providing holistic care to individuals of different ages, gender, and health statuses.`
    },
    {
      id: 16,
      name: 'BS IN NUTRITION AND DIABETICS',
      description: `The Bachelor of Science in Nutrition and Dietetics (BSND) is a four-year degree program that teaches students with the principles and procedures of the use of food for therapeutic purposes in the management of persons suffering from a disease. Students of this program are also taught techniques and management of food production, particularly the phases of the food service cycle: menu planning, purchasing, receiving, storage and issuance, pre-preparation, production, merchandising and service, food safety, and sanitation and cost control.`
    },
    {
      id: 17,
      name: 'AB IN POLITICAL SCIENCE',
      description: `The Bachelor of Arts in Political Science (AB PolSci) is a four-year degree program that centers on the study of the types of government, the history and forms of political institutions, political behavior, and political policies. It covers important areas of study including Philippine Politics, Comparative Politics, International Relations, Political Theory and Methodology, Public Administration, Political Dynamics, Local and Global Governance, and Research in Politics.`
    },
    {
      id: 18,
      name: 'BS IN FOREIGN SERVICE',
      description: `Bachelor of Science in Foreign Service is a four-year degree program that will train you in maintaining peaceful relations with other countries, facilitating the flow of investments from international sources, promoting tourism, and addressing the needs of Filipinos working overseas among other things.`
    },
    {
      id: 19,
      name: 'BS IN PSYCHOLOGY',
      description: `The Bachelor of Science in Psychology (BS Psych) is a four-year program designed to help you observe human behavior through the scientific method, allowing you to gain access to the human psyche and fathom its depths. You will gain the knowledge, tools, and skills needed to assess and conduct empirical research regarding individual and group behavior through the lens of various psychological theories and concepts. The BS in Psychology degree prepares you for general careers in teaching, research, counseling and human resources. It can also be a foundation for further studies in the fields of Medicine, Guidance and Counseling, Human Resource Development and Law.`
    },
    {
      id: 20,
      name: 'BS IN COMPUTER SCIENCE',
      description: `The BS in Computer Science is a four-year degree program that focuses on the study of computer algorithms and its implementation through computer software and hardware. It also equips students with proficiency in designing, writing, and developing computer programs and computer networks; as well as intricacies of software applications, data processing, web development, programming, and computer architecture.`
    },
    {
      id: 21,
      name: 'BS IN INFORMATION TECHNOLOGY',
      description: `The Bachelor of Science in Information Technology (BS IT) is a four-year degree program that equips students with the basic ability to conceptualize, design and implement software applications. It prepares students to be IT professionals who are able to perform installation, operation, development, maintenance, and administration of computer applications. The goal of the program is to produce information technologists who can assist individuals and organizations in solving problems using information technology techniques and processes.`
    },
    {
      id: 22,
      name: 'BS IN HOSPITALITY MANAGEMENT',
      description: `The Bachelor of Science in Hospitality Management (BSHM) is a four-year degree program that covers the process of conception, planning, development, human resource and management of the different aspects of the hotel, restaurant, and resort operations. The program provides students with technical skills, as well as knowledge in marketing, finance, budgeting, staffing and other fields of business. The program also aims to teach entrepreneurship skills.`
    },
    {
      id: 23,
      name: 'BS IN TOURISM MANAGEMENT',
      description: `The Bachelor of Science in Tourism Management is a four-year degree program for people who want to have a career in the field of Tourism and Event Management. This course leads to expertise in the management of tour-operating agencies, as well as other jobs in the tourism and hospitality sector. The curriculum also includes operational competencies, event management classes, investment, and market study. `
    },
    {
      id: 24,
      name: 'BS IN ARCHITECTURE',
      description: `The Bachelor of Science in Architecture is a five year college degree intended for people who wish to pursue a career in Architecture. Architectural education provides students with knowledge and skills in planning, designing and constructing buildings taking into account the principles of utility, strength and aesthetics.`
    },
    {
      id: 25,
      name: 'BS IN LANDSCAPE ARCHITECTURE',
      description: `The Bachelor of Science in Architecture is a five year college degree intended for people who wish to pursue a career in Architecture. Architectural education provides students with knowledge and skills in planning, designing and constructing buildings taking into account the principles of utility, strength and aesthetics.`
    },
    {
      id: 26,
      name: 'BACHELOR OF FINE ARTS',
      description: `Bachelor of Fine Arts (BFA) is a four-year degree program designed to help students develop their artistic skills in the key areas of fine arts, namely creative writing, theater arts, visual arts, electronic media, photography, studio arts, interior design, and painting. The program also equips students with conceptual tools and technical skills needed to perform different tasks in various fields of the arts. By integrating different activities into its curriculum, the program nurtures the creativity and imagination of students.`
    },
    {
      id: 27,
      name: 'BS IN INTERIOR DESIGN',
      description: `Bachelor of Science in Interior Design (BSID) is a four-year degree program designed to teach students design concepts and methods of building interiors. It covers a wide range of professional practices such as interior design, furniture, and accessories design, visual merchandising, production design, exhibition design, interior landscaping design, and lighting design. The program discusses the core business fundamentals such as accounting, economics, and marketing while also including the design basics such as architectural history, textiles, and decorative arts. The BSID program also equips students with skills in operating a computer-aided design technology, reading blueprints, understanding building codes, and deciphering market trends`
    },
    {
      id: 28,
      name: 'AB IN COMMUNICATION',
      description: `The Bachelor of Arts in Communication is a four-year degree program intended for individuals who wish to pursue a career in the fields of media, advertising, public relations, and similar industries. It discusses how different media platforms are able to relay the information through verbal and non-verbal messages. Students also get a wider understanding of how communication works in interpersonal relationships, organizations, groups, and cultures. The course integrates the mastery of radio, television, print media, and other media platforms used for communication.`
    },
    {
      id: 29,
      name: 'BACHELOR OF LIBRARY AND INFORMATION SCIENCE',
      description: `The Bachelor of Library and Information Science is a four-year degree program designed to provide knowledge and skills in the management of library operations, the systematic organization, conservation, preservation and restoration of books, historical and cultural documents, and other intellectual properties. The program includes topics on the basic principles and fundamental laws of library science as well as the appropriate use of information resources. It also teaches essential skills in the integration of information technology and management information system for effective organization, use, and delivery of learning resources and services.`
    },
    {
      id: 30,
      name: 'AB IN LITERATURE',
      description: `The Bachelor of Arts in Literature is a four-year degree program that focuses on teaching students literature from all over the world from an Asian and a Filipino perspective. The program emphasizes theoretical and critical approaches in the analysis of literary genres by studying the nature, function, and value of literature in a comparative context. It also provides skills and training in investigating traditional and contemporary approaches to literary study, literary theory, and the relationship of literature to other branches of arts and sciences. Students will also learn skills in writing and reading creative and critical texts, reportage, and literary scholarship.`
    },
    {
      id: 31,
      name: 'AB IN PHILOSOPHY',
      description: `The Bachelor of Arts in Philosophy is a four-year degree program that provides students with an understanding of different philosophical theories regarding human nature, society, civilization, culture, and religion. The program teaches students how to analyze philosophical arguments and texts, construct good arguments and present arguments in a logical way. It also has special emphasis on Philippine culture, arts, politics, and folkways.`
    },
    {
      id: 31,
      name: 'BS IN BIOLOGY',
      description: `The Bachelor of Science in Biology is a four-year program that offers a general education in different biological sciences such as zoology, botany, physiology, genetics, histology, microbiology and ecology. The program also offers a strong foundation for advancement and specialization in biotechnology, genetic engineering, computational biology, genomics, molecular biology, and neurobiology. It grounds students with the fundamental concepts, principles, and theories of biological, natural, and physical sciences in research`
    },
    {
      id: 32,
      name: 'BS IN CHEMISTRY',
      description: `The Bachelor of Science in Chemistry (BS Chem) is a four-year degree program that teaches students the conduct of standard laboratory procedures involved in chemistry and the use of chemical instrumentation in analytical and synthetic work. Important skills such as monitoring, observation, and measurement of chemical properties, systematic recording, and documentation are also included in its curriculum. Students will be knowledgeable about designing experiments and understand and identifying the limitations of every experimental approach.`
    }
  ]
};

export default data;
