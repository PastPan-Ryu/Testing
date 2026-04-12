const btn = document.getElementById('darkModeToggle');
btn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
});
