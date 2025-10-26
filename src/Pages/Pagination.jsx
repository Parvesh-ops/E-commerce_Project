import React from "react";

const getPages = (current, total) => {
  const pages = [];
  if (total <= 5) {
    for (let i = 1; i <= total; i++) pages.push(i);
  } else {
    if (current <= 3) pages.push(1, 2, 3, "...", total);
    else if (current >= total - 2)
      pages.push(1, "...", total - 2, total - 1, total);
    else pages.push(1, "...", current - 1, current, current + 1, "...", total);
  }
  return pages;
};

const Pagination = ({ Page, pageHandler, dynamicPage }) => {
  // console.log("Received pageHandler:", typeof pageHandler); 
  const pages = getPages(Page, dynamicPage);

  return (
    <div className="mt-10 flex items-center space-x-3 justify-center">
      <button
        disabled={Page === 1}
        onClick={() => pageHandler(Page - 1)}
        className={`px-3 py-1 rounded-md text-white ${
          Page === 1
            ? "bg-red-400 cursor-not-allowed"
            : "bg-red-500 hover:bg-red-600 cursor-pointer"
        }`}
      >
        Prev
      </button>

      {pages.map((item, index) => (
        <span
          key={index}
          onClick={() => typeof item === "number" && pageHandler(item)}
          className={`px-2 cursor-pointer ${
            item === Page
              ? "font-bold text-red-600 underline"
              : item === "..."
              ? "text-gray-500 cursor-default"
              : "text-black hover:text-red-500"
          }`}
        >
          {item}
        </span>
      ))}

      <button
        disabled={Page === dynamicPage}
        onClick={() => pageHandler(Page + 1)}
        className={`px-3 py-1 rounded-md text-white ${
          Page === dynamicPage
            ? "bg-red-400 cursor-not-allowed"
            : "bg-red-500 hover:bg-red-600 cursor-pointer"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
