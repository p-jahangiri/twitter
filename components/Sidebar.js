import Image from "next/image";
import SidebarLink from "./SidebarLink";

import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";

const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2SzMHJWwR3AXGGGYubOdd_aAgkSxUv6JyJA&usqp=CAU"
          width={30}
          height={30}
        />
      </div>
      <div className="space-y-2.5 mt-3 mb-2.5 xl:ml-24 ">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardListIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      <button
        className="hidden xl:inline ml-auto bg-[#1d9df0] text-white rounded-full w-56 h-[52px] text-lg font-bold 
      shadow-md hover:bg-[#1a8cd8] "
      >
        Tweet
      </button>
      <div className="text-[#d9d9d9] flex items-center justify-center hoverAnimation xl:ml-auto xl:mr-5 mt-auto">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2SzMHJWwR3AXGGGYubOdd_aAgkSxUv6JyJA&usqp=CAU"
          alt="user"
          className="h-10 w-10 rounded-full xl:mr-2.5 "
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">firebase 1854</h4>
          <p className="text-[#6e767d]">@fairbase5451</p>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  );
};

export default Sidebar;
