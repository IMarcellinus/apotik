import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import { isValidPath } from "../../../utils/isValidPath";

const NavigationSidebar = ({
  icon,
  title,
  path,
  children,
  base,
  isWide,
}) => {
  const { pathname } = useLocation();
  const pathValid = isValidPath(children?.map((c) => c.path), pathname);
  const [open, setOpen] = React.useState(pathValid);
  console.log(pathValid)
  const handleClickWindow = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };
  const handleNavigation = (e) => {
    e.stopPropagation();
  };
  React.useEffect(() => {
    if (open) {
      window.addEventListener("click", handleClickWindow);
    }

    return () => {
      if (open) {
        setOpen(false);
      }
      window.removeEventListener("click", handleClickWindow);
    };
  }, [open]);

  if (!children) {
    return (
      <NavLink
        to={path}
        className={({ isActive }) =>
          `${isActive ? "bg-slate-500" : "bg-slate-900"} ${
            !isWide && "justify-center"
          } flex items-center rounded-md p-2 text-white`
        }
      >
        <div className="flex items-center gap-x-4">
          <div>{icon}</div>
          {isWide && <div>{title}</div>}
        </div>
      </NavLink>
    );
  }

  return (
    <div
      className={`${isWide && (open ? "max-h-[133px]" : "max-h-[41px]")} ${
        isWide ? "overflow-hidden" : ""
      } rounded-md transition-all duration-1000 relative cursor-default text-white`}
    >
      <div
        className={`${pathValid ? "bg-slate-500" : "bg-slate-900"} ${
          isWide ? "justify-between" : "justify-center"
        } ${isWide ? "rounded-t-md" : "rounded-md"} p-2 flex items-center`}
        onClick={base ? handleClickWindow : undefined}
      >
        <div className="flex items-center gap-x-4">
          <div>{icon}</div>
          {isWide && <div>{title}</div>}
        </div>
        {children && isWide && (
          <div>{open ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
        )}
      </div>
      <div
        className={`${
          !isWide &&
          "absolute bg-slate-900 rounded-md p-1 flex flex-col gap-y-1"
        } ${!isWide && (!open ? "hidden" : "-right-[124px] top-0")} ${isWide && "p-1 flex flex-col gap-y-1 bg-slate-900"}`}
      >
        {children.map((item) => (
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `${
                isActive ? "bg-slate-500" : "bg-slate-900"
              } flex items-center p-2 rounded-md`
            }
            onClick={handleNavigation}
          >
            <div className="flex items-center gap-x-4">
              <div className="text-white">{item.title}</div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default NavigationSidebar;
