import React from 'react'

export default function Footer() {
  const year = new Date();
  
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-gray-400 text-sm mr-4">&copy; {year.getFullYear()} <a href="https://litecoin-foundation.org">Litecoin Foundation</a>. All rights reserved.</div>

          </div>

        </div>
      </div>
    </footer>
  )
}
