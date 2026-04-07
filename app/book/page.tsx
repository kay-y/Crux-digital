"use client";

import Navbar from "@/components/navbar";

const Book = () => {
  return (
    <>
      <div className="min-h-screen w-full bg-black/[0.96] bg-grid-white/[0.02]">
        <Navbar
          scrollToWebsiteDesign={() => {}}
          scrollToGraphicDesign={() => {}}
          scrollToShopifyStores={() => {}}
          scrollToBrands={() => {}}
          scrollToServices={() => {}}
        />
        <div className="mx-auto flex w-full max-w-6xl flex-col px-4 pb-10 md:px-6">
          <div
            className="pb-5 text-center text-4xl md:text-6xl
        bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
          >
            Book a meeting
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-2xl">
            <iframe
              src="https://calendly.com/cruxbooking/"
              title="Book a meeting"
              className="h-[900px] w-full md:h-[780px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
