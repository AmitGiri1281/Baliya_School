document.addEventListener('DOMContentLoaded', function() {
    // Fetch student data from API
    fetchStudentData();
    
    // Event listeners
    document.querySelectorAll('.sidebar-menu li').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelector('.sidebar-menu li.active').classList.remove('active');
            this.classList.add('active');
        });
    });
    
    // Notification click
    document.querySelector('.notification').addEventListener('click', function() {
        alert('You have 3 new notifications');
    });
});

function fetchStudentData() {
    // In a real application, this would fetch data from your backend API
    // For demo purposes, we'll use mock data
    
    const mockStudentData = {
        name: "John Doe",
        email: "john.doe@school.edu",
        rollNumber: "STU2023001",
        class: "Grade 10 - Section A",
        attendance: "85%",
        overallGrade: "A-",
        pendingAssignments: 2,
        subjects: 5,
        upcomingClasses: [
            { time: "09:00 AM", subject: "Mathematics", room: "201", teacher: "Mr. Smith" },
            { time: "10:30 AM", subject: "Physics", room: "305", teacher: "Ms. Johnson" }
        ],
        announcements: [
            { title: "School Holiday", content: "School will be closed on Friday for a public holiday.", date: "2 days ago" },
            { title: "Science Fair", content: "Register for the annual science fair by next Monday.", date: "5 days ago" }
        ]
    };
    
    // Update dashboard with student data
    document.getElementById('studentName').textContent = mockStudentData.name;
    
    // Update stats cards
    document.querySelectorAll('.stat-card')[0].querySelector('p').textContent = mockStudentData.attendance;
    document.querySelectorAll('.stat-card')[1].querySelector('p').textContent = mockStudentData.overallGrade;
    document.querySelectorAll('.stat-card')[2].querySelector('p').textContent = mockStudentData.pendingAssignments;
    document.querySelectorAll('.stat-card')[3].querySelector('p').textContent = mockStudentData.subjects;
    
    // Update upcoming classes
    const classList = document.querySelector('.class-list');
    classList.innerHTML = '';
    mockStudentData.upcomingClasses.forEach(cls => {
        const classItem = document.createElement('div');
        classItem.className = 'class-item';
        classItem.innerHTML = `
            <div class="class-time">${cls.time}</div>
            <div class="class-details">
                <h4>${cls.subject}</h4>
                <p>Room ${cls.room} - ${cls.teacher}</p>
            </div>
        `;
        classList.appendChild(classItem);
    });
    
    // Update announcements
    const announcementList = document.querySelector('.announcement-list');
    announcementList.innerHTML = '';
    mockStudentData.announcements.forEach(ann => {
        const announcementItem = document.createElement('div');
        announcementItem.className = 'announcement-item';
        announcementItem.innerHTML = `
            <h4>${ann.title}</h4>
            <p>${ann.content}</p>
            <span class="announcement-date">${ann.date}</span>
        `;
        announcementList.appendChild(announcementItem);
    });
}

// Form handling for profile editing
document.querySelector('.btn-primary')?.addEventListener('click', function() {
    // In a real app, this would open a modal or form for editing
    alert('Edit profile functionality would open a form here');
});

document.querySelector('.btn-secondary')?.addEventListener('click', function() {
    // In a real app, this would open a password change form
    alert('Change password functionality would open a form here');
});