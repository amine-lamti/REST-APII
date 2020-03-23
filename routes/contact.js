const express = require('express')
const Contact = require('../models/Contact')
const router = express.Router()

//add new contact
router.post('/', (req, res) => {
    const { name, email, phone } = req.body
    let newContact = new Contact ({
        name,
        email,
        phone
    })
    newContact.save()
              .then(() => res.send('New Contact Created'))
              .catch(err => console.error(err.message))
})

//get all contact
router.get('/', (req, res) => {
    Contact.find()
           .then(contacts => res.send(contacts))
           .catch(err => console.log(err.message))
})

//get one contact by id
router.get('/get/:id', (req, res) => {
    Contact.findById(req.params.id)
           .then(contact => res.send(contact))
           .catch(err => console.log(err.message))
})

//delete contact
router.delete('/:id', (req, res) => {
    Contact.findByIdAndDelete(req.params.id)
           .then(() => res.send('Contact Deleted'))
           .catch(err => console.error(err.message))
})

//edit contact
router.put('/:id', (req, res) => {
    Contact.findByIdAndUpdate(req.params.id, req.body)
           .then(newContact => res.send(newContact))
           .catch(err => console.error(err.message))
})

module.exports = router