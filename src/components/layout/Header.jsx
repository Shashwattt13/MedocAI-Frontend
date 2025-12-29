export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-lg">
            +
          </div>
          <div>
            <p className="text-xl font-bold text-primary leading-none">
              MedocAI
            </p>
            <p className="text-xs text-gray-500">
              Medical Report Assistant
            </p>
          </div>
        </div>

        {/* Nav */}
        <nav className="space-x-6 text-gray-600 font-medium">
          <a href="/" className="hover:text-primary">Home</a>
          <a href="/upload" className="hover:text-primary">Analyze</a>
        </nav>

      </div>
    </header>
  );
}
