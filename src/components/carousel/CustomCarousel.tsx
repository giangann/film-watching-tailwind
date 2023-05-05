import { useState } from 'react';

type CustomCarouselProps = {
  listItems: React.ReactNode[];
};
export const CustomCarousel = (props: CustomCarouselProps) => {
  const { listItems } = props;
  const [firstItem, setFirstItem] = useState(0);

  const handlePrev = () => {
    const oSlider = document.getElementById('slider');

    if (oSlider && firstItem > 0) {
      oSlider.style.transform = `translateX(${-100 * (firstItem - 1)}px)`;
      setFirstItem(firstItem - 1);
    }
  };

  const handleNext = () => {
    const oSlider = document.getElementById('slider');

    if (oSlider && firstItem <= listItems.length - 3) {
      oSlider.style.transform = `translateX(${-100 * (firstItem + 1)}px)`;
      setFirstItem(firstItem + 1);
    }
  };
  return (
    <div className="max-w-full relative overflow-hidden">
      <button
        onClick={handlePrev}
        className="absolute translate-y-[-50%] left-0 top-[50%] px-4 z-10"
      >
        <p className="m-0 text-xs">prev</p>
      </button>
      <div id="slider" className="flex flex-row transition-all duration-500">
        {listItems.map((item) => item)}
      </div>
      <button
        onClick={handleNext}
        className="absolute translate-y-[-50%] top-[50%] px-4 right-0 z-10"
      >
        <p className="m-0 text-xs">next</p>
      </button>
    </div>
  );
};
