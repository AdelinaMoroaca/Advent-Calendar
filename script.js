const date = new Date();
const today = date.getDate();

const dayBadge = document.querySelector('.header .badge');
dayBadge.innerText = today;