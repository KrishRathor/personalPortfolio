import { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import MainSection from "../components/MainSection";
import FreelancerContact from "../components/Contact";

function Home() {
  const [selectedItem, setSelectedItem] = useState<string>("Home");

  return (
    <div>
      <div className="w-[40%] mx-auto">
        <Navbar selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        <Header />
        {selectedItem === "Home" && <MainSection setSelectedItem={setSelectedItem} />}
        { selectedItem === "Contact" && <FreelancerContact /> }
      </div>
    </div>
  );
}

export default Home;
