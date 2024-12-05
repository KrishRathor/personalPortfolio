import React, { useState, SetStateAction } from "react";
import { Menu, X } from "lucide-react";

function Navbar({
  selectedItem,
  setSelectedItem,
}: {
  selectedItem: string;
  setSelectedItem: React.Dispatch<SetStateAction<string>>;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Home", "Blogs", "Projects", "Contact"];

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      {/* Mobile Hamburger */}
      <div className="md:hidden flex justify-end p-4">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="z-50 relative"
        >
          {isMenuOpen ? (
            <X className="text-white" size={24} />
          ) : (
            <Menu className="text-white" size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-40 flex flex-col justify-center items-center 
          transition-opacity duration-300 ease-in-out"
        >
          <nav className="space-y-6">
            {menuItems.map((item) => (
              <div 
                key={item}
                onClick={() => handleItemClick(item)}
                className={`
                  text-2xl font-light cursor-pointer text-center
                  transition-colors duration-300
                  ${selectedItem === item ? 'text-blue-500' : 'text-white hover:text-blue-300'}
                `}
              >
                {item}
              </div>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden md:block w-full max-w-md mx-auto border border-white rounded-full py-1 mt-8 mb-8">
        <ul className="flex justify-evenly">
          {menuItems.map((item) => (
            <li
              key={item}
              className={`
                cursor-pointer 
                ${selectedItem === item ? "text-blue-700" : ""}
              `}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;