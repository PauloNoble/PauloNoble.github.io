
const BTNSWITCH = document.querySelector('#switch');

BTNSWITCH.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    BTNSWITCH.classList.toggle('active');
});