document.addEventListener('DOMContentLoaded', () => {
    const userData = JSON.parse(localStorage.getItem('selectedUser'));

    if (!userData) {
        document.body.innerHTML = '<p>Brak danych użytkownika.</p>';
        return;
    }

    // Wyświetl dane użytkownika
    document.getElementById('name').textContent = userData.name;
    document.getElementById('email').textContent = userData.email;
    document.getElementById('city').textContent = userData.address.city;
    document.getElementById('company').textContent = userData.company?.name || 'Brak danych';

    // Zachowaj dane w formularzu do edycji
    document.getElementById('edit-name').value = userData.name;
    document.getElementById('edit-email').value = userData.email;
    document.getElementById('edit-city').value = userData.address.city;
    document.getElementById('edit-company').value = userData.company?.name || 'Brak danych';
});

// Funkcja edytowania danych
function editData() {
    document.getElementById('edit-form').style.display = 'block';
    document.querySelector('.card').querySelectorAll('p').forEach(p => p.style.display = 'none');

    // Ustawienie początkowych danych w formularzu edycji
    document.getElementById('edit-name').value = document.getElementById('name').textContent;
    document.getElementById('edit-email').value = document.getElementById('email').textContent;
    document.getElementById('edit-city').value = document.getElementById('city').textContent;
    document.getElementById('edit-company').value = document.getElementById('company').textContent;
}

// Funkcja zapisywania danych
function saveData() {
    // Zaktualizowanie danych na stronie
    document.getElementById('name').textContent = document.getElementById('edit-name').value;
    document.getElementById('email').textContent = document.getElementById('edit-email').value;
    document.getElementById('city').textContent = document.getElementById('edit-city').value;
    document.getElementById('company').textContent = document.getElementById('edit-company').value;

    // Zaktualizowanie danych w localStorage
    const updatedUser = {
        name: document.getElementById('edit-name').value,
        email: document.getElementById('edit-email').value,
        address: {
            city: document.getElementById('edit-city').value
        },
        company: {
            name: document.getElementById('edit-company').value
        }
    };
    localStorage.setItem('selectedUser', JSON.stringify(updatedUser));

    // Ukrycie formularza edycji i przywrócenie widoczności danych
    document.getElementById('edit-form').style.display = 'none';
    document.querySelector('.card').querySelectorAll('p').forEach(p => p.style.display = 'block');
}

// Funkcja anulowania edycji
function cancelEdit() {
    // Ukrycie formularza edycji i przywrócenie widoczności danych
    document.getElementById('edit-form').style.display = 'none';
    document.querySelector('.card').querySelectorAll('p').forEach(p => p.style.display = 'block');
}
