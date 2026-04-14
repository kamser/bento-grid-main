const $ = el => document.querySelector(el);

let darkMode = localStorage.getItem('dark-mode');

const darkModeSwitch = $('#dm-switch');

const enableDarkMode = () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'active');
}

const disableDarkMode = () => {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('dark-mode', null);
}

if(darkMode === 'active') enableDarkMode();

darkModeSwitch.addEventListener('click', e => {
    darkMode = localStorage.getItem('dark-mode');
    darkModeSwitch.checked ? enableDarkMode() : disableDarkMode();
});