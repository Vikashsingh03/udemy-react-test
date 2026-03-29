function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-2xl font-bold text-gray-200">MyApp</h2>
          <p className="mt-3 text-sm">
            Building modern web apps with React & Tailwind. 
            Fast, clean and scalable UI 🚀
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-200 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">About</li>
            <li className="hover:text-gray-300 cursor-pointer">Projects</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-gray-200 mb-3">Follow Me</h3>
          <div className="flex gap-4 text-sm">
            <span className="hover:text-gray-300 cursor-pointer">GitHub</span>
            <span className="hover:text-gray-300 cursor-pointer">LinkedIn</span>
            <span className="hover:text-gray-300 cursor-pointer">Twitter</span>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-5">
        © 2026 MyApp. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer