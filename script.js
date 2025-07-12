// Resume Data (simulating data from a JSON file)
const resumeData = {
    name: "Poushali Patra",
    tagline: "B.Tech CSE Student | Data Analytics & ML Enthusiast",
    contact: {
        phone: "+91 9905428298",
        email: "patrapoushalil5@gmail.com",
        linkedin: "https://www.linkedin.com/in/poushali-patra15",
        instagram: "https://www.instagram.com/poushali_patra/"
    },
    aboutMe: "Motivated and detail-oriented third-year Computer Science undergraduate with a strong academic record and practical experience in data analytics, machine learning, and web development. Proficient in C/C++, and Java, with hands-on exposure to real-world problem-solving through academic and personal projects. Passionate about applying analytical thinking and technical skills to innovative solutions. Actively seeking internship opportunities to gain industry experience and contribute to impactful projects.",
    education: [
        {
            degree: "B.Tech in Computer Science",
            institution: "Kalinga Institute of Industrial Technology (KIIT University)",
            duration: "May 2023 - May 2027",
            grade: "CGPA 9.77"
        },
        {
            degree: "Class 12",
            institution: "Hill Top School, Jamshedpur",
            duration: "March 2023",
            grade: "98%"
        },
        {
            degree: "Class 10",
            institution: "Hill Top School, Jamshedpur",
            duration: "March 2021",
            grade: "98.8%"
        }
    ],
    skills: {
        "Programming": ["Java", "C/C++"],
        "Tools & Technologies": ["GIT"],
        "Machine Learning": ["Regression", "Classification", "Clustering", "Supervised Learning"],
        "Databases": ["SQL (MySQL, Postgres)"],
        "OS": ["Unix", "Linux"],
        "Web Development": ["HTML", "CSS"]
    },
    internshipsAndCertifications: [
        "Tata Forage Internship - Data Visualization: Empowering Business with Insights - Nov 2024",
        "AWS Academy Cloud Foundation - Feb 2025",
        "Infosys Springboard - NLP for Developers (Jan 2025), Design Thinking, Pragati Cohort Program",
        "GeekCoders - Databricks Certified Data Engineer - Oct 2024",
        "Udemy - Advanced SQL: MySQL for Ecommerce Data Analysis",
        "Finalist - Energy Hackathon 2025 (Tryst, IIT Delhi)"
    ],
    projects: [
        {
            title: "Sentiment Analysis of Social Media Data",
            description: [
                "Built a real-time sentiment analysis tool using Python and TextBlob.",
                "Processed and classified Twitter data and visualized trends using Matplotlib."
            ]
        }
    ],
    extracurricularActivities: [
        {
            title: "Data Science Club, KIIT University",
            description: [
                "Organized workshops, hackathons, and team-based analytics projects."
            ]
        },
        {
            title: "Volunteer Tutor",
            description: [
                "Guided juniors in programming and ML fundamentals, including Python and Java."
            ]
        }
    ],
    cvUrl: "https://placehold.co/200x300/000000/FFFFFF?text=Poushali_Patra_CV.pdf" // Placeholder CV URL
};

// Function to populate the content
function populateWebsite() {
    // Header
    document.getElementById('name').textContent = resumeData.name;
    document.getElementById('tagline').textContent = resumeData.tagline;
    document.getElementById('linkedinBtn').href = resumeData.contact.linkedin;
    document.getElementById('instagramBtn').href = resumeData.contact.instagram;

    // About Me
    document.getElementById('about-me-text').textContent = resumeData.aboutMe;
    document.getElementById('phone').innerHTML = `<a href="tel:${resumeData.contact.phone}">${resumeData.contact.phone}</a>`;
    document.getElementById('email').innerHTML = `<a href="mailto:${resumeData.contact.email}">${resumeData.contact.email}</a>`;

    // Education
    const educationList = document.getElementById('education-list');
    resumeData.education.forEach(edu => {
        const eduItem = document.createElement('div');
        eduItem.classList.add('education-item');
        eduItem.innerHTML = `
                    <h3>${edu.degree}</h3>
                    <p>${edu.institution}</p>
                    <p>${edu.duration} | ${edu.grade}</p>
                `;
        educationList.appendChild(eduItem);
    });

    // Professional Skills
    const skillsGrid = document.getElementById('skills-grid');
    for (const category in resumeData.skills) {
        const skillCategoryDiv = document.createElement('div');
        skillCategoryDiv.classList.add('skill-category');
        skillCategoryDiv.innerHTML = `<h3>${category}:</h3>`;
        const ul = document.createElement('ul');
        resumeData.skills[category].forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            ul.appendChild(li);
        });
        skillCategoryDiv.appendChild(ul);
        skillsGrid.appendChild(skillCategoryDiv);
    }

    // Internships & Certifications
    const internshipsCertsList = document.getElementById('internships-certs-list');
    resumeData.internshipsAndCertifications.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        internshipsCertsList.appendChild(li);
    });

    // Projects
    const projectsList = document.getElementById('projects-list');
    resumeData.projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');
        projectItem.innerHTML = `<h3>${project.title}</h3>`;
        const ul = document.createElement('ul');
        project.description.forEach(desc => {
            const li = document.createElement('li');
            li.textContent = desc;
            ul.appendChild(li);
        });
        projectItem.appendChild(ul);
        projectsList.appendChild(projectItem);
    });

    // Extracurricular Activities
    const extracurricularList = document.getElementById('extracurricular-list');
    resumeData.extracurricularActivities.forEach(activity => {
        const activityItem = document.createElement('div');
        activityItem.classList.add('activity-item');
        activityItem.innerHTML = `<h3>${activity.title}</h3>`;
        const ul = document.createElement('ul');
        activity.description.forEach(desc => {
            const li = document.createElement('li');
            li.textContent = desc;
            ul.appendChild(li);
        });
        activityItem.appendChild(ul);
        extracurricularList.appendChild(activityItem);
    });
}

// Download CV button functionality
document.getElementById('downloadCvBtn').addEventListener('click', function () {
    const cvUrl = resumeData.cvUrl;
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Poushali_Patra_Resume_June_2025.pdf'; // Suggested filename (update it when resume changes)
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Populate the website content when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', populateWebsite);