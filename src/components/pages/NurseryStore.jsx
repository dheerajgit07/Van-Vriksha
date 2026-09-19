import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Search, ShoppingBag, Plus, Star, Sprout, Heart, Filter } from 'lucide-react';

export default function NurseryStore() {
  const { addToCart, setIsCartOpen } = useApp();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    {
      id: 'p-1',
      name: 'Neem Tree Sapling (Organic)',
      price: 350,
      rating: 4.9,
      reviews: 128,
      category: 'Native Saplings',
      image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=600&auto=format&fit=crop',
      description: 'Pest-resistant hardy sapling grown in organic bio-char rich potting soil.'
    },
    {
      id: 'p-2',
      name: 'Holy Tulsi / Sacred Basil Plant',
      price: 199,
      rating: 4.8,
      reviews: 245,
      category: 'Indoor & Herbal',
      image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=600&auto=format&fit=crop',
      description: 'Aromatic medicinal herb essential for home balconies and natural wellness.'
    },
    {
      id: 'p-3',
      name: 'Premium Vermicompost (5 KG Bag)',
      price: 299,
      rating: 4.9,
      reviews: 89,
      category: 'Organic Soil & Fertilizers',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=600&auto=format&fit=crop',
      description: '100% pure worm castings nutrient enricher for rapid root development.'
    },
    {
      id: 'p-4',
      name: 'Indian Rosewood / Sheesham Sapling',
      price: 599,
      rating: 4.7,
      reviews: 64,
      category: 'Native Saplings',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=600&auto=format&fit=crop',
      description: 'Durable hardwood sapling suitable for farm borders and timber groves.'
    },
    {
      id: 'p-5',
      name: 'Jade Plant & Ceramic Planter',
      price: 499,
      rating: 4.8,
      reviews: 112,
      category: 'Indoor & Herbal',
      image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=600&auto=format&fit=crop',
      description: 'Succulent indoor foliage plant associated with good fortune and low maintenance.'
    },
    {
      id: 'p-6',
      name: 'Bio-Char Soil Restorer (2 KG)',
      price: 349,
      rating: 4.9,
      reviews: 42,
      category: 'Organic Soil & Fertilizers',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600&auto=format&fit=crop',
      description: 'Activated organic charcoal that retains soil moisture and beneficial micro-flora.'
    }
  ];

  const categories = ['All', 'Native Saplings', 'Indoor & Herbal', 'Organic Soil & Fertilizers'];

  const filteredProducts = products.filter((p) => {
    const matchesCat = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-24 pb-16 space-y-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block bg-[#E3F4E1] text-[#1D461A] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Vanvriksha Certified Nursery
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1D461A]">
          Eco-Nursery & Sapling Store
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed">
          Order organic saplings, indoor air purifiers, vermicompost, and seed kits delivered directly to your doorstep in eco-friendly biodegradable packaging.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-3xl border border-[#C5E9C1] shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search saplings, fertilizer, pots..."
            className="w-full bg-[#F4F8F3] border border-[#C5E9C1] rounded-2xl pl-10 pr-4 py-2.5 text-xs text-[#1D461A] focus:outline-none focus:border-[#2D8425]"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#2D8425] text-white shadow-sm'
                  : 'bg-[#F4F8F3] text-[#1D461A] hover:bg-[#E3F4E1]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-3xl overflow-hidden border border-[#C5E9C1] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[#1D461A] text-[10px] font-bold px-3 py-1 rounded-full border border-[#C5E9C1]">
                  {product.category}
                </span>
              </div>

              <div className="p-5 space-y-2">
                <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{product.rating}</span>
                  <span className="text-gray-400 font-normal">({product.reviews} reviews)</span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#1D461A]">{product.name}</h3>
                <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">{product.description}</p>
              </div>
            </div>

            <div className="p-5 pt-0 flex items-center justify-between border-t border-[#C5E9C1]/60 mt-3">
              <div>
                <span className="block text-[10px] text-gray-400 uppercase font-semibold">Price</span>
                <span className="text-lg font-bold text-[#2D8425]">₹{product.price.toLocaleString('en-IN')}</span>
              </div>

              <button
                onClick={() => addToCart(product)}
                className="inline-flex items-center gap-1.5 bg-[#2D8425] hover:bg-[#1D461A] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add to Basket</span>
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
