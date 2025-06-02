function validar() {
  let nombre = document.getElementById("name").value;
  let email = document.getElementById("mail").value;
  let contacto = document.getElementById("contacto").value;
  if (nombre.trim() === "" || email.trim() === "" || contacto.trim() === "") {
    alert("Por favor, completa todos los campos.");
  } else {
    alert("Formulario enviado correctamente.");
  }
}
