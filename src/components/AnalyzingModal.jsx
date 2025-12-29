export default function AnalyzingModal({ open }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-8 text-center">

        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>

        <h2 className="text-lg font-semibold text-gray-800 mt-6">
          Analyzing Your Documents
        </h2>

        <p className="text-sm text-gray-600 mt-3">
          Please wait while MedDocAI analyzes your medical documents.
          This may take a few moments.
        </p>

        <p className="text-xs text-gray-400 mt-4">
          🔒 Your files are processed temporarily and are not stored.
        </p>

      </div>
    </div>
  );
}
