const NoteSchema = require('../model/Note');

async function createNote(req, res) {
    const note = new NoteSchema(req.body);
    try {
        await note.save();
        res.status(201).send(note);
        } catch (err) {
        res.status(500).send(err);
}
};

async function updateNote(req, res) {
    const note = await NoteSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(note);
    return note;
};


async function deleteNote(req, res) {
    try {
        await NoteSchema.findByIdAndRemove(req.params.id);
        res.status(200).send();
        } catch (err) {
        res.status(500).send(err);
        }
    };

module.exports = {
    createNote,
    updateNote,
    deleteNote,
};