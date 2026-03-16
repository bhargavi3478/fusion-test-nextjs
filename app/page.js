export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">YourBrand</h1>
            </div>
            <div className="hidden md:block">
              <div className="flex space-x-8">
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
                <a href="#features" className="text-gray-700 hover:text-blue-600 transition">Features</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
              </div>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-blue-600">
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Welcome to Your
              <span className="text-blue-600"> Next.js App</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Build modern web applications with Next.js and Tailwind CSS. 
              Fast, responsive, and beautiful by default.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg">
                Get Started
              </button>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition border-2 border-blue-600">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Amazing Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to build modern web applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="feature-card bg-gray-50 p-8 rounded-xl hover:shadow-xl transition">
              <div className="feature-icon bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="feature-title text-xl font-semibold text-gray-900 mb-3">
                Lightning Fast
              </h3>
              <p className="feature-description text-gray-600">
                Built with Next.js for optimal performance and speed. Your users will love the experience.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card bg-gray-50 p-8 rounded-xl hover:shadow-xl transition">
              <div className="feature-icon bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="feature-title text-xl font-semibold text-gray-900 mb-3">
                Responsive Design
              </h3>
              <p className="feature-description text-gray-600">
                Tailwind CSS ensures your app looks great on all devices, from mobile to desktop.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card bg-gray-50 p-8 rounded-xl hover:shadow-xl transition">
              <div className="feature-icon bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="feature-title text-xl font-semibold text-gray-900 mb-3">
                Secure & Reliable
              </h3>
              <p className="feature-description text-gray-600">
                Enterprise-grade security and reliability built into every component.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="feature-card bg-gray-50 p-8 rounded-xl hover:shadow-xl transition">
              <div className="feature-icon bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h3 className="feature-title text-xl font-semibold text-gray-900 mb-3">
                Developer Friendly
              </h3>
              <p className="feature-description text-gray-600">
                Clean code architecture with modern React patterns and best practices.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="feature-card bg-gray-50 p-8 rounded-xl hover:shadow-xl transition">
              <div className="feature-icon bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                </svg>
              </div>
              <h3 className="feature-title text-xl font-semibold text-gray-900 mb-3">
                Easy Customization
              </h3>
              <p className="feature-description text-gray-600">
                Customize every aspect with Tailwind's utility-first approach.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="feature-card bg-gray-50 p-8 rounded-xl hover:shadow-xl transition">
              <div className="feature-icon bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                </svg>
              </div>
              <h3 className="feature-title text-xl font-semibold text-gray-900 mb-3">
                Cloud Ready
              </h3>
              <p className="feature-description text-gray-600">
                Deploy anywhere with built-in support for all major cloud platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-blue-100">
              Have questions? We'd love to hear from you.
            </p>
          </div>
          
          <form className="contact-form bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="form-group">
                <label htmlFor="name" className="form-label block text-sm font-semibold text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="form-group mb-6">
              <label htmlFor="message" className="form-label block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="submit-button w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 YourBrand. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}
