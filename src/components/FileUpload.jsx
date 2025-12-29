import { useState } from "react";

export default function FileUpload({ onAnalyze }) {
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    const selected = Array.from(e.target.files);

    if (selected.length + files.length > 3) {
      alert("You can upload a maximum of 3 documents.");
      return;
    }

    setFiles([...files, ...selected]);
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div>
      {/* Upload box */}
      <label className="block w-full cursor-pointer border-2 border-dashed border-primary rounded-xl p-6 text-center hover:bg-secondary transition">
        <input
          type="file"
          accept=".pdf"
          multiple
          className="hidden"
          onChange={handleChange}
        />
        <p className="text-primary font-medium">
          Click to upload PDF files (max 3)
        </p>
      </label>

      {/* File list */}
      {files.length > 0 && (
        <ul className="mt-4 space-y-2">
          {files.map((file, i) => (
            <li
              key={i}
              className="flex justify-between items-center bg-secondary px-4 py-2 rounded-lg"
            >
              <span className="text-sm truncate">{file.name}</span>
              <button
                onClick={() => removeFile(i)}
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Analyze Button */}
      <button
        onClick={() => onAnalyze(files)}
        disabled={files.length === 0}
        className="w-full mt-6 bg-primary text-white py-3 rounded-xl font-semibold disabled:opacity-50"
      >
        Analyze Documents
      </button>
    </div>
  );
}
