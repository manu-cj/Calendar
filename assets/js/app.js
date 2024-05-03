let body = document.querySelector('body');
let dateActuelle = new Date(Date.now())
let year = {
    year: 'numeric',
}

let month = {
    month: 'numeric',
}

let monthText = {
    month: 'long',
}

let day = {
    day: 'numeric',
}

option = {
    hour: '2-digit',
    minute: 'numeric',
    second: 'numeric'
}

let h1 = document.createElement('h1');
let contentDiv = document.createElement('div');
let monthDiv = document.createElement('div');
let mainDiv = document.createElement('div');
let yearDiv = document.createElement('div');

let monthTextData = document.createElement('p');
let monthData = document.createElement('p');
let dayData = document.createElement('p');
let yearData = document.createElement('p');

monthTextData.textContent = dateActuelle.toLocaleString('fr-FR', monthText);
dayData.textContent = dateActuelle.toLocaleString('fr-FR', day);
monthData.textContent = dateActuelle.toLocaleString('fr-FR', month);
yearData.textContent = dateActuelle.toLocaleString('fr-FR', year);

contentDiv.classList.add('content-div');
monthDiv.classList.add('month-div');
mainDiv.classList.add('main-div');
yearDiv.classList.add('year-div');

body.appendChild(contentDiv);
contentDiv.appendChild(monthDiv);
contentDiv.appendChild(mainDiv);
contentDiv.appendChild(yearDiv);
body.appendChild(h1);

monthDiv.appendChild(monthTextData);
mainDiv.appendChild(monthData);
mainDiv.appendChild(dayData);
yearDiv.appendChild(yearData);


setInterval(() => { 
    h1.textContent = dateActuelle.toLocaleString('fr-FR', option)
}, 1000);