export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      
      {/* Navigation - WHITE WITH LOGO */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo.png" 
                alt="Costalina Energy Logo" 
                className="h-12 w-auto"
              />
              <div className="text-gray-900">
                
                
              </div>
            </div>
            
            <div className="hidden lg:flex items-center gap-8 text-gray-700">
              <a href="#home" className="hover:text-[#3C41D1] transition-colors font-medium">HOME</a>
              <a href="#about" className="hover:text-[#3C41D1] transition-colors font-medium">ABOUT US</a>
              <a href="#services" className="hover:text-[#3C41D1] transition-colors font-medium">SERVICES</a>
              <a href="#products" className="hover:text-[#3C41D1] transition-colors font-medium">PRODUCTS</a>
              <a href="#blog" className="hover:text-[#3C41D1] transition-colors font-medium">BLOG</a>
              <a href="#contact" className="hover:text-[#3C41D1] transition-colors font-medium">CONTACT</a>
            </div>
            
            <button className="bg-[#FFF200] text-gray-900 px-6 py-2.5 rounded-full font-medium hover:bg-yellow-300 transition-colors text-sm">
              GET A QUOTE
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section with Photo Background */}
      <section className="relative min-h-screen pt-32 pb-40">
        {/* Background Photo - NO BLUE OVERLAY */}
        <div className="absolute inset-0">
          <img 
            src="/images/hero-background.jpg" 
            alt="Costalina Energy Operations" 
            className="w-full h-full object-cover"
          />
          {/* Subtle dark overlay for text readability only */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-white pt-12">
              <div className="inline-block mb-6">
                <span className="text-sm tracking-wider font-medium opacity-90">QUALITY & RELIABILITY GUARANTEED</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-semibold mb-6 leading-tight">
                Refuel...Refresh...
                <span className="block">Right Here!</span>
              </h1>
              
              <p className="text-lg mb-8 opacity-90 max-w-lg leading-relaxed font-light">
                Premium fuel distribution across East Africa. Trusted by thousands of businesses for consistent supply, competitive pricing, and exceptional service since 2010.
              </p>
              
              <div className="flex gap-4">
                <button className="bg-[#FFF200] text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-yellow-300 transition-all">
                  FIND STATION
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-[#3C41D1] transition-all">
                  EXPLORE NOW
                </button>
              </div>
            </div>
            
            {/* Right - YOUR FEATURED IMAGE (SMALLER) */}
            <div className="relative lg:pl-12 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl w-3/4 lg:w-2/3">
                <img 
                  src="/images/hero-featured.jpg" 
                  alt="Costalina Energy Station" 
                  className="w-full h-full object-cover aspect-[4/5]"
                />
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 -mb-1">
          <svg viewBox="0 0 1440 120" className="w-full h-24 md:h-32" preserveAspectRatio="none">
            <path d="M0,64 C360,90 720,20 1080,64 C1260,86 1350,96 1440,96 L1440,120 L0,120 Z" fill="#f8f9fa" opacity="1"></path>
          </svg>
        </div>
      </section>

      {/* Video/Gallery Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left - Images with Play Button */}
            <div className="relative">
              {/* Badge */}
              <div className="absolute -top-6 left-6 z-10">
                <div className="bg-[#00BCD4] text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                  <span className="text-sm font-medium">OUR FACILITIES</span>
                  <span className="text-xs opacity-90 font-light">Watch Tour</span>
                </div>
              </div>
              
              {/* Main Large Image - YOUR FACILITY PHOTO */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl transform -rotate-2">
                <img 
                  src="/images/facility-main.jpg" 
                  alt="Costalina Facilities" 
                  className="w-full h-full object-cover aspect-[16/11]"
                />
                
                {/* Video Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-[#3C41D1] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                  </button>
                </div>
              </div>
              
              {/* Small Image Grid */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="rounded-2xl overflow-hidden shadow-lg transform rotate-1">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      <div className="text-center">
                        <div className="text-3xl mb-2">📸</div>
                        <p className="text-xs">Detail Photo 1</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg transform -rotate-1">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      <div className="text-center">
                        <div className="text-3xl mb-2">📸</div>
                        <p className="text-xs">Detail Photo 2</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right - Content */}
            <div>
              <div className="inline-block mb-4">
                <span className="text-[#00BCD4] text-sm font-semibold tracking-wider">WHY CHOOSE US</span>
              </div>
              
              <h2 className="text-5xl font-semibold text-gray-900 mb-6 leading-tight">
                We Can Help You Feel
                <span className="block">More Comfortable !</span>
              </h2>
              
              <p className="text-gray-600 leading-relaxed mb-8 font-light">
                With strategic depot locations across East Africa and a modern fleet of delivery vehicles, we ensure your fuel supply never runs dry. Our commitment to quality and reliability has made us the preferred partner for leading businesses across six countries.
              </p>
              
              {/* Contact Info Box */}
              <div className="bg-white rounded-2xl p-6 shadow-lg inline-flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#00BCD4] rounded-full flex items-center justify-center text-white text-2xl">
                  ✓
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1 font-light">For More Information, Please</div>
                  <div className="text-lg font-medium text-gray-900">Contact Us By Telephone Or Email</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <a href="tel:+254700867222" className="text-2xl font-semibold text-[#3C41D1]">+254-700-867-222</a>
                <button className="bg-[#00BCD4] text-white px-8 py-3 rounded-full font-medium hover:bg-cyan-600 transition-colors">
                  EMAIL US
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Services Cards Section WITH PHOTOS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#00BCD4] text-sm font-semibold tracking-wider">OUR SERVICES</span>
            <h2 className="text-5xl font-semibold text-gray-900 mt-4 mb-4">
              Best Convenience Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-light">
              Comprehensive fuel solutions tailored to your business needs. From retail stations to bulk industrial supply, we deliver excellence at every touchpoint.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 - WITH PHOTO */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="relative aspect-[4/3]">
                <img 
                  src="/images/services/retail-station.jpg" 
                  alt="Retail Station" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 bg-[#3C41D1] rounded-full flex items-center justify-center text-white text-xl">
                    ⛽
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Retail Stations</h3>
                <p className="text-gray-600 mb-6 leading-relaxed font-light">
                  Modern fuel stations across East Africa equipped with latest technology and safety standards for convenient refueling.
                </p>
                <button className="text-[#3C41D1] font-medium hover:gap-3 inline-flex items-center gap-2 transition-all">
                  Read More 
                  <span className="text-xl">→</span>
                </button>
              </div>
            </div>

            {/* Card 2 - WITH PHOTO */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="relative aspect-[4/3]">
                <img 
                  src="/images/services/bulk-distribution.jpg" 
                  alt="Bulk Distribution" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 bg-[#00BCD4] rounded-full flex items-center justify-center text-white text-xl">
                    🚚
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Bulk Distribution</h3>
                <p className="text-gray-600 mb-6 leading-relaxed font-light">
                  Large-scale fuel delivery to industries, construction sites, and businesses with flexible scheduling and competitive rates.
                </p>
                <button className="text-[#3C41D1] font-medium hover:gap-3 inline-flex items-center gap-2 transition-all">
                  Read More 
                  <span className="text-xl">→</span>
                </button>
              </div>
            </div>

            {/* Card 3 - WITH PHOTO */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="relative aspect-[4/3]">
                <img 
                  src="/images/services/fleet-management.jpg" 
                  alt="Fleet Management" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 bg-[#FFF200] rounded-full flex items-center justify-center text-gray-900 text-xl">
                    🔧
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Fleet Management</h3>
                <p className="text-gray-600 mb-6 leading-relaxed font-light">
                  Dedicated fuel cards and fleet management solutions to help businesses track consumption and optimize costs.
                </p>
                <button className="text-[#3C41D1] font-medium hover:gap-3 inline-flex items-center gap-2 transition-all">
                  Read More 
                  <span className="text-xl">→</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Dark Split Section */}
      <section className="py-24 bg-gradient-to-br from-[#2a4a5a] to-[#1a3a4a] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div>
              <span className="text-[#00BCD4] text-sm font-semibold tracking-wider">OUR QUALITY</span>
              <h2 className="text-5xl font-semibold mt-4 mb-6 leading-tight">
                Quality Standards Are Perfectly
                <span className="block">Combined Here !</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8 font-light">
                Every drop of fuel that passes through our network undergoes rigorous quality control. We maintain international standards while ensuring competitive pricing for our valued customers across East Africa.
              </p>
              <button className="bg-[#FFF200] text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-yellow-300 transition-all">
                LEARN MORE
              </button>
            </div>
            
            {/* Right Images Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden shadow-xl transform rotate-2">
                  <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      <div className="text-center">
                        <div className="text-4xl mb-2">📸</div>
                        <p className="text-xs">Quality Check Photo</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-xl transform -rotate-2">
                  <div className="text-3xl font-semibold text-[#3C41D1] mb-2">ISO Certified</div>
                  <p className="text-sm text-gray-600 font-light">International quality standards compliance</p>
                </div>
              </div>
              
              <div className="space-y-6 pt-12">
                <div className="bg-gradient-to-br from-[#3C41D1] to-blue-700 rounded-2xl p-6 shadow-xl transform rotate-2">
                  <div className="text-3xl font-semibold mb-2">15+</div>
                  <p className="text-sm opacity-90 font-light">Years of Excellence</p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl transform -rotate-2">
                  <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      <div className="text-center">
                        <div className="text-4xl mb-2">📸</div>
                        <p className="text-xs">Certification Photo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Footer WITH LOGO */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="mb-4">
                <img 
                  src="/images/logo.png" 
                  alt="Costalina Energy Logo" 
                  className="h-16 w-auto mb-4"
                />
                <div className="text-3xl font-semibold">
                  <span>COSTALINA</span>
                  <span className="block text-sm text-gray-500 font-normal mt-1">ENERGY LIMITED</span>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md font-light">
                East Africa's trusted fuel distribution partner. Delivering quality, reliability, and excellence since 2010.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3 text-gray-400 font-light">
                <li><a href="#" className="hover:text-[#FFF200] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#FFF200] transition-colors">Our Products</a></li>
                <li><a href="#" className="hover:text-[#FFF200] transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-[#FFF200] transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-400 font-light">
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