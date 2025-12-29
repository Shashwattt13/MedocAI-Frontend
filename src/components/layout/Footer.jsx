export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white">MedocAI</h3>
          <p className="text-sm mt-3">
            AI-powered medical document analysis platform focused on privacy,
            clarity, and patient understanding.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Contact
          </h4>
          <p>Email: <span className="text-white">shashwatsingh.dev@gmail.com</span></p>
          <p>Phone: <span className="text-white">8299106531</span></p>
        </div>

        {/* Developer */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Developer
          </h4>
          <p>
            Built by <span className="text-white font-medium">Shashwat Singh</span>
          </p>
          <p className="text-sm mt-2">
            MERN Developer | AI-integrated Systems
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} MedocAI. All rights reserved.
      </div>
    </footer>
  );
}
