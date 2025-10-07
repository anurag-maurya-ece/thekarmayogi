// User Data
const userData = {
    id: "usr-001",
    name: "Vaishnavi Gupta",
    firstName: "Vaishnavi",
    email: "vaishnavi.gupta@gov.in",
    role: "Section Officer",
    department: "Ministry of Electronics and IT",
    pvs: 87,
    ckp: 1245,
    objectivesCompleted: 6,
    totalObjectives: 8,
    highPriorityTasks: 3
};

// Objectives Data
const objectivesData = [
    {
        id: "obj-001",
        title: "Implement Digital Service Standard",
        description: "Create and implement a Digital Service Standard for all government digital services to ensure consistency and quality.",
        priority: "high",
        progress: 75,
        dueDate: "2024-10-15",
        tasks: [
            { id: "task-001", title: "Research international best practices", completed: true },
            { id: "task-002", title: "Draft initial standard document", completed: true },
            { id: "task-003", title: "Conduct stakeholder consultations", completed: true },
            { id: "task-004", title: "Revise based on feedback", completed: false }
        ]
    },
    {
        id: "obj-002",
        title: "Citizen Feedback System",
        description: "Develop a comprehensive citizen feedback system for all digital services to improve user experience.",
        priority: "high",
        progress: 60,
        dueDate: "2024-11-30",
        tasks: [
            { id: "task-005", title: "Design feedback collection mechanism", completed: true },
            { id: "task-006", title: "Develop feedback analytics dashboard", completed: true },
            { id: "task-007", title: "Pilot with 3 services", completed: false },
            { id: "task-008", title: "Scale to all services", completed: false }
        ]
    },
    {
        id: "obj-003",
        title: "API Governance Framework",
        description: "Establish an API governance framework to standardize API development and management across departments.",
        priority: "medium",
        progress: 40,
        dueDate: "2024-12-15",
        tasks: [
            { id: "task-009", title: "Define API design principles", completed: true },
            { id: "task-010", title: "Create API documentation template", completed: true },
            { id: "task-011", title: "Develop API security guidelines", completed: false },
            { id: "task-012", title: "Establish API review process", completed: false }
        ]
    },
    {
        id: "obj-004",
        title: "Digital Literacy Training",
        description: "Conduct digital literacy training programs for government employees to enhance digital skills.",
        priority: "medium",
        progress: 80,
        dueDate: "2024-09-30",
        tasks: [
            { id: "task-013", title: "Develop training curriculum", completed: true },
            { id: "task-014", title: "Create online learning modules", completed: true },
            { id: "task-015", title: "Conduct training sessions", completed: true },
            { id: "task-016", title: "Evaluate training effectiveness", completed: false }
        ]
    },
    {
        id: "obj-005",
        title: "Open Data Initiative",
        description: "Implement an open data initiative to make non-sensitive government data available to the public.",
        priority: "low",
        progress: 30,
        dueDate: "2025-01-31",
        tasks: [
            { id: "task-017", title: "Identify datasets for public release", completed: true },
            { id: "task-018", title: "Develop data anonymization protocol", completed: false },
            { id: "task-019", title: "Create open data portal", completed: false },
            { id: "task-020", title: "Establish data update process", completed: false }
        ]
    }
];

// Team Data
const teamData = [
    { name: "Vaishnavi Gupta", role: "Section Officer", pvs: 87, workload: "medium" },
    { name: "Rajiv Mehta", role: "Technical Lead", pvs: 92, workload: "high" },
    { name: "Priya Patel", role: "UX Designer", pvs: 78, workload: "medium" },
    { name: "Vikram Singh", role: "Data Analyst", pvs: 85, workload: "low" },
    { name: "Neha Gupta", role: "Project Coordinator", pvs: 81, workload: "high" },
    { name: "Sanjay Kumar", role: "Content Specialist", pvs: 75, workload: "low" }
];

// Performance Trend Data (for charts)
const performanceTrendData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
        label: 'PVS Score',
        data: [75, 78, 82, 85, 87, 90],
        borderColor: '#8b5cf6',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        tension: 0.4,
        fill: true
    }]
};

// Task Distribution Data
const taskDistributionData = {
    labels: ['Completed', 'In Progress', 'Pending'],
    datasets: [{
        data: [15, 8, 5],
        backgroundColor: ['#10b981', '#8b5cf6', '#f59e0b'],
        borderWidth: 0
    }]
};

// Team Performance Data
const teamPerformanceData = {
    labels: teamData.map(member => member.name.split(' ')[0]),
    datasets: [{
        label: 'PVS Score',
        data: teamData.map(member => member.pvs),
        backgroundColor: [
            '#8b5cf6',
            '#3b82f6',
            '#10b981',
            '#f59e0b',
            '#ec4899',
            '#14b8a6'
        ],
        borderRadius: 8,
        borderWidth: 0
    }]
};