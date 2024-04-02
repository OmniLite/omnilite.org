import Image from 'next/image'

import FeatImage01 from '@/public/images/features-split-image-01.png'
import FeatImage02 from '@/public/images/features-split-image-02.png'
import FeatImage03 from '@/public/images/features-split-image-03.png'

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Endless possibilities</h1>
            <p className="text-xl text-gray-400">Omni extends what you can do with a traditional cryptocurrency.</p>
            <p className="text-xl text-gray-400">The possibilities are endless.</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="text-purple-600 mb-2">SIMPLY POWERFUL</div>
                  <h3 className="h3 mb-3">Easily create custom currencies</h3>
                  <p className="text-xl text-gray-400 mb-4">With Omni it's simple to create tokens to represent custom currencies or assets and to transact these via the Litecoin blockchain.</p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="text-purple-600 mb-2">ETHEREUM-KILLER</div>
                  <h3 className="h3 mb-3">Blockchain based crowdfunding</h3>
                  <p className="text-xl text-gray-400 mb-4">Decentralized crowdfunding is easy with Omni. Crowdsale participants can send litecoins or tokens directly to an issuer address and the Omni Layer automatically delivers the crowdfunded tokens to the sender in return - all without needing to trust a third party.</p>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width={540} height={405} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="text-purple-600 mb-2">🧑‍🎨</div>
                  <h3 className="h3 mb-3">Issue NFTs</h3>
                  <p className="text-xl text-gray-400 mb-4">Omni allows you to issue NFTs (non-fungibile tokens) without leaving Litecoin. Create and manage tokens, etc. etc. (currently work-in-progress)</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
