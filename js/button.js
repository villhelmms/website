// Funckija izvēlās skaitli no 0 līdz 255 pēc nejaušībass principa
function randomInt() {
    return Math.floor(Math.random() * 256);
}

function toHex(number) {
    var hex = number.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}

function newRGBA() {
    var r = randomInt();
    var g = randomInt();
    var b = randomInt();
    return 'rgba(' + r + ', ' + g + ', ' + b + ', 0.5)';
}

// Funkcija izveido jaunu krāsu kodu
function newHex() {
    var r = randomInt();
    var g = randomInt();
    var b = randomInt();
    return toHex(r) + toHex(g) + toHex(b);
}

// Funkcija nomaina lapas apakšējās daļas krāsu
function changeGradient() {
    var gradientBg = document.getElementById("gradiant-bg");
    var rgbaColor = newRGBA();
    gradientBg.style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.75), ' + rgbaColor + ')';
    
    var rgbaComponents = rgbaColor.match(/\d+/g);
    var hexColor = '#' + toHex(parseInt(rgbaComponents[0])) + toHex(parseInt(rgbaComponents[1])) + toHex(parseInt(rgbaComponents[2]));

    document.getElementById("colorHexCode").innerHTML = hexColor
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