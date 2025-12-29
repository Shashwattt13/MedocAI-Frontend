import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <main className="bg-secondary">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              Understand Your Medical Reports with AI
            </h1>

           

            <a
              href="/upload"
              className="inline-block mt-8 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90"
            >
              Analyze Documents
            </a>
          </div>

          {/* Visual */}
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold">
                M
              </div>
              <p className="mt-4 font-semibold text-primary">
                MedocAI
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Medical AI Assistant
              </p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
