import React from "react";

function TextRotator() {
  return (
    <div className="py-4  rounded-md flex flex-col justify-center items-start overflow-hidden">
      <div className="font-poppins text-base sm:text-2xl [text-wrap:balance] text-slate-200">
        I am a Software Developer
        <span className="inline-flex ml-2 flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] overflow-hidden">
          & Freelancer
        </span>
      </div>
    </div>
  );
}

export default TextRotator;
