import { HeartIcons, Logo, UserIcons } from '../../icons';
export const Header = () => {
  return (
    <div className="bg-white">
      <div className="container flex justify-between items-center py-4 px-2 sm:px-0">
        {/* <div className="ml-10 cursor-pointer">
          <i className="fas fa-drafting-compass fa-2x text-orange-500"></i>
          <span className="ml-1 text-3xl text-blue-200 font-semibold">Vodi</span>
        </div> */}
        <div className='relative top-[-4px]'>
          <Logo />
        </div>

        {/* action icons */}

        <div className="flex flex-row gap-4 mr-4 items-center auto-rows-auto">
          {/* search bar */}
          <input
            placeholder="Search your movie"
            className="p-1 pl-4 border-solid border border-grey-500 rounded-full w-[170px] sm:w-full"
          />

          {/* open watchlist - heart icon */}
          <HeartIcons />

          {/* open user infor + action dropdown - user icon */}
          <UserIcons />
        </div>
      </div>
    </div>
  );
};
