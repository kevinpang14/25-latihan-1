import React from "react";

const BlogSection = ({ sectionTitle, blogPosts }) => {
  const sanitizedSectionTitle = sectionTitle.replace(/\s+/g, "-");
  return (
    <div
      id={`contentStoriesTop-${sanitizedSectionTitle}`}
      class="flex flex-col justify-between my-4 pb-20"
    >
      {/* section title */}
      <div className="flex flex-row justify-between border-b-lime-500 border-b-4 mb-3">
        <div
          id={`contentStoriesTitle-${sanitizedSectionTitle}`}
          className="bg-lime-500 py-1 px-2"
        >
          {sectionTitle}
        </div>
        {/* only show this if section title is "Siaran Pers" */}
        {sectionTitle === "Siaran Pers" && (
          <div
            id="contentStoriesSide"
            className="flex justify-between space-x-4"
          >
            <p>Founder's Letter</p>
            <p>Milestone</p>
          </div>
        )}
      </div>

      <div
        id={`contentStoriesBlog${sanitizedSectionTitle}`}
        className="flex flex-row justify-between"
      >
        {blogPosts.map((post, index) => (
          <div key={index}>
            <img
              src={post.image}
              alt={post.title}
              className="w-80 h-48 object-cover"
            />
            <h2>
              <strong>{post.title}</strong>
            </h2>
            <p>{post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
