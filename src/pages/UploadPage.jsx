import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FileUpload from "../components/FileUpload";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AnalyzingModal from "../components/AnalyzingModal";

export default function UploadPage() {
  const navigate = useNavigate();
  const [analyzing, setAnalyzing] = useState(false);

  const handleAnalyze = async (files) => {
    if (!files || files.length === 0) return;

    setAnalyzing(true);

    try {
      const formData = new FormData();
      files.forEach((file) => {
        formData.append("documents", file);
      });

      const response = await fetch("http://localhost:5000/api/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error("Analysis failed");
      }

      setAnalyzing(false);

      // 🔴 THIS WAS THE MISSING LINK
      navigate("/result", {
        state: {
          extractedText: data.extractedText,
          aiExplanation: data.aiExplanation,
          pdfId: data.pdfId, // ✅ MUST PASS THIS
        },
      });

    } catch (error) {
      console.error(error);
      setAnalyzing(false);
      alert("Analysis failed. Please try again.");
    }
  };

  return (
    <>
      <Header />

      <main className="bg-secondary min-h-screen px-4 py-12">
        <div className="max-w-3xl mx-auto">

          <a href="/" className="text-sm text-gray-500 hover:text-primary">
            ← Back to Home
          </a>

          <div className="bg-white rounded-2xl shadow-xl p-8 mt-6">
            <h1 className="text-3xl font-bold text-primary text-center">
              Upload Medical Documents
            </h1>

            <p className="text-center text-gray-600 mt-4">
              Upload up to 3 documents. No login. No storage.
            </p>

            <div className="mt-8">
              <FileUpload onAnalyze={handleAnalyze} />
            </div>

            <div className="mt-8 bg-secondary rounded-xl p-4 text-sm text-gray-600">
              🔒 Files are processed temporarily and deleted automatically.
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <AnalyzingModal open={analyzing} />
    </>
  );
}
