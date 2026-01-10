import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { toPng } from 'html-to-image'
import jsPDF from 'jspdf'

import StepPersonal from "./steps/StepPersonal"
import StepPhysical from "./steps/StepPhysical"
import StepReligious from "./steps/StepReligious"
import StepFamily from "./steps/StepFamily"
import StepEducation from "./steps/StepEducation"
import StepProfessional from "./steps/StepProfessional"
import StepContact from "./steps/StepContact"
import StepTemplate from "./steps/StepTemplate"
import ProgressBar from "./ProgressBar"
import ErrorBoundary from "./ErrorBoundary"

import TraditionalTemplate from "./templates/TraditionalTemplate"
import RoyalTemplate from "./templates/RoyalTemplate"
import ModernTemplate from "./templates/ModernTemplate"
import ElegantTemplate from "./templates/ElegantTemplate"

const StepForm = () => {
  const [step, setStep] = useState(1)
  const [selectedTemplate, setSelectedTemplate] = useState('traditional')
  const [formData, setFormData] = useState(null)
  const [showBiodata, setShowBiodata] = useState(false)
  const [photoPreview, setPhotoPreview] = useState(null)
  const [customFields, setCustomFields] = useState([])

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onBlur" })

  const stepFields = {
    1: ["firstName", "lastName", "dob"],
    2: ["height"],
    3: ["religion"],
    4: ["fatherName", "motherName"],
    5: ["qualification", "university", "year"],
    6: ["occupation"],
    7: ["email", "phone"],
    8: [], // Template selection - no validation
    9: [], // Review - no validation
  }

  const nextStep = async () => {
    const valid = await trigger(stepFields[step])
    if (valid) setStep(step + 1)
  }

  const prevStep = () => setStep(step - 1)

  const onSubmit = async (data) => {
    console.log("Submitting form...", data);
    await new Promise((r) => setTimeout(r, 1000))
    const completeData = {
      ...data,
      photo: photoPreview,
      customFields: customFields
    }
    console.log("Complete Data:", completeData);
    console.log("Selected Template:", selectedTemplate);
    setFormData(completeData)
    setShowBiodata(true)
  }

  // Handle PDF Download
  const downloadPDF = async () => {
    const element = document.getElementById('biodata-template');
    if (!element) {
      alert("Template element not found!");
      return;
    }

    try {
      // 1. Generate PNG using html-to-image
      // Force a fixed width (794px ~ A4 width at 96DPI) to ensure consistent rendering
      const dataUrl = await toPng(element, {
        quality: 1.0,
        pixelRatio: 2,
        backgroundColor: '#fffcf5', // Match template bg
        width: 794,
        style: {
          layout: "fixed",
          width: "794px",
          height: "auto",
          maxHeight: "none",
          overflow: "visible"
        }
      });

      // 2. Generate PDF
      const pdf = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4'
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Load image to get dimensions
      const imgProps = pdf.getImageProperties(dataUrl);
      const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, imgHeight);
      pdf.save(`Biodata_${formData.firstName || 'User'}.pdf`);

    } catch (error) {
      console.error("PDF generation failed:", error);
      alert(`Failed to generate PDF. Error: ${error.message || error}`);
    }
  };

  // Render biodata template
  if (showBiodata && formData) {
    return (
      <ErrorBoundary>
        <div className="min-h-screen bg-gray-100 py-8 print:py-0 overflow-auto">
          <div className="w-full flex justify-center px-4 print:px-0">
            <div className="w-full max-w-[210mm]">
              {/* Action Buttons - Hidden on print */}
              <div className="flex justify-center gap-4 mb-8 print:hidden">
                <button
                  onClick={downloadPDF}
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-all flex items-center gap-2"
                >
                  <span>📥</span> Download PDF
                </button>
                <button
                  onClick={() => window.print()}
                  className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-green-700 transition-all flex items-center gap-2"
                >
                  <span>🖨️</span> Print
                </button>
                <button
                  onClick={() => { setShowBiodata(false); setStep(1); }}
                  className="bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-700 transition-all"
                >
                  ← Create New
                </button>
              </div>

              {/* Template Display */}
              <div id="biodata-template-container">
                {selectedTemplate === 'traditional' && <TraditionalTemplate data={formData} />}
                {selectedTemplate === 'royal' && <RoyalTemplate data={formData} />}
                {selectedTemplate === 'modern' && <ModernTemplate data={formData} />}
                {selectedTemplate === 'elegant' && <ElegantTemplate data={formData} />}

                {/* Fallback for invalid/missing template */}
                {!['traditional', 'royal', 'modern', 'elegant'].includes(selectedTemplate) && (
                  <div className="text-center p-10 bg-red-50 border border-red-200 rounded-xl">
                    <h3 className="text-xl text-red-800 font-bold mb-2">Template Error</h3>
                    <p className="text-red-600 mb-4">The selected template "{selectedTemplate}" could not be loaded.</p>
                    <button
                      onClick={() => setSelectedTemplate('traditional')}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Reset to Default Template
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </ErrorBoundary>
    )
  }

  // Render form
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-6xl bg-white/10 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white/20 animate-fadeIn"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Marriage Biodata Maker
          </h1>
          <p className="text-white/70 text-sm">
            Create your professional marriage biodata
          </p>
        </div>

        <ProgressBar step={step} totalSteps={9} />

        {/* SLIDE CONTAINER */}
        <div className="relative h-[550px] overflow-hidden mb-8">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${(step - 1) * 100}%)` }}
          >
            <StepPersonal register={register} errors={errors} photoPreview={photoPreview} setPhotoPreview={setPhotoPreview} customFields={customFields} setCustomFields={setCustomFields} />
            <StepPhysical register={register} errors={errors} customFields={customFields} setCustomFields={setCustomFields} />
            <StepReligious register={register} errors={errors} customFields={customFields} setCustomFields={setCustomFields} />
            <StepFamily register={register} errors={errors} customFields={customFields} setCustomFields={setCustomFields} />
            <StepEducation register={register} errors={errors} customFields={customFields} setCustomFields={setCustomFields} />
            <StepProfessional register={register} errors={errors} customFields={customFields} setCustomFields={setCustomFields} />
            <StepContact register={register} errors={errors} customFields={customFields} setCustomFields={setCustomFields} />
            <StepTemplate selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate} />

            {/* Step 9: Review */}
            <div className="w-full flex-shrink-0 px-2 animate-slideIn">
              <div className="text-center">
                <h3 className="text-white text-2xl font-bold mb-4">Ready to Generate!</h3>
                <p className="text-white/70 mb-6">
                  Click the button below to generate your beautiful biodata
                </p>
                <div className="bg-white/10 p-6 rounded-xl">
                  <p className="text-white text-sm mb-2">Selected Template:</p>
                  <p className="text-white font-bold text-lg capitalize">{selectedTemplate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-between items-center gap-4">
          {step > 1 ? (
            <button type="button" onClick={prevStep} className="btn-secondary">
              ← Back
            </button>
          ) : (
            <div></div>
          )}

          {step < 9 && (
            <button type="button" onClick={nextStep} className="btn-primary ml-auto">
              Next →
            </button>
          )}

          {step === 9 && (
            <button type="submit" disabled={isSubmitting} className="btn-success ml-auto">
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Generating...
                </span>
              ) : (
                "Generate Biodata ✨"
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  )
}



export default StepForm
