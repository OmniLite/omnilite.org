'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [downloadURL, setDownloadURL] = useState('')

  useEffect(() => {
    const ua = navigator.userAgent

    if (ua.includes("Macintosh")){
      setDownloadURL('https://github.com/OmniLite/omnilite/releases/download/v0.18.2/omnilite-0.18.2-osx-unsigned.dmg')
    } else if (ua.includes("Windows")) {
      setDownloadURL('https://github.com/OmniLite/omnilite/releases/download/v0.18.2/omnilite-0.18.2-win64-setup-unsigned.exe')
    } else {
      setDownloadURL('https://github.com/OmniLite/omnilite/releases/tag/v0.18.2')
    }
  }, [])

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">OmniLite for Litecoin</h1>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">Create and manage tokens on top of the Litecoin Network.</p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <Link className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href={downloadURL}>Download</Link>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <Link className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="https://github.com/omnilite/omnilite">View on GitHub</Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
