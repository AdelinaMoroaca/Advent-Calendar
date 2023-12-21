const date = new Date();
const xmas = 25;
const today = date.getDate();
const messageParagraph = document.querySelector('.message');
const dayBadge = document.querySelector('.header .badge');
dayBadge.innerText = today;

// day calendar iteration
function createDays( limit = xmas){
    const days = [];
    for(let i = 1; i <= limit; i++){
        days.push(i);
    }

    for(let i = days.length - 1; i > 0; i-- ){
        const j = Math.floor(Math.random() * (i + 1));

        [days[i],days[j]] = [days[j], days[i]];
    }
    return days;
}

const days = createDays(xmas);

const calendar = document.querySelector('.calendar');
const fragment = new DocumentFragment();

for (let i = 0; i < days.length; i++) {
    const li = document.createElement('li');
    const button = document.createElement('button');
    const randomVariantClass = 'variant-' + (Math.floor(Math.random() * 3) + 1);
    button.type = 'button';
    button.classList.add('calendar-page', randomVariantClass);
    li.append(button);

    if( today > days[i]) {
        button.classList.add('done');
    }

    if(today === days[i]){
        button.addEventListener('click', function(){
            const daysLeft = xmas - today;
            let message = `Mai sunt ${daysLeft} zile pana la Craciun`;

            if(daysLeft === 1){
                message = `Mai este o zi pana la Craciun!`
            }
            messageParagraph.innerText = message;
        })
    }

    const shine = document.createElement('span');
    shine.classList.add('shine');
    button.append(shine);

    const day = document.createElement('span');
    day.classList.add('day');
    day.innerText = days[i];
    button.append(day);

    const pins = document.createElement('span');
    pins.classList.add('pins');
    button.append(pins);

    fragment.append(li);
}

calendar.append(fragment);