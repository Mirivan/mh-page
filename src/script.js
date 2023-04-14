function openNav() {
    document.getElementById("navigation-drawer").style.width = "100%";
}
  
function closeNav() {
    document.getElementById("navigation-drawer").style = "";
    
}

function loadUpdate() {
    const latestVersion = document.getElementById("latest-version");
    const downloadUrl = document.getElementById("download-url");
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://raw.githubusercontent.com/Mirivan/mh-repository/main/update.json', false);
    xhr.send();
    if (xhr.status === 200) {
        const result = JSON.parse(xhr.responseText);
        latestVersion.append(" " + result["version"])
        downloadUrl.href = result["url"];
    }
}

function loadScreenshots() {
    var images = [];
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://raw.githubusercontent.com/Mirivan/mh-repository/main/mh-page.json', false);
    xhr.send();
    if (xhr.status === 200) {
        const result = JSON.parse(xhr.responseText)["screenshots"];
        images = result;
    }
    return images;
}

let slideIndex = 1;

function previousSlide() {
    drawSlide(slideIndex -= 1);
}

function nextSlide() {
    drawSlide(slideIndex += 1);
}

function drawSlide(index) {
    const slideImg = document.getElementById("slide-image");
    const slideNumber = document.getElementById("slide-number");
    const images = loadScreenshots();
    if (index > images.length) {
        slideIndex = 1
    }
    if (index < 1) {
        slideIndex = images.length
    }
    slideImg.src = images[slideIndex - 1];
    slideNumber.innerHTML = `${slideIndex} / ${images.length}`;
}

function main() {
    loadUpdate();
    drawSlide(slideIndex);
}