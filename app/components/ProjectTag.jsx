import React from "react";

const ProjectTag = ({ name, onCLick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-black border-[#e66d8de2]"
    : "text-black border-gray-400 hover:border-white";

  return (
    <button
      className= {`${buttonStyles} bellabooFont rounded-full border-2 py-1 px-5 text-xl cursor-pointer`}
      onClick={() => onCLick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
