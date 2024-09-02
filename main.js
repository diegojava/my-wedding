function decryptInvite() {
  let nombre = document.getElementById('nombre')
  const urlParams = new URLSearchParams(window.location.search);
  const key = urlParams.get('token');
  const decrypt = atob(key)
  const parseDecrypt = JSON.parse(decrypt)
  nombre.innerText = parseDecrypt.nombre
}

decryptInvite()