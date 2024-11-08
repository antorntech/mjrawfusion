<div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-8">
  {products.map((product, index) => (
    <Link
      to={{
        pathname: `/products/${product.name
          .replace(/\s+/g, "-")
          .toLowerCase()}`,
      }}
      state={{
        id: product.id,
      }}
      key={index}
      className="relative group flex items-center justify-center text-center border border-gray-300 transition-all duration-500 ease-in-out py-12 px-5 overflow-hidden rounded-md"
    >
      <div className="absolute inset-0 bg-gradient-to-l from-[#04cafb] to-[#039dda] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <p className="relative text-lg group-hover:text-white transition-all duration-500 z-10">
        {product.name}
      </p>
    </Link>
  ))}
</div>;

<div className="p-6 space-y-4 text-gray-800">
  {/* Header Text */}
  <p className="text-center text-[#162C40]">
    We offer conventional, economic, and dependable primary packaging materials
    for pharmaceuticals from ISO 9001:2015, UKAS, US FDA, Mah FDA plants.
  </p>
  {/* Scroll-style container */}
  <div className="relative bg-white border-2 border-orange-400 rounded-lg p-6 pb-10 shadow-lg">
    <div className="absolute top-0 left-0 w-6 h-10 border-t-2 border-l-2 border-orange-400 rounded-tl-full" />
    <div className="absolute top-0 right-0 w-6 h-10 border-t-2 border-r-2 border-orange-400 rounded-tr-full" />
    <div className="absolute bottom-0 left-0 w-6 h-10 border-b-2 border-l-2 border-orange-400 rounded-bl-full" />
    <div className="absolute bottom-0 right-0 w-6 h-10 border-b-2 border-r-2 border-orange-400 rounded-br-full" />
    {/* Packaging Materials Grid */}
    <div className="grid grid-cols-3 gap-4 text-gray-700 mt-4">
      {/* Column 1 */}
      <ul className="space-y-2">
        <li className="text-[#162C40]">
          <span className="text-[#162C40]">◆</span> Glass Vial
        </li>
        <li className="text-[#162C40]">
          <span className="text-[#162C40]">◆</span> Rubber Stopper
        </li>
        <li className="text-[#162C40]">
          <span className="text-[#162C40]">◆</span> Rubber Disc
        </li>
        <li className="text-[#162C40]">
          <span className="text-[#162C40]">◆</span> Glass Ampoules
        </li>
        <li className="text-[#162C40]">
          <span className="text-[#162C40]">◆</span> PVC and PVDC Film
        </li>
        <li className="text-[#162C40]">
          <span className="text-[#162C40]">◆</span> PVC Bag
        </li>
        <li className="text-[#162C40]">
          <span className="text-[#162C40]">◆</span> DPI and MDI Device
        </li>
      </ul>
      {/* Column 2 */}
      <ul className="space-y-2">
        <li className="text-[#162C40]">
          <span className="text-[#162C40]">◆</span> Eye Drop Container
        </li>
        <li className="text-[#162C40]">
          <span className="text-[#162C40]">◆</span> Shampoo Bottles
        </li>
        <li className="text-[#162C40]">
          <span className="text-[#162C40]">◆</span> Airless Bottles
        </li>
        <li className="text-[#162C40]">
          <span className="text-[#162C40]">◆</span> Capsule Shell
        </li>
        <li className="text-[#162C40]">
          <span className="text-[#162C40]">◆</span> Plastic Container
        </li>
        <li className="text-[#162C40]">
          <span className="text-[#162C40]">◆</span> Nozzle Spray
        </li>
        <li className="text-[#162C40]">
          <span className="text-[#162C40]">◆</span> Tubes
        </li>
      </ul>
      {/* Column 3 */}
      <ul className="space-y-2">
        <li className="text-[#162C40]">
          <span className="text-[#162C40]">◆</span> High Barrier Proof Film for
          U.V., Moisture and Oxidation Protection
        </li>
        <li className="text-[#162C40]">
          <span className="text-[#162C40]">◆</span> Tested in easy release and
          quick sealing on Aluminium Foils
        </li>
        <li className="text-[#162C40]">
          <span className="text-[#162C40]">◆</span> Alu Alu Cold Forming
          Laminates
        </li>
        <li className="text-[#162C40]">
          <span className="text-[#162C40]">◆</span> Foil Laminates for
          Effervescent
        </li>
        <li className="text-[#162C40]">
          <span className="text-[#162C40]">◆</span> Plasticizer-Free Calendered
          Rigid P.V.C Film
        </li>
        <li className="text-[#162C40]">
          <span className="text-[#162C40]">◆</span> Alu Alu bottom foil and
          printing foil
        </li>
        <li className="text-[#162C40]">
          <span className="text-[#162C40]">◆</span> Alu Alu Flip of Seal
        </li>
      </ul>
    </div>
  </div>
</div>;
