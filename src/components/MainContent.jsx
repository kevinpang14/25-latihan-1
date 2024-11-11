import React from "react";
import BlogSection from "./BlogSection";
import sectionImage1 from "../assets/section-image-1.jpg";
import gridImage1 from "../assets/grid-image-1.jpg";
import gridImage2 from "../assets/grid-image-2.jpg";
import gridImage3 from "../assets/grid-image-3.jpg";
import gridImage4 from "../assets/grid-image-4.jpg";

const MainContent = () => {
  const sections = [
    {
      sectionTitle: "Siaran Pers",
      blogPosts: [
        {
          image: sectionImage1,
          title: "blog 1",
          date: "21 Maret 2024",
        },
        {
          image: sectionImage1,
          title: "blog 2",
          date: "22 Maret 2024",
        },
        {
          image: sectionImage1,
          title: "blog 3",
          date: "23 Maret 2024",
        },
      ],
    },
    {
      sectionTitle: "Behind The Scene",
      blogPosts: [
        {
          image: sectionImage1,
          title: "blog 1",
          date: "24 Maret 2024",
        },
        {
          image: sectionImage1,
          title: "blog 2",
          date: "25 Maret 2024",
        },
        {
          image: sectionImage1,
          title: "blog 3",
          date: "26 Maret 2024",
        },
      ],
    },
    {
      sectionTitle: "Social Impact",
      blogPosts: [
        {
          image: sectionImage1,
          title: "blog 1",
          date: "27 Maret 2024",
        },
        {
          image: sectionImage1,
          title: "blog 2",
          date: "28 Maret 2024",
        },
        {
          image: sectionImage1,
          title: "blog 3",
          date: "29 Maret 2024",
        },
      ],
    },
  ];

  return (
    <div id="content" className="max-w-screen-lg mx-auto border-b-2">
      {/* BLOG HEADER START */}
      <div
        id="contentHeader"
        className="grid grid-rows-2 grid-cols-4 gap-1 box-border"
      >
        <div className="row-span-2 col-span-2 overflow-hidden relative group">
          <img
            src={gridImage1}
            alt="Dummy 1"
            className="h-full object-cover group-hover:scale-110 transform transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100"></div>
          <div className="absolute bottom-5 left-5 text-white p-2 w-8/10">
            <h1 className="text-2xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              quas lorem10
            </h1>
            <p>21 Maret 2024</p>
          </div>
        </div>

        <div className="col-span-2 overflow-hidden relative group">
          <img
            src={gridImage2}
            alt="Dummy 1"
            className="w-full object-cover h-[250px] group-hover:scale-110 transform transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100"></div>
          <div className="absolute bottom-5 left-5 text-white p-2 w-2/3">
            <h2 className="text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              quas lorem10
            </h2>
          </div>
        </div>

        <div className="col-span-1 overflow-hidden relative group">
          <img
            src={gridImage3}
            alt="Dummy 1"
            className="h-full object-cover group-hover:scale-110 transform transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100"></div>
          <div className="absolute bottom-5 left-5 text-white p-2 w-10/12 text-sm">
            <h2>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              quas lorem10
            </h2>
          </div>
        </div>

        <div className="col-span-1 overflow-hidden relative group">
          <img
            src={gridImage4}
            alt="Dummy 1"
            className="h-full object-cover group-hover:scale-110 transform transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100"></div>
          <div className="absolute bottom-5 left-5 text-white p-2 w-10/12 text-sm">
            <h2>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              quas lorem10
            </h2>
          </div>
        </div>
      </div>
      {/* BLOG HEADER END */}
      {/* BLOG CONTENT START */}
      <div>
        {sections.map((section, index) => (
          <BlogSection
            key={index}
            sectionTitle={section.sectionTitle}
            blogPosts={section.blogPosts}
          />
        ))}
      </div>
      {/* BLOG CONTENT END */}
    </div>
  );
};

export default MainContent;
