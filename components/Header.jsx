import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  });
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-value-400 py-8">
        <div className="md:float-left flex items-center gap-12">
          <img
            className="object-cover align-middle rounded-full w-24"
            src="/profile.jpg"
          ></img>
          <Link href="/">
            <span className="cursor-pointer text-4xl">Eddie Learns Code</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle ml-4 cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
