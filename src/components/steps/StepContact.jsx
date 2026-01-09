import React from 'react'
import Input from "../../utils/Input"
import ErrorMessage from "../../utils/ErrorMessage"
import AddCustomField from "../AddCustomField"

const StepContact = ({ register, errors, customFields, setCustomFields }) => (
  <div className="w-full flex-shrink-0 px-2 space-y-4 animate-slideIn overflow-y-auto h-full max-h-[550px] custom-scrollbar">
    <h3 className="text-white text-lg font-semibold mb-2">Contact Details</h3>
    <div className="relative">
      <Input
        type="email"
        placeholder="Email"
        {...register("email", { required: "Email required" })}
      />
      {errors.email && <ErrorMessage message={errors.email.message} />}
    </div>

    <div className="relative">
      <Input
        placeholder="Phone Number"
        {...register("phone", { required: "Phone required" })}
      />
      {errors.phone && <ErrorMessage message={errors.phone.message} />}
    </div>

    <AddCustomField
      customFields={customFields}
      setCustomFields={setCustomFields}
      section="Contact"
    />
  </div>
)

export default StepContact
