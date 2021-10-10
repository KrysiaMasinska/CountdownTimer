const settings = document.querySelector('.counterApp__seetings');
const settingsBtn = document.querySelector('.settingsBtn');
const imageSection = document.querySelector('.imageSection');

const eventName = document.querySelector('#eventName');
const eventDay = document.querySelector('#eventDay');
const eventMonth = document.querySelector('#eventMonth');
const eventYear = document.querySelector('#eventYear');
const eventImage = document.querySelector('#eventImage');

const daysCount = document.querySelector('.daysCount');
const hoursCount = document.querySelector('.hoursCount');
const minutesCount = document.querySelector('.minutesCount');
const secondsCount = document.querySelector('.secondsCount');

const saveBtn = document.querySelector('.save');
const eventSpan = document.querySelector('.event');

let usersTime;

// https://cdn.pixabay.com/photo/2020/03/12/22/26/drops-4926381_960_720.jpg

const setTime = () => {
    const currentTime = new Date();
    const result = usersTime - currentTime;

    const days = Math.floor(result / 1000 / 60 / 60 / 24);
    const hours = Math.floor(result / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(result / 1000 / 60) % 60;
    const seconds = Math.floor(result / 1000) % 60;

    daysCount.textContent = days;
    hoursCount.textContent = hours;
    minutesCount.textContent = minutes;
    secondsCount.textContent = seconds;
}

const updateApp = () => {
    eventSpan.textContent = eventName.value;
    usersTime = new Date(`${eventMonth.value} ${eventDay.value} ${eventYear.value}`);
    imageSection.style.backgroundImage = `url('${eventImage.value}')`;
    setTime();
}

settingsBtn.addEventListener('click', () => {
    settings.classList.toggle('active');
});
saveBtn.addEventListener('click', updateApp);
updateApp();
setInterval(setTime, 1000);