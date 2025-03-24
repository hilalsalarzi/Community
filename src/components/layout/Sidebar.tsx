import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  UserIcon,
  Cog6ToothIcon,
  ArrowLeftStartOnRectangleIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <aside
      className={`bg-gray-900 text-white ${
        isOpen ? "w-48" : "w-20"
      } min-h-screen transition-all flex flex-col`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 text-white flex justify-end"
      >
        {isOpen ? (
          <ArrowLeftStartOnRectangleIcon className="w-6 h-6" />
        ) : (
          <ArrowRightStartOnRectangleIcon className="w-6 h-6" />
        )}
      </button>

      {/* Navigation */}
      <nav className="p-4 flex-1">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/admin"
              end // Ensures only `/admin` is active, not `/admin/*`
              className={({ isActive }) =>
                `flex items-center p-2 rounded cursor-pointer ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-700"
                }`
              }
            >
              <HomeIcon className="w-6 h-6" />
              {isOpen && <span className="ml-3">Dashboard</span>}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/users"
              className={({ isActive }) =>
                `flex items-center p-2 rounded cursor-pointer ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-700"
                }`
              }
            >
              <UserIcon className="w-6 h-6" />
              {isOpen && <span className="ml-3">Users</span>}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/settings"
              className={({ isActive }) =>
                `flex items-center p-2 rounded cursor-pointer ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-700"
                }`
              }
            >
              <Cog6ToothIcon className="w-6 h-6" />
              {isOpen && <span className="ml-3">Settings</span>}
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
