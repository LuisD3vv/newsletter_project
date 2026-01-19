function extraerValor(input) {
    return input.value;
}


function validar() {
    let emailRegex = /^\w+@\w+\.\w+$/
    let email = document.querySelector("#email");
    let error = document.querySelector("span");

    email.addEventListener("input",()=>{
        console.log(extraerValor(email));
    })
    if (!extraerValor(email)) {
        error.setAttribute("class","errorstate")
        email.setAttribute("class","error")
        setTimeout(()=>{
            error.removeAttribute("class","errorstate")
            email.removeAttribute("class","error")
        },3000)
        }
    else {
        if (emailRegex.test(extraerValor(email))){
            let emailsuccees = document.querySelector(".succmail");
            window.location.href="success.html";
            emailsuccees.textContent = extraerValor(email);
            console.log(extraerValor(email))
            console.log("correo valido")
        }
        else {
        alert("Debes cumplir con el formato del correo");
        console.log("correo invalido");
        }
    }
}

function dismiss() {
window.location.href="index.html";
}