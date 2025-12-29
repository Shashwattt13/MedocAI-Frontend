import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function ResultPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <main className="bg-secondary min-h-screen px-4 py-12">
        <div className="max-w-4xl mx-auto">

          <button
            onClick={() => navigate(-1)}
            className="text-sm text-gray-500 hover:text-primary mb-6"
          >
            ← Back
          </button>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h1 className="text-3xl font-bold text-primary mb-6">
              Document Analysis Result
            </h1>

            <pre className="whitespace-pre-wrap text-sm text-gray-800 bg-gray-50 p-4 rounded-lg mb-6">
              {state?.extractedText || "No text extracted"}
            </pre>

            <div className="bg-secondary p-6 rounded-xl mb-6">
              <h2 className="font-semibold text-lg mb-2">
                AI Explanation
              </h2>
              <p className="text-gray-700 whitespace-pre-wrap">
                {state?.aiExplanation || "No AI explanation available"}
              </p>
            </div>

            {/* ✅ DIRECT DOWNLOAD BUTTON */}
            <a
              href={`http://localhost:5000/api/download/${state?.pdfId}`}
              className="inline-block bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition"
            >
              Download Medical Report (PDF)
            </a>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
