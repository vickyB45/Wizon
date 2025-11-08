import { useState } from "react";

const DashboardCard = ({ brands }) => {
  const [selectedBrand, setSelectedBrand] = useState(brands[0]);

  return (
    <div className="relative max-w-6xl bg-white border-2 text rounded-3xl md:p-6 p-3 mx-auto">
      {/* Green border background */}
      <div className="absolute top-3 left-3 w-full h-full border-2 border-green-500 rounded-3xl -z-10 pointer-events-none" />

      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 relative z-10">
        {/* Brand Selector */}
        <div className="flex items-center font-semibold text-lg md:text-xl space-x-2 mb-4 md:mb-0">
          <span className="text-gray-800">Brand:</span>
          <select
            value={selectedBrand.name}
            onChange={(e) =>
              setSelectedBrand(brands.find((b) => b.name === e.target.value))
            }
            className="border-2 border-gray-300 rounded-full px-2 py-1 text-sm md:text-base"
          >
            {brands.map((b) => (
              <option key={b.name}>{b.name}</option>
            ))}
          </select>
        </div>

        {/* Insights By Platforms */}
        <div className="flex flex-wrap md:flex-col items-center gap-2 text-[15px] md:text-[18px]">
          <div className="font-semibold text-gray-800">
            Insights By{" "}
            <b>
              <span className="underline">Platforms</span>
            </b>
          </div>
          <div className="flex gap-6 md:gap-10">
            {/* Meta Logo */}
            <div className="border-[1.5px] border-green-500 px-3 py-1 rounded-full flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/1200px-Meta-Logo.png?20211104123859"
                alt="Meta"
                className="w-12 md:w-16"
              />
            </div>
            {/* Shopify Logo */}
            <div className="border-[1.5px] border-green-500 px-3 py-1 rounded-full flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/1200px-Shopify_logo_2018.svg.png"
                alt="Shopify"
                className="h-6 md:h-7"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-4 gap-6 md:gap-0 relative z-10">
        {/* Left Text Section */}
        <div className="md:w-1/3 w-full text-center md:text-left">
          <img
            className="w-full rounded-xl mb-4"
            src={selectedBrand.image}
            alt={selectedBrand.name}
          />
          <div className="text-3xl md:text-4xl font-[500] space-y-1">
            <h1>{selectedBrand.heading}</h1>
            <h1 className="font-bold">{selectedBrand.heading2}</h1>
            <h1>{selectedBrand.heading3}</h1>
          </div>

          <div className="mt-4 text-base md:text-lg leading-5">
            <p className="text-gray-700">{selectedBrand.description}</p>
            <p className="text-white bg-black inline-block px-2 py-1 rounded-md mt-2">
              {selectedBrand.description2}
            </p>
          </div>
        </div>

        {/* Right Image / Table Section */}
        <div className="md:w-2/3 w-full border-4 rounded-xl shadow-inner relative z-10 overflow-hidden">
          <img
            src={selectedBrand.image2}
            alt={`${selectedBrand.name} Dashboard`}
            className="w-full h-[220px] md:h-[300px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
