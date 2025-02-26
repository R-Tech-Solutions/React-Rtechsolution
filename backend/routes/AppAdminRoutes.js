const express = require("express");
const router = express.Router();
const { createCard, getAllCards, deleteCard, updateCard } = require("../controllers/AppAdminController");

router.post("/", createCard);
router.get("/", getAllCards);
router.delete("/:id", deleteCard);
router.put("/:id", updateCard);

module.exports = router;
