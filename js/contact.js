console.log("Parole: i4j2so8g49j2")

document.getElementById("submitButton").addEventListener('click', function() {
    const correctPassword = "i4j2so8g49j2";
    const name = document.getElementById('forName').value.trim();
    const email = document.getElementById('forEmail').value.trim();
    const password = document.getElementById('forPassword').value.trim();
    const message = document.getElementById('forInput').value.trim();

    if (!name || !email || !password || !message) {
        const modal2 = new bootstrap.Modal(document.getElementById('alertFormNotFull'));
        modal2.show();
        return;
    }

    if (password !== correctPassword) {
        const modal3 = new bootstrap.Modal(document.getElementById('alertWrongPassword'));
        modal3.show();
        return;
    }
 
    const modal = new bootstrap.Modal(document.getElementById('alertForm'));
    modal.show();
});
