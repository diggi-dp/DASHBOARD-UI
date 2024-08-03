import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { menuItems } from '@/lib/constants';
import { IoMdLogOut } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';

const SideBar = ({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) => {
  const location = useLocation();

  return (
    <div
      className={`${open ? 'w-64' : 'w-18'} hidden h-screen flex-col items-start gap-10 bg-slate-100 p-4 pl-4 duration-300 dark:bg-slate-800 md:flex`}
    >
      <div className={`flex w-full items-center justify-between ${open && 'px-4'}`}>
        <h2 className={`text-lg font-bold ${!open && 'hidden'}`}>LOGO</h2>
        <MdKeyboardDoubleArrowLeft
          className={`top-4 cursor-pointer rounded-full text-3xl text-white ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className={`flex flex-1 flex-col gap-2 ${open && 'px-4'}`}>
        {menuItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <Link
              key={index}
              to={item.href}
              className={`mt-2 flex items-center py-2 text-gray-100 ${
                location.pathname === item.href || (location.pathname === '/' && item.href === '/dashboard') ? 'text-blue-500' : 'hover:text-blue-500'
              } rounded-2xl ${item.className || ''}`}
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <IconComponent className="text-2xl" />
                  </TooltipTrigger>
                  <TooltipContent side={item.label === 'Logout' ? 'top' : 'bottom'} sideOffset={4}>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <span className={`ml-4 ${!open && 'hidden'}`}>{item.label}</span>
            </Link>
          );
        })}

        <div className="mt-auto">
          <Link to="/logout" className="mt-2 flex items-center rounded-2xl py-2 text-gray-100 hover:text-blue-500">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <IoMdLogOut className="text-2xl" />
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>Logout</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <span className={`ml-4 ${!open && 'hidden'}`}>Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
