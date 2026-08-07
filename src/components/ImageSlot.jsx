"use client";

import { useState } from "react";

export default function ImageSlot({
  id,
  shape = "rounded",
  radius = 12,
  fit = "cover",
  placeholder = "Upload image",
  src: initialSrc = "",
  className = "",
}) {
  const [src, setSrc] = useState(initialSrc);

  const getShapeClass = () => {
    switch (shape) {
      case "circle":
        return "rounded-full aspect-square";
      case "pill":
        return "rounded-full";
      case "rect":
        return "rounded-none";
      case "rounded":
      default:
        return "rounded-xl";
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setSrc(url);
    }
  };

  return (
    <div
      className={`relative w-full h-full min-h-[140px] flex items-center justify-center overflow-hidden border border-dashed border-primary/20 bg-[#F4F1EA] transition-all hover:border-primary/45 group ${getShapeClass()} ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={placeholder}
          className={`w-full h-full object-${fit} transition-transform duration-500 group-hover:scale-105`}
        />
      ) : (
        <div className="flex flex-col items-center justify-center p-6 text-center w-full h-full select-none">
          <svg
            className="w-8 h-8 text-accent mb-3 opacity-60 group-hover:opacity-100 transition-opacity"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-[12px] font-medium tracking-[0.06em] uppercase text-text-muted/70 group-hover:text-primary transition-colors">
            {placeholder}
          </span>
        </div>
      )}
    </div>
  );
}
