function extraerValor(input) {
  return input.value;
}

function validar() {
  let emailRegex = /^\w+@\w+\.\w+$/;
  let email = document.querySelector("#email");
  let error = document.querySelector("span");

  email.addEventListener("input", () => {
    console.log(extraerValor(email));
  });
  if (!extraerValor(email)) {
    error.setAttribute("class", "errorstate");
    email.setAttribute("class", "error");
    setTimeout(() => {
      error.removeAttribute("class", "errorstate");
      email.removeAttribute("class", "error");
    }, 3000);
  } else {
   alert("Formato de correo incorrecto (e.g algo@mail.com)")
  }
  
   if (emailRegex.test(extraerValor(email))) {
        const Guardarcorreo = extraerValor(email);
        // guardar objetos y strings temporalmente, con clave y valor
      localStorage.setItem("correo", Guardarcorreo); // con set los guardamos en eset caso string
      window.location.href = "success.html"; 
    }
}

function dismiss() {
  window.location.href = "index.html";
}
document.addEventListener("DOMContentLoaded", () => {
  let spancorreo = document.querySelector(".succmail");
  // aqui lo traemos con getitem/ siminlar a un dic
  const correo = localStorage.getItem("correo");
  if (correo) {
    spancorreo.textContent = correo;
  }
});
