// En tu componente PortfolioCard
import React from "react";
import Swal from "sweetalert2";

const PortfolioCard = ({
  ImageHref,
  title,
  button,
  buttonHref,
  projectType,
  showBenefitsAlert,
}) => {
  const handleClick = () => {
    showBenefitsAlert(projectType);
  };

  return (
    <div className="w-full px-4 md:w-1/2 xl:w-1/3">
      <div className="relative mb-12">
        <div className="overflow-hidden rounded-[10px] w-full h-[36rem]">
          <img
            src={ImageHref}
            alt="portfolio"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
          <h3 className="text-dark text-black mb-5 text-xl font-bold">
            {title}
          </h3>
          <a
                 onClick={handleClick}
            href={buttonHref}
            className="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
          >
            {button}
          </a>
    
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
