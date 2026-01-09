import React from 'react'
import Input from "../../utils/Input"
import ErrorMessage from "../../utils/ErrorMessage"
import AddCustomField from "../AddCustomField"

const StepFamily = ({ register, errors, customFields, setCustomFields }) => {
  return (
    <div className="w-full flex-shrink-0 px-2 space-y-4 animate-slideIn overflow-y-auto h-full max-h-[550px] custom-scrollbar">
      <h3 className="text-white text-lg font-semibold mb-2">Family Details</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <Input placeholder="Father's Name" {...register("fatherName", { required: "Father name required" })} />
          {errors.fatherName && <ErrorMessage message={errors.fatherName.message} />}
        </div>

        <div className="relative">
          <Input placeholder="Father's Occupation" {...register("fatherOccupation")} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <Input placeholder="Mother's Name" {...register("motherName", { required: "Mother name required" })} />
          {errors.motherName && <ErrorMessage message={errors.motherName.message} />}
        </div>

        <div className="relative">
          <Input placeholder="Mother's Occupation" {...register("motherOccupation")} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <Input {...register("maritalStatus")} placeholder="Marital Status" />
        </div>
        <div className="relative">
          <Input placeholder="Family Type (e.g., Nuclear, Joint)" {...register("familyType")} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <Input placeholder="Number of Brothers" type="number" {...register("brothers")} />
        </div>

        <div className="relative">
          <Input placeholder="Number of Sisters" type="number" {...register("sisters")} />
        </div>
      </div>

      <AddCustomField
        customFields={customFields}
        setCustomFields={setCustomFields}
        section="Family"
      />
    </div>
  )
}

export default StepFamily
