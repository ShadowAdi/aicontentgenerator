"use client";
import Logo from "@/components/Logo";
import {
  CardStackPlusIcon,
  MagicWandIcon,
  TimerIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const menuList = [
  {
    name: "Content Generators",
    icon: MagicWandIcon,
    path: "/dashboard",
  },
  {
    name: "History",
    icon: TimerIcon,
    path: "/dashboard/history",
  },
  {
    name: "Upgrade",
    icon: CardStackPlusIcon,
    path: "/dashboard/upgrade",
  },
];


const Sidebar = () => {
  const path = usePathname();
  return (
    <div className="p-5 bg-primary text-primary-foreground h-[800px] flex flex-col">
      <Logo />
      <div className="mt-10 h-max flex flex-col justify-between">
        {menuList.map((menu, i) => {
          return (
            <Link
              key={i}
              href={menu.path}
              className={`flex gap-2 mb-2 p-3 ${
                menu.path === path
                  ? "bg-primary-foreground text-primary"
                  : ""
              } hover:bg-primary-foreground hover:text-primary cursor-pointer items-center rounded-lg`}
            >
              <menu.icon className="h-6 w-6" />
              <h2 className="text-lg">{menu.name}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
