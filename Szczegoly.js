document.addEventListener('DOMContentLoaded', () => {
    const userData = JSON.parse(localStorage.getItem('selectedUser'));
  
    if (!userData) {
      document.body.innerHTML = '<p>Brak danych użytkownika.</p>';
      return;
    }
  
    document.getElementById('name').textContent = userData.name;
    document.getElementById('email').textContent = userData.email;
    document.getElementById('city').textContent = userData.address.city; 
    document.getElementById('company').textContent = userData.company?.name || 'Brak danych';
  });

function editData() {
    document.getElementById('edit-form').style.display = 'block';
    document.querySelector('.card').querySelectorAll('p').forEach(p => p.style.display = 'none');
    
    document.getElementById('edit-name').value = document.getElementById('name').textContent;
    document.getElementById('edit-email').value = document.getElementById('email').textContent;
    document.getElementById('edit-city').value = document.getElementById('city').textContent;
    document.getElementById('edit-company').value = document.getElementById('company').textContent;
  }
  
function saveData() {
    document.getElementById('name').textContent = document.getElementById('edit-name').value;
    document.getElementById('email').textContent = document.getElementById('edit-email').value;
    document.getElementById('city').textContent = document.getElementById('edit-city').value;
    document.getElementById('company').textContent = document.getElementById('edit-company').value;
    
    document.getElementById('edit-form').style.display = 'none';
    document.querySelector('.card').querySelectorAll('p').forEach(p => p.style.display = 'block');
  }
  
  function cancelEdit() {
    document.getElementById('edit-form').style.display = 'none';
    document.querySelector('.card').querySelectorAll('p').forEach(p => p.style.display = 'block');
  }
  