const API_URL = 'https://jsonplaceholder.typicode.com/users';
let users = [];
let currentPage = 1;
const usersPerPage = 9;

async function fetchUsers() {
  const res = await fetch(API_URL);
  const data = await res.json();

  users = [];
  const cityList = [
    "Warszawa", "Kraków", "Wrocław", "Poznań", "Gdańsk",
    "Łódź", "Lublin", "Rzeszów", "Szczecin", "Katowice"
  ];

  for (let i = 0; i < 3; i++) {
    const cloned = data.map(user => ({
      ...user,
      id: user.id + i * 10,
      name: user.name,
      address: {
        ...user.address,
        city: cityList[Math.floor(Math.random() * cityList.length)]
      }
    }));
    users = users.concat(cloned);
  }

  renderUsers();
}

function renderUsers() {
  const container = document.getElementById('user-container');
  const start = (currentPage - 1) * usersPerPage;
  const end = start + usersPerPage;

  const searchTerm = document.getElementById('search').value.toLowerCase();
  const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm)
  );

  const paginated = filteredUsers.slice(start, end);
  const isMobile = window.innerWidth < 768;
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

  if (isMobile || isTablet) {
    container.innerHTML = renderCards(paginated);
  } else {
    container.innerHTML = renderTable(paginated);
  }

  document.getElementById('page-number').textContent = currentPage;

  // Dodajemy poprawiony listener
  document.querySelectorAll('.details-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault(); // Zatrzymujemy domyślne przejście
      const userId = parseInt(btn.dataset.id);
      saveUserToLocalStorage(userId);

      // Przechodzimy po krótkim opóźnieniu
      setTimeout(() => {
        window.location.href = btn.href;
      }, 100);
    });
  });
}

function renderTable(data) {
  return `
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Imię i nazwisko</th>
          <th>Email</th>
          <th>Miasto</th>
          <th>Akcje</th>
        </tr>
      </thead>
      <tbody>
        ${data.map(user => `
          <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.address.city}</td>
            <td>
              <a class="btn details-btn" href="Szczegoly.html" data-id="${user.id}">Szczegóły</a>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function renderCards(data) {
  return `
    <div class="user-card-container">
      ${data.map(user => `
        <div class="user-card" data-id="${user.id}">
          <p><strong>ID:</strong> ${user.id}</p>
          <h4>${user.name}</h4>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Miasto:</strong> ${user.address.city}</p>
          <a class="btn details-btn" href="Szczegoly.html" data-id="${user.id}">Szczegóły</a>
        </div>
      `).join('')}
    </div>
  `;
}

function saveUserToLocalStorage(userId) {
  const selected = users.find(u => u.id === userId);
  if (selected) {
    localStorage.setItem('selectedUser', JSON.stringify(selected));
  }
}

document.getElementById('search').addEventListener('input', () => {
  currentPage = 1;
  renderUsers();
});

document.getElementById('prev').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderUsers();
  }
});

document.getElementById('next').addEventListener('click', () => {
  const filtered = users.filter(user =>
      user.name.toLowerCase().includes(document.getElementById('search').value.toLowerCase())
  );
  if (currentPage * usersPerPage < filtered.length) {
    currentPage++;
    renderUsers();
  }
});

window.addEventListener('resize', renderUsers);

fetchUsers();
