import React from "react";

export default function SectionTitle({ title, subTitle }) {
  return (
    <div className="text-center pt-5">
      <p className="text-yellow-500 mb-2">{subTitle}</p>
      <h2 className="text-4xl uppercase border-y-2 py-2 inline-block">
        {title}
      </h2>
    </div>
  );
}
