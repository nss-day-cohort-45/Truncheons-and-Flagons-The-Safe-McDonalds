// Selector
const eventHub = document.querySelector('.container');

// DOM element to alter
const legendInfo = document.getElementById('legend__text');

// If the legend button is pressed, toggle the hidden state of the legend information
eventHub.addEventListener("click", event =>{
    if(event.target.id === 'legend__button'){
        legendInfo.classList.toggle('isHidden');
    }
});