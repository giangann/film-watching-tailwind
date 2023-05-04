import { bgColor } from '../../colors';

export const Banner = () => {
  const imageArr = [1, 2, 3, 4, 5, 6, 7, 8].map(
    (index) => `banner-gallery-item-${index}.jpg`,
  );

  const bannerSlideFilm = [
    {
      id: 1,
      name: 'America Made',
      desc: '2017 | Comedy | 1hr 55 mins',
      image:'banner-gallery-item-1.jpg'
    },
    {
      id: 2,
      name: 'The Convenient Groom',
      desc: '2016 | Action, Adventure, Romance | 1hr 24 mins',
      image:'banner-gallery-item-2.jpg'
    },
    {
      id: 3,
      name: 'Black Mirror',
      desc: '2017 | Comedy | 1hr 55 mins',
      image:'banner-gallery-item-3.jpg'
    },
    {
      id: 4,
      name: 'Paradigm Lost',
      desc: '2017 | Comedy | 1hr 55 mins',
      image:'banner-gallery-item-4.jpg'
    },
    {
      id: 5,
      name: 'Fantastic Beasts and Where to Find Them',
      desc: '2017 | Comedy | 1hr 55 mins',
      image:'banner-gallery-item-5.jpg'
    },
    {
      id: 6,
      name: 'Pacific Rim: Uprising',
      desc: '2017 | Comedy | 1hr 55 mins',
      image:'banner-gallery-item-6.jpg'
    },
    {
      id: 7,
      name: 'Film 7',
      desc: '2017 | Comedy | 1hr 55 mins',
      image:'banner-gallery-item-7.jpg'
    },
    {
      id: 8,
      name: 'Film 8',
      desc: '2017 | Comedy | 1hr 55 mins',
      image:'banner-gallery-item-8.jpg'
    },
  ];
  return (
    <div
      className="bg-scroll bg-auto h-[676px] flex items-center"
      style={{ backgroundImage: 'url(public/banner.jpg)' }}
    >
      <div className="container grid xl:grid-cols-2">
        {/* left - newest film */}
        <div className="flex flex-col gap-8">
          <div className="text-white font-bold text-7xl">American Made</div>
          <div className="text-white text-sm">2017 | Comedy | 1hr 55 mins</div>
          <div className="flex flex-col md:flex-row gap-3">
            <button className={`bg-[${bgColor['button']}] stroke-none px-8 py-0`}>
              <p className="uppercase text-white text-sm font-semibold">Watch Movie</p>
            </button>
            <button
              className={`bg-transparent border border-solid border-white px-8 py-0`}
            >
              <p className="uppercase text-white text-sm font-semibold">+ Playlist</p>
            </button>
          </div>
        </div>

        {/* right - todays recomend */}
        <div>
          <p className="uppercase text-white text-sm font-semibold">
            Todays Recomendation
          </p>
          {/* <div className="grid md:grid-cols-4 xl:grid-cols-3 gap-2">
            {imageArr.map((img, index) => (
              <img src={img} />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};
