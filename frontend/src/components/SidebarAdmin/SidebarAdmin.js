import { useState } from "react";
import { MdOutlineCloseFullscreen, MdOutlineOpenInFull } from "react-icons/md";
import { AiFillAlert } from "react-icons/ai";
import NavigationSidebar from "./NavigationSidebar/NavigationSidebar";

const Sidebar = ({ isWide, setIsWide }) => {
  const routes = [
    {
      title: "Obat",
      icon: <AiFillAlert size={isWide ? 25 : 40} />,
      base: "admin",
      children: [
        {
          title: "Produk Obat",
          path: "/admin/obat",
        },
        {
          title: "Kategori Obat",
          path: "/admin/kategori-obat",
        },
      ],
    },
    {
      title: "Pemesanan",
      icon: <AiFillAlert size={isWide ? 25 : 40} />,
      path: "/admin/pemesanan",
    },
    {
      title: "Supplier",
      icon: <AiFillAlert size={isWide ? 25 : 40} />,
      path: "/admin/supplier",
    },
  ];
  return (
    <aside>
      <div
        className="bg-sky-600 h-full rounded-lg text-white transition-all duration-1000"
        style={{
          width: isWide ? "300px" : "70px",
          padding: isWide ? "12px" : "8px",
        }}
      >
        <div className="sticky z-[2] top-0 flex flex-col gap-4">
          <div className="flex">
            <button
              className={`${isWide ? "ml-auto" : "mx-auto"}`}
              onClick={() => setIsWide(!isWide)}
            >
              {!isWide ? (
                <MdOutlineOpenInFull size={30} />
              ) : (
                <MdOutlineCloseFullscreen size={30} />
              )}
            </button>
          </div>
          <div className="flex flex-col gap-1">
            {routes.map((route, index) => (
              <NavigationSidebar
                key={index}
                title={route.title}
                icon={route.icon}
                path={route.path}
                children={route.children}
                base={route.base}
                isWide={isWide}
              />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
