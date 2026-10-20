// Career profiles for the Career Interest Explorer.
// Each key must exactly match a career name used in index.html (INFO careers or BLENDS).
// To add a career: add its name to a list in index.html, then add a matching entry here.

window.CAREERS = {

  // ----- Realistic -----
  "Electrician": {
    about: "Installs, maintains, and repairs electrical wiring and equipment in homes, businesses, and factories.",
    tasks: ["Read blueprints to plan where wiring and outlets go", "Install and test wiring, breakers, and lighting", "Track down and safely fix electrical problems"],
    path: "A high school diploma, then a paid apprenticeship of about four to five years that combines on-the-job training with classes. Most states require a license."
  },
  "Carpenter": {
    about: "Builds and repairs the wooden frameworks and structures of buildings, from framing walls to installing cabinets and trim.",
    tasks: ["Measure, cut, and shape wood and other materials", "Build frames for walls, floors, and roofs", "Install doors, windows, stairs, and cabinets"],
    path: "A high school diploma, then an apprenticeship or on-the-job training. Some start with a vocational or community college program."
  },
  "Automotive technician": {
    about: "Inspects, maintains, and repairs cars and light trucks.",
    tasks: ["Use diagnostic computers to find problems", "Repair engines, brakes, and electrical systems", "Do routine maintenance like oil changes and inspections"],
    path: "A postsecondary program in automotive technology (usually under a year to two years) is the common route. Industry certification helps with advancement."
  },
  "HVAC technician": {
    about: "Installs and repairs heating, ventilation, air conditioning, and refrigeration systems.",
    tasks: ["Install furnaces, air conditioners, and ductwork", "Test systems to find what isn’t working", "Handle refrigerants safely and follow building codes"],
    path: "A certificate or associate degree program, or an apprenticeship. Technicians who handle refrigerants need EPA certification."
  },
  "Wind turbine technician": {
    about: "Installs, inspects, and repairs wind turbines, often working hundreds of feet in the air.",
    tasks: ["Climb turbines to inspect blades and equipment", "Repair mechanical, electrical, and hydraulic parts", "Collect data to keep turbines running well"],
    path: "Usually a one- or two-year program at a technical school or community college, plus on-the-job training and safety certifications."
  },
  "Welder": {
    about: "Joins metal parts using heat, for everything from bridges and ships to cars and pipelines.",
    tasks: ["Read blueprints and plan welds", "Operate welding equipment for different metals", "Inspect finished work for strength and quality"],
    path: "A high school diploma plus technical school training or an apprenticeship. Certifications show skill in specific welding methods."
  },
  "Aircraft mechanic": {
    about: "Inspects, maintains, and repairs airplanes and helicopters to keep them safe to fly.",
    tasks: ["Follow detailed inspection checklists", "Repair engines, landing gear, and instruments", "Keep careful records of all work done"],
    path: "An FAA-approved aviation maintenance school (about 18 to 24 months) or military training, followed by FAA certification."
  },
  "Forester": {
    about: "Manages forests and woodlands for conservation, recreation, and timber.",
    tasks: ["Measure and map trees and land", "Plan tree planting, controlled burns, and harvests", "Monitor forest health, pests, and wildfire risk"],
    path: "A bachelor’s degree in forestry or a related field. Some states require a license."
  },
  "Civil engineering technician": {
    about: "Helps civil engineers plan and build roads, bridges, water systems, and other infrastructure.",
    tasks: ["Draw plans with design software", "Test soil and materials at job sites", "Inspect construction to make sure it matches the plans"],
    path: "Usually an associate degree in civil engineering technology."
  },
  "Firefighter": {
    about: "Responds to fires, medical emergencies, accidents, and other situations where people or property are in danger.",
    tasks: ["Put out fires and rescue people", "Give emergency medical care", "Inspect buildings and teach fire safety"],
    path: "A high school diploma, fire academy training, and passing written and physical tests. Many departments require EMT certification."
  },

  // ----- Investigative -----
  "Biologist": {
    about: "Studies living things, from cells and genes to whole ecosystems.",
    tasks: ["Design and run experiments", "Collect samples in the field or lab", "Analyze results and write reports"],
    path: "A bachelor’s degree in biology for entry-level jobs; a master’s or Ph.D. for independent research."
  },
  "Chemist": {
    about: "Studies substances at the level of atoms and molecules to create new materials, medicines, and products.",
    tasks: ["Run experiments and test samples", "Use lab instruments to analyze compounds", "Develop and improve products or processes"],
    path: "A bachelor’s degree in chemistry for many lab jobs; a Ph.D. for leading research."
  },
  "Software developer": {
    about: "Designs and builds computer programs, apps, and systems.",
    tasks: ["Figure out what users need from the software", "Write, test, and fix code", "Work with a team to improve and update programs"],
    path: "Usually a bachelor’s degree in computer science or a related field, though some enter through coding bootcamps or self-taught skills and a strong portfolio."
  },
  "Data scientist": {
    about: "Uses statistics and programming to find useful patterns in large amounts of data.",
    tasks: ["Collect and clean data sets", "Build models that make predictions", "Explain findings with charts and reports"],
    path: "A bachelor’s degree in math, statistics, computer science, or a related field; many also have a master’s."
  },
  "Physician": {
    about: "Diagnoses and treats illnesses and injuries.",
    tasks: ["Examine patients and take medical histories", "Order and interpret tests", "Prescribe treatments and follow up on care"],
    path: "A bachelor’s degree, four years of medical school (MD or DO), and three to seven years of residency, plus a state license."
  },
  "Pharmacist": {
    about: "Dispenses medications and advises patients and doctors on using them safely.",
    tasks: ["Check prescriptions for accuracy and drug interactions", "Explain how and when to take medicines", "Give vaccinations and health screenings"],
    path: "A Doctor of Pharmacy (PharmD) degree, usually six to eight years of college in total, plus a state license."
  },
  "Environmental scientist": {
    about: "Studies the environment to protect it and people’s health.",
    tasks: ["Collect air, water, and soil samples", "Analyze pollution and its effects", "Advise governments and companies on reducing harm"],
    path: "A bachelor’s degree in environmental science or a related science."
  },
  "Meteorologist": {
    about: "Studies the atmosphere to forecast weather and understand climate.",
    tasks: ["Analyze data from satellites, radar, and weather stations", "Use computer models to make forecasts", "Communicate forecasts and warnings to the public"],
    path: "A bachelor’s degree in meteorology or atmospheric science."
  },
  "Information security analyst": {
    about: "Protects an organization’s computers and networks from cyberattacks.",
    tasks: ["Monitor networks for security breaches", "Install and update security software", "Test systems for weaknesses and plan responses"],
    path: "A bachelor’s degree in computer science, cybersecurity, or a related field. Certifications and IT experience help."
  },
  "Medical laboratory scientist": {
    about: "Runs tests on blood, tissue, and other samples to help doctors diagnose disease.",
    tasks: ["Analyze samples with lab equipment", "Check results for accuracy", "Report findings to doctors"],
    path: "A bachelor’s degree in medical laboratory science or a life science. Some states require a license, and many employers want certification."
  },

  // ----- Artistic -----
  "Graphic designer": {
    about: "Creates visual designs for websites, ads, packaging, and other media.",
    tasks: ["Meet with clients to understand what they need", "Design layouts, logos, and illustrations with software", "Revise designs based on feedback"],
    path: "Usually a bachelor’s degree in graphic design or a related field, plus a strong portfolio."
  },
  "Animator": {
    about: "Creates moving images for films, TV, video games, and websites.",
    tasks: ["Draw or model characters and scenes", "Bring them to life frame by frame or with 3D software", "Work with directors and other artists on a project"],
    path: "A bachelor’s degree in animation, computer graphics, or fine art, plus a portfolio of work."
  },
  "Writer": {
    about: "Creates written work such as books, articles, scripts, and online content.",
    tasks: ["Research topics and develop ideas", "Write and revise drafts", "Work with editors to polish the final piece"],
    path: "Many writers have a bachelor’s degree in English, journalism, or communications, but a strong portfolio matters most."
  },
  "Musician": {
    about: "Performs, records, or writes music.",
    tasks: ["Practice and rehearse regularly", "Perform live or in recording sessions", "Promote their music and find new work"],
    path: "No set path. Many study music in college, but talent, practice, and experience count most."
  },
  "Actor": {
    about: "Plays characters in theater, film, TV, commercials, and other productions.",
    tasks: ["Study scripts and memorize lines", "Rehearse with directors and other actors", "Audition for new roles"],
    path: "No formal requirement, but many take acting classes or earn a theater degree. Experience in school and community productions helps."
  },
  "Photographer": {
    about: "Captures images for news, businesses, events, portraits, or art.",
    tasks: ["Plan shoots and set up lighting and equipment", "Take photographs", "Edit images with software"],
    path: "Some have a degree or certificate in photography, but a strong portfolio is the key."
  },
  "Interior designer": {
    about: "Plans indoor spaces that are useful, safe, and good-looking.",
    tasks: ["Meet clients to learn their needs and budget", "Sketch plans and choose colors, furniture, and materials", "Coordinate with builders to complete projects"],
    path: "Usually a bachelor’s degree in interior design. Some states require a license."
  },
  "Film and video editor": {
    about: "Assembles raw footage into a finished film, show, or video.",
    tasks: ["Review footage and choose the best shots", "Cut and arrange scenes with editing software", "Add sound, music, and effects"],
    path: "Often a bachelor’s degree in film or broadcasting, plus hands-on editing experience."
  },
  "Fashion designer": {
    about: "Creates original clothing, accessories, and shoes.",
    tasks: ["Research trends and sketch designs", "Choose fabrics and materials", "Oversee samples and final production"],
    path: "Usually a bachelor’s degree in fashion design, plus a portfolio."
  },
  "Architect": {
    about: "Designs buildings and other structures, balancing how they look with how they work.",
    tasks: ["Meet with clients to plan projects", "Create drawings and models with design software", "Oversee construction to make sure the design is followed"],
    path: "A professional degree in architecture (often five years), a paid internship period, and passing a licensing exam."
  },

  // ----- Social -----
  "Teacher": {
    about: "Helps students learn subjects and skills in schools.",
    tasks: ["Plan lessons and activities", "Teach classes and help students who are struggling", "Grade work and talk with families about progress"],
    path: "A bachelor’s degree and a state teaching license, which includes student teaching."
  },
  "Registered nurse": {
    about: "Cares for patients, gives treatments, and teaches people about their health.",
    tasks: ["Check patients’ conditions and record symptoms", "Give medicines and treatments", "Explain care plans to patients and families"],
    path: "A bachelor’s degree in nursing (BSN) or an associate degree in nursing, then passing the NCLEX-RN licensing exam."
  },
  "School counselor": {
    about: "Helps students with schoolwork, career planning, and personal challenges.",
    tasks: ["Meet with students one-on-one and in groups", "Help with college and career plans", "Work with teachers and families to support students"],
    path: "A master’s degree in school counseling and a state license or certification."
  },
  "Social worker": {
    about: "Helps people cope with problems in their lives, from family issues to finding housing or health care.",
    tasks: ["Assess clients’ needs", "Connect people with resources and services", "Advocate for clients and follow up on progress"],
    path: "A bachelor’s degree in social work for many entry-level jobs; a master’s (MSW) and a license for clinical work."
  },
  "Physical therapist": {
    about: "Helps people improve movement and manage pain after an injury or illness.",
    tasks: ["Evaluate how patients move", "Plan and guide exercises and treatments", "Track progress and adjust plans"],
    path: "A Doctor of Physical Therapy (DPT) degree, usually three years after a bachelor’s, and a state license."
  },
  "Occupational therapist": {
    about: "Helps people develop or recover the skills they need for daily life and work.",
    tasks: ["Evaluate patients’ abilities and goals", "Teach new ways to handle daily tasks", "Recommend equipment and changes at home or work"],
    path: "A master’s or doctoral degree in occupational therapy and a state license."
  },
  "Speech-language pathologist": {
    about: "Diagnoses and treats problems with speech, language, and swallowing.",
    tasks: ["Assess speech and language skills", "Create and lead therapy plans", "Teach families ways to support progress"],
    path: "A master’s degree in speech-language pathology and, in most states, a license."
  },
  "Dental hygienist": {
    about: "Cleans teeth, checks for signs of disease, and teaches people how to care for their mouths.",
    tasks: ["Remove plaque and tartar from teeth", "Take X-rays and record findings", "Teach patients good oral health habits"],
    path: "Usually an associate degree in dental hygiene and a state license."
  },
  "Coach": {
    about: "Teaches and trains athletes to improve their skills and compete.",
    tasks: ["Plan practices and training programs", "Teach strategy and technique", "Motivate players and support their development"],
    path: "Varies. Many school coaches are also teachers; college and professional coaches usually have a bachelor’s degree and playing or coaching experience."
  },
  "Child life specialist": {
    about: "Helps children and families cope with hospital stays, illness, and medical procedures.",
    tasks: ["Prepare children for procedures through play and explanation", "Give emotional support to kids and families", "Organize activities that make the hospital less stressful"],
    path: "A bachelor’s or, increasingly, a master’s degree in child life or a related field, plus a supervised internship and professional certification."
  },

  // ----- Enterprising -----
  "Entrepreneur": {
    about: "Starts and runs a business, taking on its risks and rewards.",
    tasks: ["Spot a need and develop a product or service", "Raise money and manage a budget", "Hire people and grow the business"],
    path: "No required path. Business classes, a degree, or work experience in the field can all help."
  },
  "Sales manager": {
    about: "Leads a team of salespeople and sets sales goals.",
    tasks: ["Set sales targets and track results", "Train and motivate the sales team", "Build relationships with major customers"],
    path: "Usually a bachelor’s degree in business and several years of sales experience."
  },
  "Marketing manager": {
    about: "Plans how to attract customers to a product or service.",
    tasks: ["Study the market and what customers need", "Plan campaigns and set budgets", "Work with designers, writers, and sales teams"],
    path: "Usually a bachelor’s degree in marketing, business, or communications, plus work experience."
  },
  "Lawyer": {
    about: "Advises and represents people, businesses, and government agencies on legal matters.",
    tasks: ["Research laws and past cases", "Prepare legal documents", "Argue cases in court or negotiate settlements"],
    path: "A bachelor’s degree, three years of law school (JD), and passing a state bar exam."
  },
  "Real estate agent": {
    about: "Helps people buy, sell, and rent homes and other property.",
    tasks: ["Show properties to buyers", "Advise sellers on pricing and marketing", "Negotiate offers and guide clients through closing"],
    path: "A high school diploma, a state-approved real estate course, and passing a licensing exam."
  },
  "Public relations specialist": {
    about: "Shapes how the public sees a person, company, or organization.",
    tasks: ["Write press releases and social media posts", "Respond to questions from reporters", "Plan events and campaigns"],
    path: "Usually a bachelor’s degree in public relations, communications, or journalism."
  },
  "Lodging manager": {
    about: "Runs hotels and other places where travelers stay.",
    tasks: ["Make sure guests are satisfied", "Manage staff, budgets, and bookings", "Oversee cleaning, maintenance, and safety"],
    path: "A high school diploma and experience can be enough, but many larger hotels prefer a degree in hospitality management."
  },
  "Financial advisor": {
    about: "Helps people plan and manage their money for goals like retirement or college.",
    tasks: ["Meet clients to learn their goals", "Recommend investments and savings plans", "Review and adjust plans over time"],
    path: "Usually a bachelor’s degree in finance, economics, or business. Selling investments requires licenses."
  },
  "Restaurant manager": {
    about: "Runs the daily operations of a restaurant.",
    tasks: ["Hire, train, and schedule staff", "Order food and supplies", "Handle customer concerns and keep things running smoothly"],
    path: "Many start in entry-level restaurant jobs and work their way up; some earn a degree in hospitality management."
  },
  "Political campaign manager": {
    about: "Leads the strategy and staff for a candidate running for office.",
    tasks: ["Plan campaign strategy and messaging", "Manage the budget and fundraising", "Coordinate staff and volunteers"],
    path: "No set path. Many have a degree in political science or communications and experience working or volunteering on campaigns."
  },

  // ----- Conventional -----
  "Accountant": {
    about: "Prepares and checks financial records to make sure they’re accurate and that taxes are paid correctly.",
    tasks: ["Review financial statements", "Prepare tax returns", "Suggest ways to cut costs and improve profits"],
    path: "A bachelor’s degree in accounting. Becoming a Certified Public Accountant (CPA) takes additional coursework and an exam."
  },
  "Payroll specialist": {
    about: "Makes sure employees are paid correctly and on time.",
    tasks: ["Track hours worked and calculate pay", "Process deductions for taxes and benefits", "Answer employees’ questions about paychecks"],
    path: "A high school diploma and on-the-job training; some employers prefer an associate degree or certification."
  },
  "Medical records specialist": {
    about: "Organizes and codes patient health information for care and billing.",
    tasks: ["Review patient records for completeness", "Assign codes for diagnoses and treatments", "Protect patient privacy"],
    path: "A postsecondary certificate or associate degree; many employers want certification."
  },
  "Paralegal": {
    about: "Supports lawyers by researching, organizing files, and preparing documents.",
    tasks: ["Research laws and past cases", "Draft legal documents", "Organize evidence and case files"],
    path: "Usually an associate degree or certificate in paralegal studies, or a bachelor’s degree in another field plus a certificate."
  },
  "Logistician": {
    about: "Manages how products move from suppliers to customers.",
    tasks: ["Track shipments and inventory", "Find ways to cut delivery time and cost", "Work with suppliers and transportation companies"],
    path: "Usually a bachelor’s degree in business, supply chain management, or a related field."
  },
  "Database administrator": {
    about: "Keeps an organization’s data organized, secure, and available.",
    tasks: ["Set up and maintain databases", "Back up data and plan for recovery", "Control who can access information"],
    path: "A bachelor’s degree in computer science or information systems, plus experience."
  },
  "Court reporter": {
    about: "Creates word-for-word transcripts of court proceedings, meetings, and other events.",
    tasks: ["Record speech with a stenotype machine or voice-writing equipment", "Review and edit transcripts", "Provide live captions for TV or events"],
    path: "A certificate or associate degree program; many states require a license or certification."
  },
  "Insurance underwriter": {
    about: "Decides whether to provide insurance and on what terms.",
    tasks: ["Review applications and risk information", "Decide on coverage and price", "Use software to analyze risk"],
    path: "Usually a bachelor’s degree in business, finance, or math, plus on-the-job training."
  },
  "Budget analyst": {
    about: "Helps organizations plan and manage their spending.",
    tasks: ["Review budget requests", "Track spending against the plan", "Prepare reports and recommendations"],
    path: "Usually a bachelor’s degree in accounting, finance, economics, or business."
  },
  "Executive assistant": {
    about: "Keeps top leaders organized and their offices running smoothly.",
    tasks: ["Manage calendars and schedule meetings", "Prepare reports and documents", "Handle communication and screen calls"],
    path: "A high school diploma plus office experience; many have some college."
  },

  // ----- Realistic + Investigative -----
  "Civil engineer": {
    about: "Designs and oversees projects like roads, bridges, tunnels, and water systems.",
    tasks: ["Plan projects and study building sites", "Design structures with software", "Manage construction to keep it safe and on budget"],
    path: "A bachelor’s degree in civil engineering. A Professional Engineer license requires work experience and exams."
  },
  "Mechanical engineer": {
    about: "Designs and builds machines, engines, tools, and devices.",
    tasks: ["Design products with computer software", "Build and test prototypes", "Improve designs based on test results"],
    path: "A bachelor’s degree in mechanical engineering."
  },
  "Electrical engineer": {
    about: "Designs and develops electrical equipment, from power systems to electronics.",
    tasks: ["Design circuits and systems", "Test equipment and solve problems", "Make sure products meet safety codes"],
    path: "A bachelor’s degree in electrical engineering."
  },
  "Surveyor": {
    about: "Measures land to set exact property lines and guide construction.",
    tasks: ["Use GPS and measuring instruments in the field", "Research land records", "Prepare maps and legal descriptions"],
    path: "Usually a bachelor’s degree in surveying or a related field, plus a state license."
  },
  "Environmental engineering technician": {
    about: "Helps engineers prevent and clean up pollution.",
    tasks: ["Collect samples of soil, air, and water", "Set up and maintain testing equipment", "Help carry out cleanup plans"],
    path: "Usually an associate degree in environmental engineering technology or a related field."
  },

  // ----- Realistic + Artistic -----
  "Landscape architect": {
    about: "Designs parks, campuses, gardens, and other outdoor spaces.",
    tasks: ["Study sites and meet with clients", "Create plans with design software", "Choose plants and materials that fit the environment"],
    path: "A bachelor’s or master’s degree in landscape architecture and a state license."
  },
  "Chef": {
    about: "Creates menus and leads kitchen staff in preparing food.",
    tasks: ["Plan menus and develop recipes", "Supervise and train cooks", "Order ingredients and keep the kitchen safe and clean"],
    path: "Many work their way up through kitchen jobs; others attend culinary school or complete an apprenticeship."
  },
  "Furniture maker": {
    about: "Designs and builds furniture by hand or with machines.",
    tasks: ["Sketch designs and plan materials", "Cut, shape, and join wood or other materials", "Finish pieces with stains and coatings"],
    path: "Usually on-the-job training or an apprenticeship; some take woodworking courses."
  },
  "Set and exhibit designer": {
    about: "Designs sets for theater, film, and TV, and displays for museums and trade shows.",
    tasks: ["Read scripts or project plans", "Sketch designs and build models", "Work with builders to create the final set"],
    path: "Usually a bachelor’s degree in theater design, interior design, or a related field, plus a portfolio."
  },
  "Jeweler": {
    about: "Designs, makes, and repairs jewelry.",
    tasks: ["Shape metal and set stones", "Repair and resize jewelry", "Design custom pieces for customers"],
    path: "On-the-job training or courses at a technical school; some study fine arts or gemology."
  },

  // ----- Realistic + Social -----
  "Paramedic": {
    about: "Gives emergency medical care to people who are sick or injured and takes them to the hospital.",
    tasks: ["Respond to 911 calls", "Assess patients and give emergency treatment", "Report to hospital staff on arrival"],
    path: "EMT certification, then a paramedic program (often one to two years), and a state license."
  },
  "Physical therapist assistant": {
    about: "Works under physical therapists to help patients recover movement.",
    tasks: ["Guide patients through exercises", "Use treatments like massage and stretching", "Record patient progress"],
    path: "An associate degree from an accredited program and, in most states, a license."
  },
  "Athletic trainer": {
    about: "Prevents, diagnoses, and treats injuries in athletes and active people.",
    tasks: ["Tape and brace athletes to prevent injury", "Give first aid on the field", "Plan rehabilitation programs"],
    path: "A master’s degree from an accredited athletic training program, plus certification and, in most states, a license."
  },
  "Respiratory therapist": {
    about: "Cares for patients who have trouble breathing.",
    tasks: ["Test lung function", "Run ventilators and breathing treatments", "Teach patients to manage conditions like asthma"],
    path: "At least an associate degree in respiratory therapy and a state license."
  },

  // ----- Realistic + Enterprising -----
  "Construction manager": {
    about: "Plans and oversees building projects from start to finish.",
    tasks: ["Create schedules and budgets", "Hire and coordinate workers and subcontractors", "Make sure work meets codes and safety rules"],
    path: "Usually a bachelor’s degree in construction management or engineering, plus experience; some rise from the trades."
  },
  "Farm and ranch manager": {
    about: "Runs farms, ranches, and other agricultural businesses.",
    tasks: ["Plan planting, harvesting, or animal care", "Manage workers, equipment, and budgets", "Sell crops and livestock"],
    path: "Many learn by working on a farm; a degree in agriculture is increasingly common."
  },
  "Commercial pilot": {
    about: "Flies aircraft for charter flights, aerial tours, crop dusting, and similar work. Airline pilot is a closely related path.",
    tasks: ["Plan flights and check the weather", "Inspect the aircraft before takeoff", "Fly and land safely"],
    path: "Flight training and an FAA commercial pilot certificate (at least 250 flight hours). Airline pilots need 1,500 hours and an additional certificate."
  },
  "General contractor": {
    about: "Runs construction and remodeling jobs and hires the workers who do them.",
    tasks: ["Estimate costs and bid on jobs", "Hire and schedule trades workers", "Get permits and pass inspections"],
    path: "Usually years of construction experience; many states require a license."
  },
  "Police officer": {
    about: "Protects people and property, enforces laws, and responds to emergencies.",
    tasks: ["Patrol areas and respond to calls", "Investigate incidents and write reports", "Testify in court"],
    path: "A high school diploma or college degree depending on the department, plus police academy training."
  },

  // ----- Realistic + Conventional -----
  "Quality control inspector": {
    about: "Checks products and materials to make sure they meet standards.",
    tasks: ["Inspect and measure products", "Test samples with tools and equipment", "Record defects and report problems"],
    path: "A high school diploma and on-the-job training."
  },
  "CNC machinist": {
    about: "Programs and runs computer-controlled machines that cut metal and plastic parts.",
    tasks: ["Read blueprints", "Set up and program machines", "Measure finished parts for accuracy"],
    path: "A high school diploma plus a certificate program or apprenticeship."
  },
  "Surveying technician": {
    about: "Helps surveyors collect measurements and make maps.",
    tasks: ["Set up and operate surveying equipment", "Record measurements in the field", "Enter data into mapping software"],
    path: "A high school diploma and on-the-job training; some complete a certificate or associate degree."
  },
  "Building inspector": {
    about: "Makes sure buildings are safe and meet construction codes.",
    tasks: ["Inspect construction at each stage", "Check plans against building codes", "Issue approvals or violation notices"],
    path: "A high school diploma plus construction experience; most states require certification."
  },
  "Pharmacy technician": {
    about: "Helps pharmacists prepare and dispense medications.",
    tasks: ["Measure and package medicines", "Enter prescriptions into the computer", "Help customers and handle insurance"],
    path: "A high school diploma and on-the-job training or a certificate program; many states require certification or registration."
  },

  // ----- Investigative + Artistic -----
  "User experience researcher": {
    about: "Studies how people use websites, apps, and products so they can be made easier to use.",
    tasks: ["Interview and observe users", "Run usability tests", "Share findings with designers and developers"],
    path: "Usually a bachelor’s degree in psychology, design, human-computer interaction, or a related field; many have a master’s."
  },
  "Medical illustrator": {
    about: "Creates drawings, animations, and models that explain medicine and science.",
    tasks: ["Research anatomy and medical procedures", "Create illustrations and animations", "Work with doctors and scientists to get the details right"],
    path: "Usually a master’s degree in medical illustration, with a background in both art and biology."
  },
  "Sound engineer": {
    about: "Records, mixes, and adjusts sound for music, film, live events, and broadcasts.",
    tasks: ["Set up microphones and recording gear", "Mix and edit audio", "Run sound boards at live events"],
    path: "A certificate or degree in audio engineering, plus hands-on experience."
  },
  "Video game designer": {
    about: "Creates the ideas, rules, levels, and stories that make games fun to play.",
    tasks: ["Develop game concepts and mechanics", "Design levels and characters", "Playtest games and refine them"],
    path: "Usually a bachelor’s degree in game design, computer science, or a related field, plus a portfolio."
  },

  // ----- Investigative + Social -----
  "Psychologist": {
    about: "Studies how people think, feel, and behave, and helps people with mental and emotional challenges.",
    tasks: ["Assess clients through interviews and tests", "Provide therapy", "Conduct research on behavior"],
    path: "Usually a doctoral degree (Ph.D. or Psy.D.) and a state license; school psychologists often need a specialist degree instead."
  },
  "Nurse practitioner": {
    about: "An advanced practice nurse who diagnoses and treats illnesses and can prescribe medication.",
    tasks: ["Examine patients and order tests", "Diagnose conditions and prescribe treatments", "Teach patients to manage their health"],
    path: "First become a registered nurse, then earn a master’s or doctoral nursing degree and a state license."
  },
  "Dietitian": {
    about: "Uses the science of food and nutrition to help people eat for good health.",
    tasks: ["Assess people’s nutrition needs", "Create meal plans", "Teach about healthy eating"],
    path: "A master’s degree is now required to become a registered dietitian, plus supervised practice and a national exam."
  },
  "Science teacher": {
    about: "Teaches subjects like biology, chemistry, or physics in middle or high school.",
    tasks: ["Plan lessons and lab activities", "Help students understand scientific concepts", "Grade work and track progress"],
    path: "A bachelor’s degree, often in a science, and a state teaching license."
  },

  // ----- Investigative + Enterprising -----
  "Management consultant": {
    about: "Advises organizations on how to run better.",
    tasks: ["Study how a company works", "Analyze data to find problems", "Recommend solutions and help carry them out"],
    path: "A bachelor’s degree in business or a related field; many have an MBA."
  },
  "Market research analyst": {
    about: "Studies what customers want and what they’ll buy.",
    tasks: ["Design surveys and collect data", "Analyze trends with statistics software", "Present findings to companies"],
    path: "A bachelor’s degree in market research, statistics, business, or a related field."
  },
  "Economist": {
    about: "Studies how resources like money, goods, and labor are produced and used.",
    tasks: ["Collect and analyze economic data", "Forecast trends", "Advise businesses and governments"],
    path: "Usually a master’s degree or Ph.D. in economics."
  },
  "Patent attorney": {
    about: "A lawyer who helps inventors protect their inventions.",
    tasks: ["Review inventions and research existing patents", "Write patent applications", "Represent clients in patent disputes"],
    path: "A bachelor’s degree in science or engineering, law school (JD), a state bar exam, and the patent bar exam."
  },
  "Product manager": {
    about: "Guides what a product does and how it gets built, often at technology companies.",
    tasks: ["Learn what customers need", "Decide which features to build first", "Coordinate engineers, designers, and marketers"],
    path: "Usually a bachelor’s degree in business, computer science, or a related field, plus work experience."
  },

  // ----- Investigative + Conventional -----
  "Actuary": {
    about: "Uses math and statistics to measure financial risk, often for insurance companies.",
    tasks: ["Analyze data to estimate how likely events are", "Calculate insurance prices", "Explain findings to company leaders"],
    path: "A bachelor’s degree in math, statistics, or actuarial science, plus a series of professional exams."
  },
  "Statistician": {
    about: "Collects and analyzes data to answer questions in science, business, health, and government.",
    tasks: ["Design surveys and experiments", "Analyze data with software", "Report what the results mean"],
    path: "Usually a master’s degree in statistics or math; some jobs accept a bachelor’s."
  },
  "Software quality assurance analyst": {
    about: "Tests software to find bugs before it reaches users.",
    tasks: ["Write and run test plans", "Find and document problems", "Work with developers to fix them"],
    path: "Usually a bachelor’s degree in computer science or a related field."
  },
  "Forensic science technician": {
    about: "Collects and analyzes evidence from crime scenes.",
    tasks: ["Photograph and collect evidence", "Analyze samples in the lab", "Write reports and testify in court"],
    path: "A bachelor’s degree in forensic science, chemistry, or biology."
  },
  "GIS specialist": {
    about: "Uses geographic information systems (GIS) to create and analyze maps.",
    tasks: ["Collect and manage location data", "Build digital maps", "Analyze patterns for planning and decisions"],
    path: "A bachelor’s degree in geography, GIS, or a related field."
  },

  // ----- Artistic + Social -----
  "Art therapist": {
    about: "Uses art-making to help people work through emotional and mental health challenges.",
    tasks: ["Plan art activities for therapy sessions", "Help clients express and understand their feelings", "Track progress and work with other health professionals"],
    path: "A master’s degree in art therapy; credentialing and licensing vary by state."
  },
  "Music teacher": {
    about: "Teaches students to play instruments, sing, and understand music.",
    tasks: ["Plan lessons and rehearsals", "Direct bands, choirs, or orchestras", "Organize performances"],
    path: "For schools, a bachelor’s degree in music education and a teaching license. Private teachers need strong skills and experience."
  },
  "Drama teacher": {
    about: "Teaches acting, theater, and stagecraft.",
    tasks: ["Teach acting and performance skills", "Direct school plays", "Guide students in set, lighting, and costume work"],
    path: "A bachelor’s degree, often in theater or theater education, and a state teaching license for public schools."
  },
  "Librarian": {
    about: "Helps people find information and runs library programs.",
    tasks: ["Help visitors with research", "Choose and organize materials", "Plan programs and classes"],
    path: "Usually a master’s degree in library science (MLS)."
  },

  // ----- Artistic + Enterprising -----
  "Advertising manager": {
    about: "Plans advertising campaigns that get a product or idea noticed.",
    tasks: ["Work with clients to set campaign goals", "Lead creative and media teams", "Manage budgets and measure results"],
    path: "A bachelor’s degree in advertising, marketing, or communications, plus experience."
  },
  "Film producer": {
    about: "Brings film, TV, and video projects to life by managing money, people, and schedules.",
    tasks: ["Find and develop project ideas", "Raise money and hire the team", "Keep production on schedule and on budget"],
    path: "No set path. Many have a film or business degree and work their way up on production crews."
  },
  "Journalist": {
    about: "Researches and reports news for newspapers, websites, TV, radio, or podcasts.",
    tasks: ["Interview sources and research stories", "Write or record news reports", "Check facts and meet deadlines"],
    path: "Usually a bachelor’s degree in journalism or communications, plus experience from student media or internships."
  },
  "Fashion buyer": {
    about: "Chooses the clothing and accessories that stores sell.",
    tasks: ["Study trends and sales data", "Attend fashion shows and meet suppliers", "Negotiate prices and orders"],
    path: "Usually a bachelor’s degree in fashion merchandising, business, or a related field."
  },
  "Art director": {
    about: "Leads the visual style of magazines, ads, websites, films, or products.",
    tasks: ["Set the visual direction for a project", "Lead designers and artists", "Present ideas to clients"],
    path: "A bachelor’s degree in art or design plus several years of design experience."
  },

  // ----- Artistic + Conventional -----
  "Technical writer": {
    about: "Turns complicated information into clear instructions, manuals, and guides.",
    tasks: ["Learn how products work from experts", "Write manuals and help articles", "Revise based on user feedback"],
    path: "Usually a bachelor’s degree in English, communications, or a technical field."
  },
  "Editor": {
    about: "Plans, reviews, and revises writing for publication.",
    tasks: ["Check writing for accuracy and clarity", "Suggest improvements to writers", "Decide what gets published"],
    path: "Usually a bachelor’s degree in English, journalism, or communications."
  },
  "Web designer": {
    about: "Designs the look and layout of websites.",
    tasks: ["Create layouts and design elements", "Make sites easy to use on phones and computers", "Work with developers to build the site"],
    path: "A certificate, associate, or bachelor’s degree in web design or a related field; a portfolio is key."
  },
  "Archivist": {
    about: "Preserves and organizes important records and historical documents.",
    tasks: ["Sort and catalog records", "Preserve fragile materials", "Help researchers find what they need"],
    path: "Usually a master’s degree in history, library science, or archival studies."
  },
  "Desktop publisher": {
    about: "Lays out text and images for printed and digital publications.",
    tasks: ["Arrange text and graphics on pages", "Prepare files for printing or online use", "Proofread layouts"],
    path: "An associate degree or certificate in graphic design or a related field, or on-the-job training."
  },

  // ----- Social + Enterprising -----
  "School principal": {
    about: "Leads a school’s staff and programs.",
    tasks: ["Manage teachers and staff", "Set goals and track student progress", "Work with families and the community"],
    path: "A master’s degree in education leadership, several years of teaching experience, and a state license."
  },
  "Human resources manager": {
    about: "Oversees hiring, training, and support for an organization’s employees.",
    tasks: ["Plan hiring and training programs", "Manage pay and benefits", "Handle workplace concerns"],
    path: "A bachelor’s degree in human resources or business, plus experience."
  },
  "Nonprofit director": {
    about: "Leads an organization working toward a mission in areas like education, health, or the environment.",
    tasks: ["Set goals and plan programs", "Raise money and manage the budget", "Lead staff and volunteers"],
    path: "Usually a bachelor’s degree plus experience in the field; some have a master’s in nonprofit management."
  },
  "Recruiter": {
    about: "Finds and hires people for job openings.",
    tasks: ["Search for and contact candidates", "Interview and screen applicants", "Help put together job offers"],
    path: "Usually a bachelor’s degree in human resources, business, or a related field."
  },
  "Event planner": {
    about: "Organizes weddings, conferences, parties, and other events.",
    tasks: ["Meet clients to plan the event", "Book venues, food, and vendors", "Run the event on the day"],
    path: "Often a bachelor’s degree in hospitality, communications, or business, though experience can substitute."
  },

  // ----- Social + Conventional -----
  "Medical assistant": {
    about: "Handles patient care and office tasks in clinics and doctors’ offices.",
    tasks: ["Take vital signs and patient histories", "Prepare patients for exams", "Schedule appointments and update records"],
    path: "A postsecondary certificate program or on-the-job training; certification helps."
  },
  "Teaching assistant": {
    about: "Helps teachers support students in the classroom.",
    tasks: ["Work with students one-on-one or in small groups", "Help prepare materials", "Supervise students in class and at lunch or recess"],
    path: "Requirements vary; many schools want some college or an associate degree."
  },
  "Dental assistant": {
    about: "Helps dentists during exams and procedures and keeps the office running.",
    tasks: ["Prepare patients and instruments", "Pass tools and take X-rays", "Schedule appointments and keep records"],
    path: "A certificate program or on-the-job training; some states require a license or certification."
  },
  "Customer service representative": {
    about: "Helps customers with questions, orders, and problems.",
    tasks: ["Answer calls, chats, and emails", "Solve problems and process requests", "Keep records of customer conversations"],
    path: "A high school diploma and on-the-job training."
  },
  "Medical secretary": {
    about: "Handles the front office of a medical practice.",
    tasks: ["Schedule appointments", "Manage patient records and billing", "Answer phones and greet patients"],
    path: "A high school diploma; some complete a certificate program in medical office skills."
  },

  // ----- Enterprising + Conventional -----
  "Bank branch manager": {
    about: "Runs a bank branch and leads its staff.",
    tasks: ["Oversee daily operations", "Help customers with loans and accounts", "Meet sales and service goals"],
    path: "Usually a bachelor’s degree in finance or business and banking experience."
  },
  "Insurance sales agent": {
    about: "Helps people and businesses choose insurance and sells them policies.",
    tasks: ["Meet clients and assess their needs", "Explain and compare policies", "Help with claims and renewals"],
    path: "A high school diploma at minimum, though many have a degree; a state license is required."
  },
  "Project manager": {
    about: "Plans projects and keeps them on time and on budget.",
    tasks: ["Set goals, schedules, and budgets", "Coordinate team members", "Track progress and solve problems"],
    path: "Usually a bachelor’s degree plus experience; certification such as the PMP helps."
  },
  "Logistics manager": {
    about: "Oversees the people and systems that store and move goods.",
    tasks: ["Manage warehouses and shipping schedules", "Lead logistics teams", "Find ways to cut costs and delays"],
    path: "Usually a bachelor’s degree in supply chain management or business, plus experience."
  }
};
