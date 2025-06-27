const hourHand = document.getElementById("hour-hand");
const minuteHand = document.getElementById("minute-hand");
const secondHand = document.getElementById("second-hand");

function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDeg = (seconds / 60) * 360;
    const minutesDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hoursDeg = ((hours % 12) / 12) * 360 + (minutes / 60) * 30;

    secondHand.style.transform = `rotate(${secondsDeg - 90}deg)`;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();