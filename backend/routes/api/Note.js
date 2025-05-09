const { Router } = require('express')
const Note = require('../../models/Note')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const notes = await Note.find()
        if (!notes)
            throw new Error('Notes not found in DB')
        
        notes.sort((a, b) => new Date(b.date) - new Date(a.date))
        res.status(200).json(notes)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.post('/', async (req, res) => {
    const newNote = new Note({...req.body, date: Date.now()})
    try {
        const note = await newNote.save()
        if (!note)
            throw new Error('Cannot save your note')
        res.status(200).json(note)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {...req.body, date: Date.now()}, { new: true })
        if (!updatedNote)
            throw new Error('Cannot update your note')
        res.status(200).json(updatedNote)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.delete('/:id', async (req, res)=>{
    try{
        const deletedNote = await Note.findByIdAndDelete(req.params.id)
        if(!deletedNote)
                throw new Error('Cannot delete your note')
        res.status(200).json(deletedNote)    
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})

module.exports = router