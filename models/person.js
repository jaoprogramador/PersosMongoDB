const mongoose = require('mongoose')

const phoneRegex = /^\d{2,3}-\d+$/; // Validación: 2 o 3 números seguidos de un guion y más números

mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB::person.js')
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message)
  })

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3, // Añadir esta línea para validar la longitud mínima
  },
  tlf: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return phoneRegex.test(v); // Usa la expresión regular para validar
      },
      message: props => `${props.value} is not a valid phone number!`, // Mensaje de error
    },
    id : {
      type: String
    },
  },

})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)
