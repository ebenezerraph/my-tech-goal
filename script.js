// Date and time
function updateDateTime() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.querySelector('.time').textContent = `${hours}:${minutes}`;

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayOfWeek = days[now.getDay()];
    document.querySelector('.day').textContent = dayOfWeek;
}

updateDateTime();
setInterval(updateDateTime, 1000);

// Modal
document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'none';
})