export default function Home() {
  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3C41D1] to-blue-800 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to Costalina Energy
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Fueling East Africa Since 2018
          </p>
          <button className="bg-[#FFF200] text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
            Find a Station
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-[#3C41D1] mb-2">6</div>
            <div className="text-gray-600">Countries</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#3C41D1] mb-2">50+</div>
            <div className="text-gray-600">Stations</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#3C41D1] mb-2">15+</div>
            <div className="text-gray-600">Years</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#3C41D1] mb-2">1000+</div>
            <div className="text-gray-600">Clients</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-2"> 2026 Costalina Energy Ltd. All rights reserved.</p>
          <p className="text-gray-400">Kenya | Uganda | Tanzania | Congo | UAE | Somalia</p>
        </div>
      </footer>
      
    </main>
  )
}
