function decryptInvite() {
  let nombre = document.getElementById('nombre')
  const urlParams = new URL(window.location);
  const key = urlParams.pathname.substring(1);
  const decrypt = atob(key)
  const parseDecrypt = JSON.parse(decrypt)
  nombre.innerText = parseDecrypt.nombre
}


decryptInvite()

//sendInviteWithEncodedID('16112024w1')