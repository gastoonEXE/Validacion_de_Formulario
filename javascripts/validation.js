

const correo_confirmar = document.getElementById("email_confirm");
const form = document.getElementById('form'); //almacena DOM del formulario
const element = document.createElement('p')
const message = document.createTextNode("El correo electrónico no coincide")
const campo_contenido = document.getElementById('campo_contendo');
element.appendChild(message);
element.setAttribute('id', 'alert');
element.classList.add("alert");


correo_confirmar.addEventListener('input', () => {
  if (form.email.value !== form.email_confirm.value) 
  {
    if (!document.getElementById('alert')) 
    {
      campo_contenido.parentNode.insertBefore(element, campo_contenido);
      correo_confirmar.classList.add("confirmacion_alert");
    }
  } 
  else 
  {
    element.parentNode.removeChild(element);
    correo_confirmar.classList.remove("confirmacion_alert");
  }
});
