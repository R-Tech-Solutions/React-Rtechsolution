"use client"

import { useState } from "react"

function PackageManager() {
  // State for form data
  const [formData, setFormData] = useState({
    title: "",
    image: null,
    imagePreview: null,
    features: [""],
    monthlySinglePrice: "",
    monthlyAdditionalPrice: "",
    annualSinglePrice: "",
    annualAdditionalPrice: "",
    description: "",
    totalPrice: "",
    hardwarePrice: "",
    softwarePrice: "",
  })

  // State for packages list
  const [packages, setPackages] = useState([])
  const [editingPackage, setEditingPackage] = useState(null)

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData({
          ...formData,
          image: file,
          imagePreview: reader.result,
        })
      }
      reader.readAsDataURL(file)
    }
  }

  // Handle feature list changes
  const handleFeatureChange = (index, value) => {
    const updatedFeatures = [...formData.features]
    updatedFeatures[index] = value
    setFormData({
      ...formData,
      features: updatedFeatures,
    })
  }

  // Add new feature field
  const addFeature = () => {
    setFormData({
      ...formData,
      features: [...formData.features, ""],
    })
  }

  // Remove feature field
  const removeFeature = (index) => {
    const updatedFeatures = formData.features.filter((_, i) => i !== index)
    setFormData({
      ...formData,
      features: updatedFeatures,
    })
  }

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault()

    if (editingPackage !== null) {
      // Update existing package
      const updatedPackages = packages.map((pkg, index) => (index === editingPackage ? formData : pkg))
      setPackages(updatedPackages)
      setEditingPackage(null)
    } else {
      // Add new package
      setPackages([...packages, formData])
    }

    // Reset form
    setFormData({
      title: "",
      image: null,
      imagePreview: null,
      features: [""],
      monthlySinglePrice: "",
      monthlyAdditionalPrice: "",
      annualSinglePrice: "",
      annualAdditionalPrice: "",
      description: "",
      totalPrice: "",
      hardwarePrice: "",
      softwarePrice: "",
    })
  }

  // Edit package
  const handleEditPackage = (index) => {
    setEditingPackage(index)
    setFormData(packages[index])
  }

  // Delete package
  const handleDeletePackage = (index) => {
    const updatedPackages = packages.filter((_, i) => i !== index)
    setPackages(updatedPackages)
  }

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingPackage(null)
    setFormData({
      title: "",
      image: null,
      imagePreview: null,
      features: [""],
      monthlySinglePrice: "",
      monthlyAdditionalPrice: "",
      annualSinglePrice: "",
      annualAdditionalPrice: "",
      description: "",
      totalPrice: "",
      hardwarePrice: "",
      softwarePrice: "",
    })
  }

  return (
    <div className="container mx-auto p-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-[#005880] mb-6 text-center">Package Management System</h1>

      {/* Form Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold text-[#005880] mb-4">
          {editingPackage !== null ? "Edit Package" : "Add New Package"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#005880]">Basic Information</h3>

            <div>
              <label className="block text-gray-700 mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#005880]"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Image Upload</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#005880]"
              />
              {formData.imagePreview && (
                <div className="mt-2">
                  <img
                    src={formData.imagePreview || "/placeholder.svg"}
                    alt="Preview"
                    className="h-32 object-contain border rounded-md"
                  />
                </div>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Features List</label>
              {formData.features.map((feature, index) => (
                <div key={index} className="flex mb-2">
                  <input
                    type="text"
                    value={feature}
                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                    className="flex-grow border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#005880]"
                    placeholder="Enter feature"
                  />
                  <button
                    type="button"
                    onClick={() => removeFeature(index)}
                    className="ml-2 bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addFeature}
                className="bg-[#005880] text-white px-3 py-2 rounded-md hover:bg-[#004a70]"
              >
                Add Feature
              </button>
            </div>
          </div>

          {/* Pricing Management */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#005880]">Pricing Management</h3>

            <div>
              <h4 className="font-medium text-gray-700">Monthly Pricing</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div>
                  <label className="block text-gray-700 mb-1">Single User Price</label>
                  <input
                    type="number"
                    name="monthlySinglePrice"
                    value={formData.monthlySinglePrice}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#005880]"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Additional User Price</label>
                  <input
                    type="number"
                    name="monthlyAdditionalPrice"
                    value={formData.monthlyAdditionalPrice}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#005880]"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-700">Annual Pricing</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div>
                  <label className="block text-gray-700 mb-1">Single User Price</label>
                  <input
                    type="number"
                    name="annualSinglePrice"
                    value={formData.annualSinglePrice}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#005880]"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Additional User Price</label>
                  <input
                    type="number"
                    name="annualAdditionalPrice"
                    value={formData.annualAdditionalPrice}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#005880]"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Package Details */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#005880]">Package Details</h3>

            <div>
              <label className="block text-gray-700 mb-1">Full Package Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#005880]"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">Total Package Price</label>
                <input
                  type="number"
                  name="totalPrice"
                  value={formData.totalPrice}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#005880]"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Hardware Price</label>
                <input
                  type="number"
                  name="hardwarePrice"
                  value={formData.hardwarePrice}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#005880]"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Software Price</label>
                <input
                  type="number"
                  name="softwarePrice"
                  value={formData.softwarePrice}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#005880]"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-[#005880] text-white px-4 py-2 rounded-md hover:bg-[#004a70] transition-colors"
            >
              {editingPackage !== null ? "Update Package" : "Add Package"}
            </button>

            {editingPackage !== null && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Cards Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-[#005880] mb-4">Saved Packages</h2>

        {packages.length === 0 ? (
          <p className="text-gray-500">No packages added yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="bg-[#005880] text-white p-4">
                  <h3 className="text-xl font-bold">{pkg.title}</h3>
                </div>

                <div className="p-4">
                  {/* Image */}
                  {pkg.imagePreview && (
                    <div className="mb-4">
                      <img
                        src={pkg.imagePreview || "/placeholder.svg"}
                        alt={pkg.title}
                        className="h-40 w-full object-cover rounded-md"
                      />
                    </div>
                  )}

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#005880] mb-2">Features:</h4>
                    <ul className="list-disc pl-5">
                      {pkg.features.map((feature, idx) => feature && <li key={idx}>{feature}</li>)}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-[#005880] mb-2">Monthly Pricing:</h4>
                      <p>Single User: ${pkg.monthlySinglePrice}</p>
                      <p>Additional User: ${pkg.monthlyAdditionalPrice}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#005880] mb-2">Annual Pricing:</h4>
                      <p>Single User: ${pkg.annualSinglePrice}</p>
                      <p>Additional User: ${pkg.annualAdditionalPrice}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#005880] mb-2">Description:</h4>
                    <p className="text-gray-700">{pkg.description}</p>
                  </div>

                  {/* Pricing Details */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="bg-gray-100 p-2 rounded-md text-center">
                      <p className="text-sm text-gray-500">Total Price</p>
                      <p className="font-bold text-[#005880]">${pkg.totalPrice}</p>
                    </div>
                    <div className="bg-gray-100 p-2 rounded-md text-center">
                      <p className="text-sm text-gray-500">Hardware</p>
                      <p className="font-bold text-[#005880]">${pkg.hardwarePrice}</p>
                    </div>
                    <div className="bg-gray-100 p-2 rounded-md text-center">
                      <p className="text-sm text-gray-500">Software</p>
                      <p className="font-bold text-[#005880]">${pkg.softwarePrice}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => handleEditPackage(index)}
                      className="bg-[#005880] text-white px-3 py-1 rounded-md hover:bg-[#004a70] transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeletePackage(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default PackageManager

