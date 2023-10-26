// Funckija izvēlās skaitli no 0 līdz 255 pēc nejaušībass principa
function randomInt() {
    return Math.floor(Math.random() * (255 - 0) + 0);
}

// Funkcija izveido jaunu krāsu kodu (hex)
function newHex() {
    return randomInt() + ', ' + randomInt() + ', ' + randomInt() + ', '
}

// Funkcija nomaina lapas apakšējās daļas krāsu
function changeGradient() {
    var gradientBg = document.getElementById("gradiant-bg");
    gradientBg.style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(' + newHex() + '0.5))';
}

// Funkcija maina lapas apakšējās daļas krāsu ik pēc 1 sekundes
var isToggled = false;
function toggleChangeGradient() {
    isToggled = !isToggled;
    var toggleButton = document.getElementById("toggleButton");
    if (isToggled) {
        toggleButton.textContent = "Izslēgt krāsu maiņu";
        var intervalId = setInterval(changeGradient, 1000);
        toggleButton.onclick = function() {
            isToggled = false;
            clearInterval(intervalId);
            toggleButton.textContent = "Ieslēgt krāsu maiņu";
            toggleButton.onclick = toggleChangeGradient;
        };
    } else {
        toggleButton.textContent = "Ieslēgt krāsu maiņu";
    }
}