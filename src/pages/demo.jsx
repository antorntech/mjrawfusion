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
