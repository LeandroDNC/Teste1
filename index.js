function validateLogin() {
    var login = document.getElementById('login').value;
    var password = document.getElementById('password').value;

    if (login === 'padrao' && password === '123456') {
        window.location.href = './paginainicial/index.html';
        return false;

    } else {
        alert('Login ou senha incorretos.');
        return false;
    }
}



function selectAno() {
    var popup = document.getElementById("popupano");
    var ano = document.getElementById("ano");
    if (popup.style.display === "none" || popup.style.display === "") {
        popup.style.display = "block";
        ano.style.top = "-4em"

    } else {
        popup.style.display = "none";
        ano.style.top = "-10.4rem"

    }
}

function selectMes() {
    var popup = document.getElementById("popupmes");
    var ano = document.getElementById("mes");
    if (popup.style.display === "none" || popup.style.display === "") {
        popup.style.display = "block";
        ano.style.top = "-4em"

    } else {
        popup.style.display = "none";
        ano.style.top = "-10.4rem"
    }
}

function abrirPopupSaur() {

    const confirmar = document.getElementById("confirm").addEventListener("click", function () {
        window.location.href = "/index.html"
    });
    const cancel = document.getElementById("cancel").addEventListener("click", function () {
        popupsair.style.display = "none"
    });
    if (popupsair.style.display = "none") {
        popupsair.style.display = "flex"
    } else {
        popupsair.style.display = "none"
    };
}


