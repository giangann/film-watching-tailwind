type EmblaThumbProps = {
  onClick: () => void;
  selected: boolean;
  index: number;
  imgSrc: string;
};

export const EmblaThumb = (props: EmblaThumbProps) => {
  const { onClick, selected, index, imgSrc } = props;
  return (
    <div
      className={'embla-thumbs__slide'.concat(
        true ? ' embla-thumbs__slide--selected' : '',
      )}
    >
      <button onClick={onClick} className="embla-thumbs__slide__button" type="button">
        <div className="embla-thumbs__slide__number">
          <span>{index + 1}</span>
        </div>
        <img className="embla-thumbs__slide__img" src={imgSrc} alt="Your alt text" />
      </button>
    </div>
  );
};
