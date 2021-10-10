const settings = document.querySelector('.counterApp__seetings');
const settingsBtn = document.querySelector('.settingsBtn');





settingsBtn.addEventListener('click', () =>{
    settings.classList.toggle('active');
});