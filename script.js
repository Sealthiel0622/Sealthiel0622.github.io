
function showSection(targetId) {
    document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
    document.getElementById(targetId).classList.add('active');
}

document.getElementById('login-btn')?.addEventListener('click', function() {
    const password = document.getElementById('password').value;
    if (password === '090625') {
        showSection('menu-section');
    } else {
        alert('Wrong password! Try again.');
    }
});

document.querySelectorAll('[data-target]').forEach(element => {
    element.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        showSection(target);
    });
});


document.getElementById('audio-player')?.addEventListener('play', function() {

});
