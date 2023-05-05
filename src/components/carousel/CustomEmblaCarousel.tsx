// props: Options + Slides
import './embla.css';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { bgColor } from '../../colors';
import { EmblaThumb } from './EmablaThumb';

type EmblaCarouselProps = {
  option?: EmblaOptionsType;
  slides: React.ReactNode[];
};

export const CustomEmblaCarousel = (props: EmblaCarouselProps) => {
  const { option, slides } = props;

  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(option);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // the nature of this function:
  //
  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi],
  );
  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on('select', onSelect);
    emblaMainApi.on('reInit', onSelect);
  }, [emblaMainApi, onSelect]);
  return (
    <div className="embla-banner__slide">
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container">
          {slides.map((slide: any, index) => (
            <div className="embla__slide" key={index}>
              <img
                className="embla__slide__img"
                src={slide.image}
                alt="embla carousel image"
              />
              <div className="absolute top-[50%] translate-y-[-50%]">
                <div className="container grid xl:grid-cols-2">
                  {/* left - newest film */}
                  <div className="flex flex-col gap-8">
                    <div className="text-white font-bold text-7xl">American Made</div>
                    <div className="text-white text-sm">2017 | Comedy | 1hr 55 mins</div>
                    <div className="flex flex-col md:flex-row gap-3">
                      <button
                        className={`bg-[${bgColor['button']}] stroke-none px-8 py-0`}
                      >
                        <p className="uppercase text-white text-sm font-semibold">
                          Watch Movie
                        </p>
                      </button>
                      <button
                        className={`bg-transparent border border-solid border-white px-8 py-0`}
                      >
                        <p className="uppercase text-white text-sm font-semibold">
                          + Playlist
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {slides.map((slide: any, index) => (
              <EmblaThumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                imgSrc={slide.image}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
