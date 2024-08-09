export default function Home() {
  return (
    <div className="bg-gray-50 text-black">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1778353/pexels-photo-1778353.jpeg')",
        }}
      >
        <div className="flex items-center justify-center h-full bg-opacity-50 bg-black">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Sireesha Reddy Designer Studio
            </h1>
            <p className="text-lg md:text-2xl mb-8">
              Handpicked collections of Indian traditional attire.
            </p>
            {/* <a href="#categories" className="btn btn-primary px-6 py-3"> */}
            <a  className="btn btn-success text-white px-6 py-3 mb-6">
              Grand Opening on Aug 11, 2024
            </a>
            <a  className="btn btn-success text-white mx-6 px-6 py-3 md:mt-6">
              Webpage under construction
            </a> 
          </div>
          
        </div>
      </section>
      
      {/* Categories Section */}
      <section id="categories" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Shop by Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card shadow-xl">
              <figure>
                <img
                  src="logo.jpg"
                  alt="Sarees"
                  className="h-64 w-full object-cover"
                />
              </figure>
              <div className="card-body text-center">
                <h3 className="card-title">Sarees</h3>
                <p>Elegant sarees for every occasion.</p>
                <a href="/categories/sarees" className="btn btn-primary">
                  Explore
                </a>
              </div>
            </div>
            <div className="card shadow-xl">
              <figure>
                <img
                  src="logo.jpg"
                  alt="Lehengas"
                  className="h-64 w-full object-cover"
                />
              </figure>
              <div className="card-body text-center">
                <h3 className="card-title">Lehengas</h3>
                <p>Stunning lehengas for weddings and festivities.</p>
                <a href="/categories/lehengas" className="btn btn-primary">
                  Explore
                </a>
              </div>
            </div>
            <div className="card shadow-xl">
              <figure>
                <img
                  src="logo.jpg"
                  alt="Kurta Pajama"
                  className="h-64 w-full object-cover"
                />
              </figure>
              <div className="card-body text-center">
                <h3 className="card-title">Kurta Pajama</h3>
                <p>Traditional kurta pajama sets for men.</p>
                <a href="/categories/kurta-pajama" className="btn btn-primary">
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Example Product */}
            <div className="card shadow-lg">
              <figure>
                <img
                  src="logo.jpg"
                  alt="Bridal Lehenga"
                  className="h-64 w-full object-cover"
                />
              </figure>
              <div className="card-body text-center">
                <h3 className="card-title">Bridal Lehenga</h3>
                {/* <p className="text-xl font-semibold text-primary">$299.99</p> */}
                <a href="/products/bridal-lehenga" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
            <div className="card shadow-lg">
              <figure>
                <img
                  src="logo.jpg"
                  alt="Men’s Sherwani"
                  className="h-64 w-full object-cover"
                />
              </figure>
              <div className="card-body text-center">
                <h3 className="card-title">Men’s Sherwani</h3>
                {/* <p className="text-xl font-semibold text-primary">$249.99</p> */}
                <a href="/products/mens-sherwani" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg mb-8">
            Sign up for exclusive offers, latest trends, and more.
          </p>
          <a href="/signup" className="btn btn-secondary px-6 py-3">
            Sign Up Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Indian Traditional Clothing. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
