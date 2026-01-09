import React from 'react'
import Input from "../../utils/Input"
import ErrorMessage from "../../utils/ErrorMessage"
import AddCustomField from "../AddCustomField"

const StepPersonal = ({ register, errors, photoPreview, setPhotoPreview, customFields, setCustomFields }) => {
  const handlePhotoChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhotoPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="w-full flex-shrink-0 px-2 space-y-4 animate-slideIn overflow-y-auto h-full max-h-[550px] custom-scrollbar">
      {/* Photo Upload */}
      <div className="relative">
        <label className="block text-white text-sm font-medium mb-2">
          Upload Photo
        </label>
        <div className="flex items-center gap-4">
          {photoPreview && (
            <img
              src={photoPreview}
              alt="Preview"
              className="w-20 h-20 object-cover rounded-lg border-2 border-white/20"
            />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="text-white text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-500 file:text-white hover:file:bg-blue-600 cursor-pointer"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <Input
            placeholder="First Name"
            {...register("firstName", { required: "First name required" })}
          />
          {errors.firstName && <ErrorMessage message={errors.firstName.message} />}
        </div>

        <div className="relative">
          <Input
            placeholder="Last Name"
            {...register("lastName", { required: "Last name required" })}
          />
          {errors.lastName && <ErrorMessage message={errors.lastName.message} />}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <Input
            type="date"
            placeholder="Date of Birth"
            {...register("dob", { required: "DOB required" })}
          />
          {errors.dob && <ErrorMessage message={errors.dob.message} />}
        </div>

        <div className="relative">
          <Input
            placeholder="Time of Birth (e.g., 10:30 AM)"
            {...register("timeOfBirth")}
          />
        </div>
      </div>

      <div className="relative">
        <Input
          placeholder="Place of Birth"
          {...register("placeOfBirth")}
        />
      </div>

      <AddCustomField
        customFields={customFields}
        setCustomFields={setCustomFields}
        section="Personal"
      />
    </div>
  )
}

export default StepPersonal
