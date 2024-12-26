
function startCountdown(targetDate) {
    function updateTimer() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            document.getElementById('countdown').innerHTML = "Happy New Year!";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }

    const interval = setInterval(updateTimer, 1000);
    updateTimer();
}

const targetDate = new Date("January 1, 2025 00:00:00").getTime();
startCountdown(targetDate);






function submitEmail() {
    const email = document.getElementById('email').value;
    if (email) {
        alert(`Құттықтаймыз! Сіз ${email} бойынша жеңілдікке ие болдыңыз!`);
    } else {
        alert('Поштаңызды енгізіңіз!');
    }
}


window.onscroll = function() {
    let topBtn = document.querySelector('.top-btn');
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let middlePosition = windowHeight / 2;

    if (scrollPosition >= middlePosition) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};