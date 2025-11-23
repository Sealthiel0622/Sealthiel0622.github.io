// Function to show a section
function showSection(targetId) {
    document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
    document.getElementById(targetId).classList.add('active');
}

// Login functionality
document.getElementById('login-btn')?.addEventListener('click', function() {
    const password = document.getElementById('password').value;
    if (password === 'tetel') {
        showSection('menu-section');
    } else {
        alert('Wrong password! Try again.');
    }
});

// Menu and back button navigation
document.querySelectorAll('[data-target]').forEach(element => {
    element.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        showSection(target);
    });
});

// Audio controls (minimal, uses native HTML5)
document.getElementById('audio-player')?.addEventListener('play', function() {
    // Optional: Add custom effects here if needed
});
