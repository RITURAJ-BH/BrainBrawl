import React, { useState } from "react"
import { FileText, X } from "lucide-react"

export default function PdfUploader() {
  const [pdfFile, setPdfFile] = useState(null)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    if (file.type !== "application/pdf") {
      setError("Only PDF files are allowed.")
      setPdfFile(null)
      return
    }

    if (file.size > 2* 1024 * 1024) {
      setError("File size should be less than 2MB.")
      setPdfFile(null)
      return
    }

    setPdfFile(file)
    setError("")
  }

  const handleRemove = () => {
    setPdfFile(null)
    setError("")
  }

  return (
    <div className="flex flex-col items-center gap-4 mt-6 relative">
      <label className="cursor-pointer w-[90%] max-w-md rounded-xl border-2 border-dashed border-gray-300 bg-white p-6 text-center text-gray-600 hover:border-blue-500 hover:bg-blue-50 transition-colors dark:bg-black dark:text-white dark:hover:border-blue-400 dark:hover:bg-gray-900">
        <input
          type="file"
          accept="application/pdf"
          className="hidden"
          onChange={handleChange}
        />
        <p className="text-lg font-medium">Click to Upload a file</p>
        <p className="text-sm text-gray-400 mt-1">(Max file size:2MB)</p>
      </label>

      {error && (
        <p className="text-red-500 text-sm font-medium">{error}</p>
      )}

      {pdfFile && (
        <div className="flex items-center justify-between w-full max-w-md rounded-lg bg-gray-100 dark:bg-gray-800 p-4 shadow-md">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-blue-500" />
            <span className="text-gray-700 dark:text-white text-sm">{pdfFile.name}</span>
          </div>
          <button onClick={handleRemove}>
            <X className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors hover:cursor-pointer" />
          </button>
        </div>
      )}
    </div>
  )
}
