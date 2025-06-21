document.addEventListener('DOMContentLoaded', function() {
    // Fetch teacher data from API
    fetchTeacherData();
    
    // Event listeners
    document.querySelectorAll('.sidebar-menu li').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelector('.sidebar-menu li.active').classList.remove('active');
            this.classList.add('active');
        });
    });
    
    // Notification click
    document.querySelector('.notification').addEventListener('click', function() {
        alert('You have 5 new notifications');
    });
    
    // Attendance button handlers
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('click', function() {
            const className = this.closest('.class-item').querySelector('h4').textContent;
            alert(`Attendance for ${className} would open here`);
        });
    });
    
    // Task button handlers
    document.querySelectorAll('.btn-success').forEach(btn => {
        btn.addEventListener('click', function() {
            const taskName = this.closest('.task-item').querySelector('h4').textContent;
            alert(`Starting task: ${taskName}`);
        });
    });
});

function fetchTeacherData() {
    // In a real application, this would fetch data from your backend API
    // For demo purposes, we'll use mock data
    
    const mockTeacherData = {
        name: "Ms. Johnson",
        subject: "Physics Teacher",
        totalStudents: 42,
        subjects: 3,
        pendingGrading: 7,
        classesToday: 4,
        todaysSchedule: [
            { time: "08:00 - 09:30", subject: "Physics - Grade 10A", room: "305", students: 22 },
            { time: "10:00 - 11:30", subject: "Physics - Grade 11B", room: "210", students: 20 }
        ],
        pendingTasks: [
            { name: "Grade Term Papers", description: "Physics - Grade 10A", due: "Tomorrow" },
            { name: "Prepare Lab Materials", description: "For tomorrow's experiment", due: "Today" }
        ],
        announcements: [
            { date: "May 15", title: "Staff Meeting", content: "All teachers are required to attend the staff meeting on Friday at 2:00 PM in the conference room." },
            { date: "May 12", title: "Exam Schedule", content: "The final exam schedule has been posted. Please review and report any conflicts." }
        ]
    };
    
    // Update dashboard with teacher data
    document.getElementById('teacherName').textContent = mockTeacherData.name;
    document.getElementById('teacherSubject').textContent = mockTeacherData.subject;
    
    // Update stats cards
    document.querySelectorAll('.stat-card')[0].querySelector('p').textContent = mockTeacherData.totalStudents;
    document.querySelectorAll('.stat-card')[1].querySelector('p').textContent = mockTeacherData.subjects;
    document.querySelectorAll('.stat-card')[2].querySelector('p').textContent = mockTeacherData.pendingGrading;
    document.querySelectorAll('.stat-card')[3].querySelector('p').textContent = mockTeacherData.classesToday;
    
    // Update today's schedule
    const classList = document.querySelector('.class-list');
    classList.innerHTML = '';
    mockTeacherData.todaysSchedule.forEach(cls => {
        const classItem = document.createElement('div');
        classItem.className = 'class-item';
        classItem.innerHTML = `
            <div class="class-time">${cls.time}</div>
            <div class="class-details">
                <h4>${cls.subject}</h4>
                <p>Room ${cls.room} - ${cls.students} Students</p>
            </div>
            <button class="btn btn-sm btn-primary">Take Attendance</button>
        `;
        classList.appendChild(classItem);
    });
    
    // Update pending tasks
    const taskList = document.querySelector('.task-list');
    taskList.innerHTML = '';
    mockTeacherData.pendingTasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <div class="task-info">
                <h4>${task.name}</h4>
                <p>${task.description}</p>
                <span class="task-due">Due: ${task.due}</span>
            </div>
            <button class="btn btn-sm btn-success">Start</button>
        `;
        taskList.appendChild(taskItem);
    });
    
    // Update announcements
    const announcementList = document.querySelector('.announcement-list');
    announcementList.innerHTML = '';
    mockTeacherData.announcements.forEach(ann => {
        const announcementItem = document.createElement('div');
        announcementItem.className = 'announcement-item';
        announcementItem.innerHTML = `
            <div class="announcement-date">${ann.date}</div>
            <div class="announcement-content">
                <h4>${ann.title}</h4>
                <p>${ann.content}</p>
            </div>
        `;
        announcementList.appendChild(announcementItem);
    });
}