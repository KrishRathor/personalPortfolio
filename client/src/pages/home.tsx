import { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import MainSection from "../components/MainSection";
import FreelancerContact from "../components/Contact";

function Home() {
  const [selectedItem, setSelectedItem] = useState<string>("Home");

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      {/* Increased max-w-xl by 20% and maintained responsive approach */}
      <div className="w-full max-w-[40rem] mx-auto">
        <Navbar 
          selectedItem={selectedItem} 
          setSelectedItem={setSelectedItem} 
        />
        <Header />
        {selectedItem === "Home" && <MainSection setSelectedItem={setSelectedItem} />}
        {selectedItem === "Contact" && <FreelancerContact />}
      </div>
    </div>
  );
}

export default Home;