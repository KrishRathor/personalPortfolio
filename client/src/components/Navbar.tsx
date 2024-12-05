import React, { SetStateAction } from "react";

function Navbar({
  selectedItem,
  setSelectedItem,
}: {
  selectedItem: string;
  setSelectedItem: React.Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="w-[20vw] border border-white rounded-full py-[4px] mt-8 mb-8">
      <ul className="flex justify-evenly">
        <li
          className={`${
            selectedItem === "Home" && "text-blue-700"
          } cursor-pointer`}
          onClick={() => {
            setSelectedItem("Home");
          }}
        >
          Home
        </li>
        <li
          className={`${
            selectedItem === "Blogs" && "text-blue-700"
          } cursor-pointer`}
          onClick={() => {
            setSelectedItem("Blogs");
          }}
        >
          Blogs
        </li>
        <li
          className={`${
            selectedItem === "Projects" && "text-blue-700"
          } cursor-pointer`}
          onClick={() => {
            setSelectedItem("Projects");
          }}
        >
          Projects
        </li>
        <li
          className={`${
            selectedItem === "Contact" && "text-blue-700"
          } cursor-pointer`}
          onClick={() => {
            setSelectedItem("Contact");
          }}
        >
          Contact
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
