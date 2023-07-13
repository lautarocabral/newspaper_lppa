const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const age = document.getElementById("age");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const city = document.getElementById("city");
const postalcode = document.getElementById("postalcode");
const dni = document.getElementById("dni");


var showModalBtn = document.getElementById('showModalBtn');
var modal = document.getElementById('modal');
var closeBtn = document.getElementsByClassName('close')[0];

var contentmodal = document.getElementById('contentmodal');


closeBtn.addEventListener('click', function () {
    modal.style.display = 'none'; // Hide the modal
    window.location.reload();
});

function onlyLettersAndNumbers(str) {
    return /^[A-Za-z0-9]*$/.test(str);
}
function onlyLettersAndNumbersAndSpaces(str) {
    return /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/.test(str);
}

function validateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        return true;
    }
    else {
        return false;
    }
}
email.addEventListener("input", function (event) {

    if (validateEmail(email.value)) {
        email.setCustomValidity("");
    } else {
        email.setCustomValidity("Debe tener un formato de email válido");
    }
});

nameInput.addEventListener("input", function (event) {
    console.log(nameInput.value);
    if (nameInput.value.length >= 6 && nameInput.value.includes(" ")) {
        nameInput.setCustomValidity("");
    } else {
        nameInput.setCustomValidity("Debe tener más de 6 letras y al menos un espacio entre medio.");
    }
});

password.addEventListener("input", function (event) {
    console.log(password.value);
    if (password.value.length >= 8 && onlyLettersAndNumbers(password.value)) {
        password.setCustomValidity("");
    } else {
        password.setCustomValidity("Al menos 8 caracteres, formados por letras y números.");
    }
});

age.addEventListener("input", function (event) {
    console.log(age.value);
    if (parseInt(age.value) >= 18) {
        age.setCustomValidity("");
    } else {
        age.setCustomValidity("Debe der mayor de 18 años");
    }
});

phone.addEventListener("input", function (event) {
    console.log(phone.value);
    if (phone.value.length >= 7 && !phone.value.includes("-")) {
        phone.setCustomValidity("");
    } else {
        phone.setCustomValidity("Número de al menos 7 dígitos");
    }
});

address.addEventListener("input", function (event) {
    console.log(address.value);
    if (address.value.length >= 5 && onlyLettersAndNumbersAndSpaces(address.value)) {
        address.setCustomValidity("");
    } else {
        address.setCustomValidity("Al menos 5 caracteres, con letras, números y un espacio en el medio.");
    }
});

city.addEventListener("input", function (event) {
    console.log(city.value);
    if (city.value.length >= 3) {
        city.setCustomValidity("");
    } else {
        city.setCustomValidity("Al menos 3 caracteres");
    }
});

postalcode.addEventListener("input", function (event) {
    console.log(postalcode.value);
    if (postalcode.value.length >= 3) {
        postalcode.setCustomValidity("");
    } else {
        postalcode.setCustomValidity("Al menos 3 caracteres");
    }
});

dni.addEventListener("input", function (event) {
    console.log(dni.value);
    if (dni.value.length > 6 && dni.value.length < 9) {
        dni.setCustomValidity("");
    } else {
        dni.setCustomValidity("Al menos 3 caracteres");
    }
});


// form.addEventListener("submit", function (event) {
//     if (!form.checkValidity()) {
//         event.preventDefault();
//     } else {
//         sendRequest()
//     }
// });

// function validateForm(event) {
//     loadAjax();
//     event.preventDefault()
//     if (!form.checkValidity()) {
//         event.preventDefault();
//     } else {
//         sendRequest()
//     }
// }

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents form submission from refreshing the page
    if (!form.checkValidity()) {
        event.preventDefault();
    } else {
        sendRequest()
    }
});


function sendRequest() {
    var xhr = new XMLHttpRequest();

    // https://my-json-server.typicode.com/typicode/demo
    var url = "nombre=" + encodeURIComponent(nameInput.value) + "&email=" + encodeURIComponent(email.value) + "&password=" + encodeURIComponent(password.value) +
        "&edad=" + encodeURIComponent(age.value) + "&telefono=" + encodeURIComponent(phone.value) + "&direccion=" + encodeURIComponent(address.value) + "&ciudad=" + encodeURIComponent(city.value)
        + "&codigo=" + encodeURIComponent(postalcode.value) + "&dni=" + encodeURIComponent(dni.value);
    console.log(url);

    contentmodal.textContent = url;
    modal.style.display = 'block'; // Show the modal

    // var xmlHttp = new XMLHttpRequest();
    // xmlHttp.open("GET", "https://jsonplaceholder.typicode.com/posts/1", false); // false for synchronous request
    // xmlHttp.send(null);
    // console.log(xmlHttp.responseText);
    // return xmlHttp.responseText;

}



// function test() {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open("GET", "https://jsonplaceholder.typicode.com/posts", false); // false for synchronous request
//     xmlHttp.send(null);
//     console.log(xmlHttp.responseText);
//     return xmlHttp.responseText;
// }