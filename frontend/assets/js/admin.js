document.addEventListener('DOMContentLoaded', async () => {
  // Check authentication
  if (!await checkAuth('admin')) {
    window.location.href = '../../auth/login.html';
    return;
  }

  // Load admin data
  await loadAdminData();
  
  // Load dashboard stats
  await loadDashboardStats();
  
  // Load recent students
  await loadRecentStudents();
  
  // Initialize charts
  initCharts();
  
  // Set up event listeners
  document.getElementById('logoutBtn').addEventListener('click', logout);
});

async function loadAdminData() {
  try {
    const response = await fetch('/api/auth/me', {
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    });
    
    if (!response.ok) throw new Error('Failed to fetch admin data');
    
    const admin = await response.json();
    document.getElementById('adminName').textContent = `${admin.firstName} ${admin.lastName}`;
  } catch (error) {
    console.error('Error loading admin data:', error);
  }
}

async function loadDashboardStats() {
  try {
    const response = await fetch('/api/admin/dashboard', {
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    });
    
    if (!response.ok) throw new Error('Failed to fetch dashboard stats');
    
    const stats = await response.json();
    renderStatsCards(stats);
  } catch (error) {
    console.error('Error loading dashboard stats:', error);
  }
}

function renderStatsCards(stats) {
  const statsRow = document.querySelector('.stats-row');
  
  statsRow.innerHTML = `
    <div class="col-md-3">
      <div class="stat-card bg-primary">
        <h3>${stats.studentsCount}</h3>
        <p>Total Students</p>
        <i class="bi bi-people"></i>
      </div>
    </div>
    <div class="col-md-3">
      <div class="stat-card bg-success">
        <h3>${stats.teachersCount}</h3>
        <p>Total Teachers</p>
        <i class="bi bi-person-badge"></i>
      </div>
    </div>
    <div class="col-md-3">
      <div class="stat-card bg-warning">
        <h3>${stats.classesCount}</h3>
        <p>Total Classes</p>
        <i class="bi bi-building"></i>
      </div>
    </div>
    <div class="col-md-3">
      <div class="stat-card bg-danger">
        <h3>${stats.subjectsCount}</h3>
        <p>Total Subjects</p>
        <i class="bi bi-book"></i>
      </div>
    </div>
  `;
}

// Other admin functions...