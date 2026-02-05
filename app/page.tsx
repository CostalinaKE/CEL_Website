import MobileMenu from '@/components/MobileMenu'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      
      {/* Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo.png" 
                alt="Costalina Energy Logo" 
                className="h-10 w-auto"
              />
              
            </div>
            
            <div className="hidden lg:flex items-center gap-10 text-gray-700">
              <a href="#home" className="hover:text-[#3C41D1] transition-colors font-medium text-sm">Home</a>
              <a href="#about" className="hover:text-[#3C41D1] transition-colors font-medium text-sm">About</a>
              <a href="#services" className="hover:text-[#3C41D1] transition-colors font-medium text-sm">Our Products</a>
              <a href="#stations" className="hover:text-[#3C41D1] transition-colors font-medium text-sm">Our Stations</a>
              <a href="#contact" className="hover:text-[#3C41D1] transition-colors font-medium text-sm">Contact Us</a>
            </div>
            
            <button className="hidden lg:block bg-[#FFF200] text-gray-900 px-6 py-2.5 rounded-full font-medium hover:bg-yellow-300 transition-colors text-sm">
              learn more
            </button>

            <MobileMenu />
          </div>
        </nav>
      </header>

      {/* Hero Section - Blended Design */}
      <section className="pt-12 pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[3rem] overflow-hidden min-h-[500px]">
            
            {/* Background Image */}
            <img 
              src="/images/hero-station.jpg" 
              alt="Modern fuel station"
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Gradient Overlay - blends from solid color to transparent */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#3C41D1] from-0% via-[#3C41D1]/40 via-0% to-transparent"></div>
            <div className="relative z-10 p-12 lg:p-16 flex items-center justify-center min-h-[500px]">
  <div className="text-white text-center max-w-3xl">
    <p className="text-xs lg:text-sm mb-6 opacity-90 tracking-[0.3em] uppercase font-light">Fueling East Africa's Progress</p>
    <h1 className="text-5xl lg:text-7xl font-serif leading-tight">
      Set New Standards in
      <br />
      <em className="italic text-[#FFF200]">Premium Fuel</em> Distribution
    </h1>
  </div>
</div>
            
          </div>
        </div>
      </section>

      {/* Dream It Section - OFFSET CORNERS */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            
            {/* Left Image - BOTTOM-LEFT ROUNDED */}
            <div className="relative lg:pt-24">
              <div className="aspect-[3/4] rounded-tl-[3rem] rounded-tr-[3rem] rounded-br-[3rem] overflow-hidden shadow-xl">
                <img 
                  src="/images/feature-1.jpg" 
                  alt="Fuel station or depot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Center - Text */}
            <div className="text-center py-8">
              <div className="text-[#3C41D1] text-4xl mb-6">◆</div>
              <h2 className="text-4xl lg:text-5xl font-serif mb-6 leading-tight text-gray-900">
                If you can <em className="italic text-[#3C41D1]">dream it</em>, we
                <br />
                can <em className="italic text-[#3C41D1]">deliver it</em>.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 max-w-lg mx-auto">
                We bring a uniquely personalized approach to each client, ensuring reliable fuel supply across East Africa. Renowned for our exceptional service and strategic partnerships, our portfolio spans six countries.
              </p>
              <button className="bg-[#FFF200] text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
                Get in touch
              </button>
            </div>
            
            {/* Right Image - TOP-RIGHT ROUNDED */}
            <div className="relative lg:pb-24">
              <div className="aspect-[3/4] rounded-tl-[3rem] rounded-bl-[3rem] rounded-br-[3rem] overflow-hidden shadow-xl">
                <img 
                  src="/images/feature-2.jpg" 
                  alt="Fuel trucks and fleet"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Dark Overlay Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[3rem] overflow-hidden min-h-[600px]">
            
            {/* Background Image */}
            <img 
              src="/images/operations-bg.jpg" 
              alt="Operations and depot facility"
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
            
            {/* Content */}
            <div className="relative z-10 p-12 lg:p-20 flex flex-col justify-center min-h-[600px] max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight">
                Our timeless <em className="italic">commitment</em>
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                We've been delivering premium fuel solutions our clients are proud to rely on. Delighting them with consistent supply, competitive pricing, world-class service, and unmatched reliability across East Africa.
              </p>
              <div>
                <button className="bg-[#FFF200] text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
                  View Our Network
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Costalina Colors */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-bold text-[#3C41D1] mb-2">6</div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">Countries</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-[#3C41D1] mb-2">50+</div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">Stations</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-[#3C41D1] mb-2">15+</div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">Years</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-[#3C41D1] mb-2">1000+</div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <img 
                src="/images/logo.png" 
                alt="Costalina Energy Logo" 
                className="h-12 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-gray-400 leading-relaxed max-w-md font-light">
                East Africa's trusted fuel distribution partner. Delivering quality, reliability, and excellence since 2018.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm">Quick Links</h4>
              <ul className="space-y-3 text-gray-400 font-light text-sm">
                <li><a href="#" className="hover:text-[#FFF200] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#FFF200] transition-colors">Our Products</a></li>
                <li><a href="#" className="hover:text-[#FFF200] transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-[#FFF200] transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm">Contact</h4>
              <ul className="space-y-3 text-gray-400 font-light text-sm">
                <li>+254 700 867 222</li>
                <li>info@costalina.co.ke</li>
                <li>Nairobi, Kenya</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm font-light">
            <p>© 2026 Costalina Energy Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
    </main>
  )
}