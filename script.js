function initializeCleave() {
    var cleave = new Cleave('.input-element', {
        date: true,
        delimiter: '-',
        datePattern: ['m', 'd', 'Y']
    });
}

function calculateDateDifference() {
    let userInput = document.querySelector('.input-element').value;
    let userDate = new Date(userInput);
    let currentDate = new Date();

    let differenceInTime = currentDate.getTime() - userDate.getTime();
    let differenceInDays = differenceInTime / (1000 * 3600 * 24);

    let { years, months, days } = calculateYearsMonthsDays(userDate, currentDate);

    let resultElement = document.getElementById('resultText');
    resultElement.textContent = `${years} years, ${months} months, and ${days} days ago`;

    console.log(differenceInDays + ' days ago');
}

function calculateYearsMonthsDays(startDate, endDate) {
    let diffInDays = Math.floor((endDate - startDate) / (1000 * 3600 * 24));
    let years = Math.floor(diffInDays / 365.25); 
    diffInDays -= years * 365.25;

    let months = Math.floor(diffInDays / 30);
    diffInDays -= months * 30;

    let days = Math.floor(diffInDays);

    return { years, months, days };
}


function getDate() {
    let currentDate = new Date();
    let dayElement = document.querySelector(".day .date");

    let formattedDate = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
    dayElement.textContent = formattedDate;
}


function getTime() {
    let currentTime = new Date();
    let timeElement = document.querySelector(".time");
    let formattedTime = currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
    timeElement.textContent = formattedTime;
}

window.addEventListener('load', function() {
    getDate();
    getTime();
});

document.getElementById('calculateButton').addEventListener('click', calculateDateDifference);

setInterval(getDate, 1000);
setInterval(getTime, 1000);
