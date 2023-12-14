const date = new Date();
const xmas = 25;
const today = date.getDate();

const dayBadge = document.querySelector('.header .badge');
dayBadge.innerText = today;

function createDays( limit = xmas){
    const days = [];
    for(let i = 1; i <= limit; i++){
        days.push(i);
    }
    return days;
}

const days =createDays(xmas);