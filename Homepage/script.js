const pricePara = document.querySelector('.price'),
tutorPara = document.querySelector('.tutor-p'),
heading = document.querySelector('.heading'),
classButton = document.querySelector('.class-button'),
infoButton = document.querySelector('.info-button');

function showInfo(e) {
    tutorPara.style.display = "block";
    pricePara.style.display = "none";
    heading.innerHTML = "About me";
    infoButton.style.height = "70%";
    classButton.style.height = "30%";
}

function showPrice(e) {
    tutorPara.style.display = "none";
    pricePara.style.display = "block";
    heading.innerHTML = "About my Class";
    classButton.style.height = "70%";
    infoButton.style.height = "30%";
}