let inputList = document.querySelectorAll("input");

inputList.forEach(function (input) {
  input.addEventListener("blur", function (event) {
    let value = event.target.value;

    if (value === "") {
      input.setAttribute("placeholder", "Este campo es obligatorio");
      input.classList.add("error");
    } else {
      input.setAttribute("placeholder", "");
      input.classList.remove("error");
    }
  });
});

let textaria = document.querySelector("textarea");
textaria.addEventListener("blur", function (event) {
  let value = event.target.value;

  if (value === "") {
    textaria.setAttribute("placeholder", "Deja un Comentario");
    textaria.classList.add("error");
  } else {
    textaria.setAttribute("placeholder", "");
    textaria.classList.remove("error");
  }
});

let alerta = document.getElementById("alerta");
let divElement = document.createElement("div");
divElement.setAttribute("id", "myDiv");
divElement.setAttribute(
  "class",
  "col-12 div p-3 mb-2 bg-danger-subtle text-emphasis-danger"
);
let form = document.getElementById("formulario");
form.addEventListener("submit", function (event) {
  let textaria = document.querySelector("textarea").value;
  let inputList = document.querySelectorAll("input").value;

  if (inputList === "" || textaria === "") {
    event.preventDefault();
    alerta.appendChild(divElement);
    divElement.textContent = "Debes completar los campos";
  }
});
