import React from 'react';

const SectionTitle = ({
  titulo,
  subtitulo = '',
  textColorClass = 'text-gray-800',
  customClass = '',
}) => {
  return (
    <div className={`text-center mx-auto my-auto mb-20 md:w-1/2 ${customClass} rounded-lg shadow-sm`}>
      <h1 className={`font-bold ${textColorClass} mb-1 text-2xl sm:text-3xl hover:text-opacity-90 transition-all duration-300 select-none`}>
        {titulo}
      </h1>
      {subtitulo && (
        <p className={`text-xl ${textColorClass} opacity-75 mt-2`}>
          {subtitulo}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
