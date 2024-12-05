import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full mb-10 space-y-4 md:space-y-0">
      <div className="text-center md:text-left w-full md:w-3/4">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
          Krish Rathor
        </h1>
        <p className="text-zinc-600 dark:text-zinc-500 text-sm md:text-base">
          Building products for Fun, Find me on{" "}
          <a
            href="https://x.com/KrishRathor18"
            className="font-bold group dark:text-zinc-400 font-inter relative inline-flex overflow-hidden"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </a>{" "}
        </p>
      </div>

      <div className="flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto">
        <a
          href="https://twitter.com/mannupaaji"
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5 bg-white h-20 w-20"
        >
          {/* Avatar placeholder */}
        </a>
      </div>
    </div>
  );
};

export default Header;