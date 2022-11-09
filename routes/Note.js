const express = require("express");
const router = express.Router();
const Note = require("../models/Note");


router.get("/", Note.getNote);
router.post("/", Note.createNote);
router.get("/:id", Note.getNoteById);
router.delete("/:id", Note.deleteNote);
