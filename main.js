const invites = [
  {
    id: '16112024w1',
    name: 'Agustín Jaimes y Sra.',
    phone: '5538819307',//'7331566491',
    places: 2
  },
  {
    id: '16112024w2',
    name: 'Manuel Ortega y Sra.',
    phone: '9931915483',
    places: 2
  },
  {
    id: '16112024w3',
    name: 'Daniel Jaimes y esposa',
    places: 3
  },
  {
    id: '16112024w4',
    name: 'Sr Agustín y Srita. Brenda',
    phone: '5567020892',
    places: 2
  },
  {
    id: '16112024w5',
    name: 'Sr. Jacobo Kuri',
    places: 2
  },
  {
    id: '16112024w6',
    name: 'Sra. Thalia de los Santos',
    places: 1
  },
  {
    id: '16112024w7',
    name: 'Sr. Carlos Notario',
    places: 2
  },
  {
    id: '16112024w8',
    name: 'Sra. Margarita Vázquez',
    places: 2
  },
  {
    id: '16112024w9',
    name: 'Sr. Gonzalo Rodríguez',
    places: 2
  },
  {
    id: '16112024w10',
    name: 'Sra. Graciela Jaimes',
    places: 1
  },
  {
    id: '16112024w11',
    name: 'Sra. Leonor Jaimes y Sra. Carmen Brito',
    places: 2
  },
  {
    id: '16112024w12',
    name: 'Srita. Fernanda Jaimes',
    places: 2
  },
  {
    id: '16112024w13',
    name: 'Sr. Francisco Jaimes y Sra.',
    places: 2
  },
  {
    id: '16112024w14',
    name: 'Alexander Jaimes Román',
    places: 2
  },
  {
    id: '16112024w15',
    name: 'Eduardo Jaimes Román',
    places: 2
  },
  {
    id: '16112024w16',
    name: 'Sergio Calderón',
    places: 2
  },
  {
    id: '16112024w17',
    name: 'Sr. Jorge Uribe y Sra.',
    places: 2
  },
  {
    id: '16112024w18',
    name: 'Sr. Antonio González y Sra.',
    places: 2
  },
  {
    id: '16112024w19',
    name: 'Srita. Stephanie González',
    places: 2
  },
  {
    id: '16112024w20',
    name: 'Sr. Antonio Jaimes y Sra.',
    places: 2
  },
  {
    id: '16112024w21',
    name: 'Sr. Antonio Jaimes Membrila',
    places: 2
  },
  {
    id: '16112024w22',
    name: 'Sra. Aseret Jaimes Membrila',
    places: 2
  },
  {
    id: '16112024w23',
    name: 'Srita. Alondra Jaimes Membrila',
    places: 2
  },
  {
    id: '16112024w24',
    name: 'Sr. Antonio Jaimes Delgado',
    places: 2
  },
  {
    id: '16112024w25',
    name: 'Sra. Gissele Rosas',
    places: 2
  },
  {
    id: '16112024w26',
    name: 'Sr. Carlos Saldaña y Sra.',
    places: 2
  }
]

let PHONE = ''
let message = ''
let API_WHATSAPP = ''

function sendInviteWithEncodedID(id) {
  PHONE = getPhone(id)
  const url = 'http://localhost:5173/?invite=' + id
  console.log(url);
  message = `¡Hola! Tenemos el gusto de invitarte a nuestra boda. Ingresa a ${url} para ver los detalles. Con Cariño Joss y Diego.`
  console.log(message)
  API_WHATSAPP = `https://api.whatsapp.com/send/?phone=${PHONE}&text=${message}`
  console.log(API_WHATSAPP)
  open(API_WHATSAPP, "_blank")
}

function getPhone(id) {
  return invites.find(i => i.id === id).phone
}

function findInvite() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('invite');
  const person = invites.find(i => i.id === id)
  console.log({person});
  const name  = document.getElementById('person-name')
  const phone  = document.getElementById('person-phone')
  const places  = document.getElementById('person-places')
  name.value = person.name
  phone.value = person.phone
  const noPlaces = Array.from({length: person.places}, (_, i) => i + 1)
  noPlaces.map(p => {
    places.add(new Option(p))
    console.log(p);
  })
}



findInvite()

//sendInviteWithEncodedID('16112024w1')