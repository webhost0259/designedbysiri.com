const categories = [
    { name: "Sarees", image: "/category-images/saree-wear.jpeg", link: "/categories/4/sarees" },
    { name: "Women Traditional Wear", image: "/category-images/women-traditional-wear.jpeg", link: "/categories/2/women-traditional-wear" },
    { name: "Mens Traditional Wear", image: "/category-images/mens-traditional-wear.jpeg", link: "/categories/1/mens-traditional-wear" },
    { name: "Bridal Wear", image: "/category-images/bridal-wear.jpeg", link: "/categories/7/bridal-wear" },
    { name: "Girl Wear", image: "/category-images/girl-wear.jpeg", link: "/categories/6/girl-wear" },
    { name: "Boys Wear", image: "/category-images/boys-wear.jpeg", link: "/categories/5/boys-wear" },
    { name: "Accessories", image: "/category-images/women-accesories.jpeg", link: "/categories/3/accessories" },
    { name: "Botique Items", image: "/category-images/botique-items.jpeg", link: "/categories/8/botique-items" },
  ];
  
  const CategorySection = () => {
    return (
      <section className="py-10 px-4 tablet:px-10 laptop:px-16">
        <h2 className="text-2xl laptop:text-4xl font-bold text-center mb-6">
          Explore Our Collections
        </h2>
  
        {/* Categories Grid */}
        <div className="grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.link}
              className="relative group overflow-hidden rounded-lg shadow-lg block"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-40 laptop:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-lg font-semibold">
                {category.name}
              </div>
            </a>
          ))}
        </div>
      </section>
    );
  };
  
  export default CategorySection;