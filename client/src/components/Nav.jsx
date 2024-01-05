import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";
export const navData = [
  { id: 1, name: "home", path: "/", icon: <HiHome /> },
  { id: 1, name: "about", path: "/about", icon: <HiUser /> },
  { id: 1, name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { id: 1, name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    id: 1,
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  { id: 1, name: "contact", path: "/contact", icon: <HiEnvelope /> },
];
import { Link, useLocation } from "react-router-dom";
export default function Nav() {
  const location = useLocation();
  return (
    <nav className="flex flex-col items-center justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div
        className="flex w-full xl:flex-col items-center justify-between
xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8
bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full"
      >
        {navData.map((link, id) => {
          const isCurrentPath = link.path === location.pathname;
          const textColor = isCurrentPath ? "text-accent" : "text-white";
          return (
            <Link
              key={id}
              className={`${textColor} relative flex items-center group hover:text-accent transition-all duration-300`}
              to={link.path}
            >
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
