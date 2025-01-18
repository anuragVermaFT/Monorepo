import {
  ChevronsLeft,
  ChevronsRight,
  CircleUserRound,
  HelpCircle,
  Home,
  LucideIcon,
  Mail,
  Settings,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

import { useState } from "react";

interface MenuItem {
  icon: LucideIcon;
  label: string;
}

const SideNavBar = () => {
  const [isShow, setIsShow] = useState(false);
  const [selected, setSelected] = useState("Home");

  const menuItems: MenuItem[] = [
    { icon: Home, label: "Home" },
    { icon: Users, label: "Users" },
    { icon: Mail, label: "Messages" },
    { icon: Settings, label: "Settings" },
    { icon: HelpCircle, label: "Help" },
  ];

  return (
    <motion.div
      className="h-screen bg-white p-2 border border-slate-300 sticky top-0"
      animate={{ width: isShow ? "16rem" : "4rem" }}
      initial={false}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      <div className="mb-3 border-b border-slate-300 p-2">
        <div
          className="flex cursor-pointer items-center justify-between rounded-md "
          onClick={() => setIsShow(!isShow)}
        >
          <div className="flex items-center gap-2">
            <div className="rounded-md  text-white -ml-1 w-8 h-8">
              <img src="./public/boy.png" alt="Avatar" />
            </div>
            {isShow && (
              <motion.div
                layout
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.125 }}
              >
                <span className="block text-xs font-semibold">
                  Anurag Verma
                </span>
                <span className="block text-xs text-slate-500">
                  Vermaanug1974@gmail.com
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-1">
        {menuItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              layout
              onClick={() => setSelected(item.label)}
              className={`relative flex h-10 w-full items-center rounded-md transition-colors ${
                selected === item.label
                  ? "bg-indigo-100 text-indigo-800"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <motion.div layout className="p-2">
                <Icon size={24} />
              </motion.div>
              {isShow && (
                <motion.span
                  layout
                  initial={{ opacity: 0, y: 36 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.125 }}
                  className="text-xs font-medium"
                >
                  {item.label}
                </motion.span>
              )}
            </motion.div>
          );
        })}
      </div>

      <motion.button
        layout
        onClick={() => setIsShow((prev) => !prev)}
        className="absolute bottom-0 left-0 right-0 border-t border-slate-300 transition-colors hover:bg-slate-100"
      >
        <div className="flex items-center p-2">
          <motion.div
            layout
            className="grid size-10 place-content-center text-lg"
          >
            {isShow ? <ChevronsLeft /> : <ChevronsRight />}
          </motion.div>
          {isShow && (
            <motion.span
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
              className="text-xs font-medium"
            >
              Hide
            </motion.span>
          )}
        </div>
      </motion.button>
    </motion.div>
  );
};

export default SideNavBar;
