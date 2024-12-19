const employees = [
  {
    id: 1,
    firstname: "Rohit",
    email: "e1@gmail.com",
    password: "123",
    tasks: [
      {
        title: "Submit Quarterly Report",
        description: "Prepare and submit the Q4 report to the manager.",
        date: "2024-12-10",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Design Marketing Brochure",
        description:
          "Collaborate with the design team to finalize the brochure.",
        date: "2024-12-12",
        category: "Marketing",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Review Sales Data",
        description: "Analyze sales data for November and identify key trends.",
        date: "2024-12-15",
        category: "Analysis",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    firstname: "Atul",
    email: "e2@gmail.com",
    password: "123",
    tasks: [
      {
        title: "Fix Payment Gateway Issue",
        description:
          "Investigate and resolve payment gateway errors on checkout.",
        date: "2024-12-09",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Update API Documentation",
        description: "Add details of the new endpoints to the documentation.",
        date: "2024-12-11",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Review Deployment Logs",
        description:
          "Check server logs post-deployment for errors or anomalies.",
        date: "2024-12-13",
        category: "Operations",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 3,
    firstname: "Aryan",
    email: "e3@gmail.com",
    password: "123",
    tasks: [
      {
        title: "Plan Sprint 15 Goals",
        description: "Define objectives and tasks for the next sprint cycle.",
        date: "2024-12-10",
        category: "Planning",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Conduct Code Review Session",
        description: "Review code changes and provide feedback to the team.",
        date: "2024-12-14",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 4,
    firstname: "Karan",
    email: "e4@gmail.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Onboarding Material",
        description: "Create a guide for new employees joining the project.",
        date: "2024-12-12",
        category: "HR",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Host Year-End Team Meeting",
        description: "Schedule and lead the year-end team meeting.",
        date: "2024-12-20",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskNumbers: {
      active: 0,
      newTask: 1,
      completed: 0,
      failed: 1,
    },
  },
  {
    id: 5,
    firstname: "Sarthak",
    email: "e5@gmail.com",
    password: "123",
    tasks: [
      {
        title: "Present Project Update to Client",
        description:
          "Summarize the project's progress and upcoming milestones.",
        date: "2024-12-09",
        category: "Client Relations",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Prepare Budget Proposal",
        description:
          "Draft a detailed budget proposal for the next fiscal year.",
        date: "2024-12-14",
        category: "Finance",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
  },
];

const admin = [
  {
    id: 1,
    firstname: "Karan",
    email: "admin@me.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

// localStorage.clear();
setLocalStorage();

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
