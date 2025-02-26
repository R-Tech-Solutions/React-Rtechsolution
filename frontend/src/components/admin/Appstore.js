import { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";
import imageCompression from "browser-image-compression";

const BACKEND_URL = "http://localhost:3001/api/app"; // Change this if hosted elsewhere

const CardManager = () => {
  const [cards, setCards] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    imagePreview: null,
    link: "",
  });
  const [editingId, setEditingId] = useState(null);
  const fileInputRef = useRef(null);

  // Fetch all cards from backend
  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await fetch(BACKEND_URL);
      const data = await response.json();
      setCards(data);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 800,
          useWebWorker: true,
        };
        const compressedFile = await imageCompression(file, options);
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData((prev) => ({
            ...prev,
            image: reader.result, // Base64 encoded string
            imagePreview: reader.result, // To show preview
          }));
        };
        reader.readAsDataURL(compressedFile);        reader.readAsDataURL(compressedFile);
      } catch (error) {
        console.error("Error compressing image:", error);
      }
    }
  };
  


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const cardData = {
      title: formData.title,
      description: formData.description,
      link: formData.link,
      image: formData.image, // Send Base64 string
    };
  
    try {
      let response;
      if (editingId) {
        response = await fetch(`${BACKEND_URL}/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(cardData),
        });
      } else {
        response = await fetch(BACKEND_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(cardData),
        });
      }
  
      if (!response.ok) throw new Error("Failed to save card");
  
      await fetchCards();
      Swal.fire({ icon: "success", title: "Success!", text: "Card saved successfully!" });
  
      setEditingId(null);
      resetForm();
    } catch (error) {
      Swal.fire({ icon: "error", title: "Error", text: "Something went wrong!" });
    }
  };
  

  const handleEdit = (card) => {
    setFormData({
      title: card.title,
      description: card.description,
      link: card.link,
      imagePreview: card.imagePreview || null,
      image: null,
    });
    setEditingId(card._id); // Use the backend's ID
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`${BACKEND_URL}/${id}`, { method: "DELETE" });

          if (!response.ok) throw new Error("Failed to delete");

          await fetchCards();
          Swal.fire("Deleted!", "Your card has been deleted.", "success");
        } catch (error) {
          Swal.fire("Error", "Could not delete the card", "error");
        }
      }
    });
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      image: null,
      imagePreview: null,
      link: "",
    });
    setEditingId(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Form Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-[#005880]">{editingId ? "Edit Card" : "Add New Card"}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter title"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-[#005880]"
                required
              />
            </div>
            <div className="space-y-2">
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-[#005880]"
                required={!editingId}
              />
              {formData.imagePreview && (
                <div className="mt-2">
                  <img src={formData.imagePreview} alt="Preview" className="w-40 h-40 object-cover rounded border" />
                </div>
              )}
            </div>
            <div>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter description"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-[#005880]"
                required
                rows="3"
              />
            </div>
            <div>
              <input
                type="url"
                name="link"
                value={formData.link}
                onChange={handleInputChange}
                placeholder="Enter link"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-[#005880]"
                required
              />
            </div>
            <button type="submit" className="bg-[#005880] text-white px-6 py-2 rounded hover:bg-[#004870] transition-colors">
              {editingId ? "Update Card" : "Add Card"}
            </button>
          </form>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card._id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                {card.image ? (
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">No image</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#005880] mb-2">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <a href={card.link} target="_blank" rel="noopener noreferrer" className="text-[#005880] hover:underline block mb-4">
                  Learn More
                </a>
                <div className="flex space-x-2">
                  <button onClick={() => handleEdit(card)} className="bg-[#005880] text-white px-4 py-1 rounded hover:bg-[#004870] transition-colors">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(card._id)} className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 transition-colors">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardManager;
