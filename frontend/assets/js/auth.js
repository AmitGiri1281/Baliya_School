document.addEventListener('DOMContentLoaded', function() {
    // Role selection
    const roleButtons = document.querySelectorAll('.role-btn');
    roleButtons.forEach(button => {
        button.addEventListener('click', function() {
            roleButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Login form submission
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('rememberMe').checked;
        const role = document.querySelector('.role-btn.active').dataset.role;
        
        // Here you would typically make an API call to your backend
        console.log('Login attempt:', { username, password, rememberMe, role });
        
        // Simulate login (replace with actual API call)
        setTimeout(() => {
            // Redirect based on role
            switch(role) {
                case 'student':
                    window.location.href = '../student/dashboard.html';
                    break;
                case 'teacher':
                    window.location.href = '../teacher/dashboard.html';
                    break;
                case 'admin':
                    window.location.href = '../admin/dashboard.html';
                    break;
            }
        }, 1000);
    });
});