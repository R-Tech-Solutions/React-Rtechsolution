const AppAdmin = require("../models/AppAdmin");

exports.createCard = async (req, res) => {
  try {
    const { title, description, image, link } = req.body;
    if (!title || !description || !image || !link) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newCard = new AppAdmin({ title, description, image, link });
    await newCard.save();
    res.status(201).json({ message: "Card added successfully", card: newCard });
  } catch (error) {
    res.status(500).json({ message: "Error creating card", error: error.message });
  }
};


exports.getAllCards = async (req, res) => {
  try {
    const cards = await AppAdmin.find();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cards", error: error.message });
  }
};

exports.deleteCard = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCard = await AppAdmin.findByIdAndDelete(id);

    if (!deletedCard) {
      return res.status(404).json({ message: "Card not found" });
    }

    res.status(200).json({ message: "Card deleted successfully", card: deletedCard });
  } catch (error) {
    res.status(500).json({ message: "Error deleting card", error: error.message });
  }
};


exports.updateCard = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body; // Contains fields to be updated

    const updatedCard = await AppAdmin.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedCard) {
      return res.status(404).json({ message: "Card not found" });
    }

    res.status(200).json({ message: "Card updated successfully", card: updatedCard });
  } catch (error) {
    res.status(500).json({ message: "Error updating card", error: error.message });
  }
};
