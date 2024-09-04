const button = document.getElementById("boton")
button.addEventListener('click', sendWhatsApp)

function decryptInvite() {
  let nombre = document.getElementById('nombre')
  const urlParams = new URLSearchParams(window.location.search);
  const key = urlParams.get('token') .replace(/-/g, '+').replace(/_/g, '/');
  const decrypt = atob(key)
  const parseDecrypt = JSON.parse(decrypt)
  nombre.innerText = parseDecrypt.nombre
}

function sendWhatsApp() {
  const yes = document.getElementById("check-yes")
  const yesmsg = 'Quiero confirmar mi asistencia a la Boda Jos y Diego :)'
  const nomsg = 'Lo siento, no podré asistir :('
  
  let msg = yes.checked ? yesmsg : nomsg
  console.log(msg);
  
  window.open('https://api.whatsapp.com/send?phone=527332945812&text=' + msg, '_blank')
  
}

//https://api.whatsapp.com/send?phone=527332945812&text=Hola%20esto%20es%20un%20mensaje%20autom%C3%A1tico

decryptInvite()