import React from 'react'
import Input from "../../utils/Input"
import ErrorMessage from "../../utils/ErrorMessage"
import AddCustomField from "../AddCustomField"

const StepEducation = ({ register, errors, customFields, setCustomFields }) => (
  <div className="w-full flex-shrink-0 px-2 space-y-4 animate-slideIn overflow-y-auto h-full max-h-[550px] custom-scrollbar">
    <h3 className="text-white text-lg font-semibold mb-2">Education Details</h3>
    <div className="relative">
      <Input placeholder="Qualification" {...register("qualification", { required: "Required" })} />
      {errors.qualification && <ErrorMessage message={errors.qualification.message} />}
    </div>

    <div className="relative">
      <Input placeholder="University/Institute" {...register("university", { required: "Required" })} />
      {errors.university && <ErrorMessage message={errors.university.message} />}
    </div>

    <div>
      <Input {...register("year")} placeholder="Passing Year" />
    </div>

    <AddCustomField
      customFields={customFields}
      setCustomFields={setCustomFields}
      section="Education"
    />
  </div>
)

export default StepEducation
