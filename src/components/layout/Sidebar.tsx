import { useState } from "react";
import { HomeIcon, UserIcon, Cog6ToothIcon, ArrowLeftStartOnRectangleIcon,ArrowRightStartOnRectangleIcon} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className={`bg-gray-900 text-white ${isOpen ? "w-48" : "w-20"} min-h-screen transition-all`}>
      <button onClick={() => setIsOpen(!isOpen)} className="p-3 text-white">
        {isOpen ? <ArrowLeftStartOnRectangleIcon className='w-6 h-6' /> :  <ArrowRightStartOnRectangleIcon className='w-6 h-6' />}
      </button>
      <nav className="p-4">
        <ul className="space-y-2">
          <li className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer">
            <HomeIcon className="w-6 h-6" />
            {isOpen && <span className="ml-3">Dashboard</span>}
          </li>
          <li className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer">
            <UserIcon className="w-6 h-6" />
            {isOpen && <span className="ml-3">Users</span>}
          </li>
          <li className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer">
            <Cog6ToothIcon className="w-6 h-6" />
            {isOpen && <span className="ml-3">Settings</span>}
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
