'use client'

import { useState } from 'react'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden text-gray-900 p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-4">
            <a href="#home" className="text-gray-700 hover:text-[#3C41D1] font-medium py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>HOME</a>
            <a href="#about" className="text-gray-700 hover:text-[#3C41D1] font-medium py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>ABOUT US</a>
            <a href="#services" className="text-gray-700 hover:text-[#3C41D1] font-medium py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>SERVICES</a>
            <a href="#products" className="text-gray-700 hover:text-[#3C41D1] font-medium py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>PRODUCTS</a>
            <a href="#blog" className="text-gray-700 hover:text-[#3C41D1] font-medium py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>BLOG</a>
            <a href="#contact" className="text-gray-700 hover:text-[#3C41D1] font-medium py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>CONTACT</a>
            <button className="bg-[#FFF200] text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-yellow-300 transition-colors text-sm w-full">
              GET A QUOTE
            </button>
          </div>
        </div>
      )}
    </>
  )
}