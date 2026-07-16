export const profile = {
  name: 'Ahtesham Ahmad',
  initials: 'AA',
  roles: ['Testing Lead', 'Quality Analyst', 'Automation Engineer', 'API Testing Specialist'],
  email: 'ahmad.ahtesham.12.12@gmail.com',
  phone: '+91-7860148524',
  location: 'New Delhi, India',
  linkedin: 'https://linkedin.com/in/ahtesham-ahmad',
  github: 'https://github.com/Github15687555',
  summary:
    "I'm a Testing Lead and Quality Analyst with 5+ years of experience in manual and automated testing across CRM, CMS, and finance domain applications. I've built QA processes from scratch, led and mentored test teams, and driven automation initiatives using Selenium, Cypress, and Playwright — all while keeping releases predictable in fast-moving Agile environments.",
  summary2:
    "My current focus is leading QA for the DMI Finance project at NovoStack — standing up test processes from zero, mentoring a growing QA team, and pushing API automation forward with Postman. Earlier roles took me through CRM lead-to-disbursement workflows, CMS platforms with 100% module coverage, and RPA-driven regression with UiPath.",
};

export const facts = [
  { label: 'Email', value: profile.email },
  { label: 'Phone', value: profile.phone },
  { label: 'City', value: profile.location },
  { label: 'Availability', value: 'Open to opportunities' },
  { label: 'Education', value: 'B.Sc Mathematics, AMU' },
  { label: 'Languages', value: 'English, Hindi, Urdu' },
];

export const factsExtra = [
  { label: 'Certified', value: 'Simplilearn Automation Testing Masters' },
  { label: 'Certified', value: 'Expert Software Testing' },
  { label: 'Domains', value: 'Finance, CRM, CMS' },
  { label: 'Methodology', value: 'Agile / Scrum' },
];

export const stats = [
  { label: 'Years experience', value: 5 },
  { label: 'Companies / clients', value: 4 },
  { label: '% SLA defect resolution', value: 95 },
  { label: 'Domains covered', value: 3 },
];

export const skills = [
  { name: 'Manual & Regression Testing', level: 95 },
  { name: 'Selenium WebDriver', level: 90 },
  { name: 'Playwright', level: 85 },
  { name: 'Cypress', level: 82 },
  { name: 'Postman / REST API Testing', level: 92 },
  { name: 'JIRA / Defect Management', level: 92 },
  { name: 'SQL / Database Testing', level: 82 },
  { name: 'UiPath (RPA)', level: 78 },
];

export const education = [
  {
    date: '2016 – 2020',
    title: 'B.Sc Mathematics',
    org: 'Aligarh Muslim University (AMU)',
  },
  {
    date: 'Certification',
    title: 'Automation Testing Masters Program',
    org: 'Simplilearn',
  },
  {
    date: 'Certification',
    title: 'Expert Software Testing',
    org: 'Pankaj Sir Academy',
  },
];

export const experience = [
  {
    date: 'May 2026 – Present',
    title: 'Testing Lead — DMI Finance',
    org: 'NovoStack',
    desc: 'Built QA processes and testing frameworks from scratch; leading and mentoring the QA team; driving API automation with Postman.',
  },
  {
    date: 'Oct 2025 – Apr 2026',
    title: 'Quality Analyst — Ruloans CRM',
    org: 'NovoStack',
    desc: 'Owned test coverage across lead management, onboarding, verification, and disbursement; automated regression with Playwright.',
  },
  {
    date: 'Nov 2022 – Sep 2025',
    title: 'Associate Quality Analyst — GenNx CMS',
    org: 'FutureBridge (Cheers Interactive)',
    desc: 'Achieved 100% module coverage; built Selenium/Cypress automation cutting manual effort by 40%; managed defects via ALM (Tuleap).',
  },
  {
    date: 'Apr 2021 – Oct 2022',
    title: 'Software Test Engineer',
    org: 'Uplabs Technologies',
    desc: 'Reduced defect turnaround time by 20%; built UiPath automation accelerating repetitive scenarios by 50%.',
  },
];

export const tools = [
  { icon: 'Se', name: 'Selenium WebDriver', desc: 'Cross-browser functional and regression automation for CMS and finance applications.' },
  { icon: 'Pw', name: 'Playwright', desc: 'Modern end-to-end automation for CRM regression suites, built with TypeScript.' },
  { icon: 'Cy', name: 'Cypress', desc: 'Fast, developer-friendly automation for CMS feature regression testing.' },
  { icon: 'Pm', name: 'Postman', desc: 'API testing and automation for internal and third-party integrations.' },
  { icon: 'Ji', name: 'JIRA & ALM', desc: 'Defect lifecycle management from logging through SLA-bound resolution.' },
  { icon: 'Ui', name: 'UiPath', desc: 'RPA-driven automation for repetitive regression scenarios.' },
];

export const projects = [
  {
    title: 'DMI Finance — QA Framework from Zero',
    badge: 'Work',
    desc: 'Established QA processes and testing frameworks from scratch as Testing Lead, standardizing practices and driving Postman-based API automation.',
    tags: ['Postman', 'Test Strategy', 'Leadership'],
    link: null,
  },
  {
    title: 'Ruloans CRM — Loan Lifecycle Testing',
    badge: 'Work',
    desc: 'End-to-end coverage across lead management, onboarding, verification, approval, and disbursement, backed by Playwright automation.',
    tags: ['Playwright', 'SQL', 'Postman'],
    link: null,
  },
  {
    title: 'AIAGENT — Playwright Automation Suite',
    badge: 'Personal',
    desc: 'A personal Playwright + TypeScript framework automating an e-commerce demo site end-to-end, with headed, debug, and UI test-runner modes.',
    tags: ['Playwright', 'TypeScript'],
    link: 'https://github.com/Github15687555/AIAGENT',
  },
  {
    title: 'Phase 3 — API & Load Testing Capstone',
    badge: 'Personal',
    desc: 'Simplilearn masters capstone: Postman tests on OpenWeatherMap, RestAssured CRUD on a dummy REST API, and JMeter load testing at 500 virtual users.',
    tags: ['Postman', 'RestAssured', 'JMeter'],
    link: 'https://github.com/Github15687555/Phase3_weatherAPI',
  },
];
