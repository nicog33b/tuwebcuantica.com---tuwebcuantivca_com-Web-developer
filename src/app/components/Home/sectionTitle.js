import React from 'react';

const SectionTitle = ({ titulo, textColorClass }) => {
  return (
    <div className="text-center mx-auto my-auto mb-20 md:w-1/2  rounded-md">
      <h1 className={`font-bold ${textColorClass} mb-4 text-4xl sm:w-full hover:text-4xl select-none`}>
        {titulo}
      </h1>
    </div>
  );
}

export default SectionTitle;
