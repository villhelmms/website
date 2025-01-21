console.log("Tests 22.01.2024")

// Izvēlās skaitli no 0 līdz 255 pēc nejaušībass principa (Random)
function randomInt() {
    return Math.floor(Math.random() * 256)
}

// Pārveido decimājo skaitli (Base 10) uz heksadecimālo skaitli (Base 16)
function toHex(number) {
    var hex = number.toString(16)
    return hex.length === 1 ? '0' + hex : hex
}

// Mainīgajām vērtībām tiek piešķirts skaitlis un pārveidots par RGBA krāsu kodu
function newRGBA() {
    var r = randomInt()
    var g = randomInt()
    var b = randomInt()
    return 'rgba(' + r + ', ' + g + ', ' + b + ', 1)'
}

// Funkcija nomaina lapas apakšējās daļas krāsu
function changeGradient() {
    var gradientBg = document.getElementById("gradiant-bg")
    var rgbaColor = newRGBA()
    gradientBg.style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.75), ' + rgbaColor + ')'
    
    var rgbaComponents = rgbaColor.match(/\d+/g)
    var hexColor = '#' + toHex(parseInt(rgbaComponents[0])) + toHex(parseInt(rgbaComponents[1])) + toHex(parseInt(rgbaComponents[2]));

    document.getElementById("colorHexCode").innerHTML = hexColor

    // Saraksts ar krāsām un paskaidrojumiem
    const colorData = [
        {colorHexData: "#000000", colorDescData: "baltā krāsa"},
        {colorHexData: "#ffffff", colorDescData: "melnā krāsa"},
        {colorHexData: "#fad31b", colorDescData: "Valkas Jāņa Cimzes ģimnāzijas dzeltenā krāsa"},
        {colorHexData: "#007fbf", colorDescData: "Valkas Jāņa Cimzes ģimnāzijas zilā krāsa"}
    ]

    // Nomaina paziņojuma saturu
    for (const color of colorData) {
        if (hexColor === color.colorHexData) {
            var colorModal = new bootstrap.Modal(document.getElementById('alertColor'))
            colorModal.show()

            isModalOpen = true

            document.getElementById("color-alert").innerHTML = hexColor
            document.getElementById("color-desc-alert").innerHTML = color.colorDescData

            colorModal._element.addEventListener('hidden.bs.modal', function () {
                isModalOpen = false;
            });
        }
    }

    // Ja izkrīt baltā krāsa
    if (hexColor === "#000000") {

        var colorModal = new bootstrap.Modal(document.getElementById('alertColor'))
        colorModal.show()

        console.log("Balts")
        document.getElementById("color-alert").innerHTML = "#000000"
        document.getElementById("color-desc-alert").innerHTML = "baltā krāsa"
    }
}

// Funkcija maina lapas apakšējās daļas krāsu ik pēc 1 sekundes
var isModalOpen = false
var isToggled = false
var colorTime = 1000
function toggleChangeGradient() {
    isToggled = !isToggled
    var toggleButton = document.getElementById("toggleButton")
    if (isToggled) {
        toggleButton.textContent = "Izslēgt krāsu maiņu"
        var intervalId = setInterval(function() {
            if (!isModalOpen) {
                changeGradient()
            }
        }, colorTime)
        toggleButton.onclick = function() {
            isToggled = true
            clearInterval(intervalId)
            toggleButton.textContent = "Ieslēgt krāsu maiņu"
            toggleButton.onclick = toggleChangeGradient
        }
    } else {
        toggleButton.textContent = "Ieslēgt krāsu maiņu"
    }
}
