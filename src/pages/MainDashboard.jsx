import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/sidebar";
//   IconBrandTabler,
import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { VscAccount, VscDashboard } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import logoS from "../assets/Logo/Logo-Small-Light.png";
import { useSelector } from "react-redux";
import { ACCOUNT_TYPE } from "../helper/constant";
import { RiFolderAddLine } from "react-icons/ri";

export default function MainDashboard() {
  // fetch from store
  const { user } = useSelector((state) => state.profile);
  const { image } = useSelector((state) => state.profile);

  // sidebar data
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard/blogger",
      icon: (
        <VscDashboard className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      type: ACCOUNT_TYPE.BLOGGER,
    },
    {
      label: "My Profile",
      href: "/dashboard/my-profile",
      icon: (
        <VscAccount className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Add Blog",
      href: "/dashboard/add-blog",
      icon: (
        <RiFolderAddLine className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      type: ACCOUNT_TYPE.BLOGGER,
    },
    {
      label: "Settings",
      href: "/dashboard/settings",
      icon: (
        <IoSettingsOutline className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "/dashboard/logout",
      icon: (
        <BiLogOut className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  // state
  const [open, setOpen] = useState(false);


  return (
    <div
      className={cn(
        "rounded-md md:flex md:flex-row bg-gray-100 dark:bg-neutral-800 text-white w-[100%] mx-auto border-[0px] border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "min-h-[calc(100vh-3.5rem)]"
      )}
    >
      {/* sidebar */}
      <Sidebar open={open} setOpen={setOpen} className="">
        <SidebarBody className="">
          {/* top and mid sidebar */}
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => {
                if (link.type && user?.accountType !== link.type) return null;
                return (
                  <SidebarLink key={idx} link={link} iconname={link.icon} />
                );
              })}
            </div>
          </div>
          {/* bottom sidebar -> profile */}
          <div className="mt-4 flex flex-col gap-2">
            <SidebarLink
              link={{
                label: `${user?.name}`,
                href: "#",
                icon: (
                  <img
                    src={image}
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      
      {/* outlet for nested route content */}
      <div className={`min-h-[calc(100vh-3.5rem)] flex-1 overflow-auto border-l-[0.5px] border-richblack-100 rounded-lg ${open ? "w-0" : ""}`}>
        <div className="mx-auto w-full max-w-[1000px] py-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}


// logo animation effect
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 mt-4 relative z-20"
    >
      <img className="h-6 w-6" src={logoS} />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        StudyNotion
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 mt-4 relative z-20"
    >
      <img className="h-6 w-6" src={logoS} />
    </Link>
  );
};

