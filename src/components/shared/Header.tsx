import React, { useState } from 'react';
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';
import { Input } from '../ui/Input';
import { menuItems, actionItems } from '@/lib/constants';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const notificationCount = 5;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <header className="flex h-16 justify-between bg-slate-100 p-4 align-middle text-white dark:bg-slate-800">
      <button onClick={toggleMenu} className="md:hidden">
        {menuOpen ? <IoCloseOutline className="text-3xl font-bold" /> : <IoMenuOutline className="text-3xl font-bold" />}
      </button>

      <div
        className={`${menuOpen ? 'flex' : 'hidden'} text-bold absolute left-0 top-16 w-full flex-1 flex-col gap-3 bg-slate-800 px-4 md:hidden`}
        onClick={toggleMenu}
      >
        {menuItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <Link key={index} to={item.href} className="mt-2 flex items-center rounded-2xl py-2 text-gray-100 hover:text-blue-500">
              <IconComponent className="mr-4 text-xl" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>

      <Input className="hidden max-w-xs dark:bg-slate-700 sm:block" placeholder="search..." />

      <nav>
        <div className="flex items-center gap-3">
          {actionItems.map((item, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger>
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-500 bg-opacity-50">
                    {React.createElement(item.icon, { className: 'text-xl cursor-pointer' })}
                    {item.label === 'Notifications' && notificationCount > 0 && (
                      <span className="absolute right-0 top-0 inline-flex items-center justify-center rounded-full bg-red-600 px-2 py-1 text-xs font-bold leading-none text-red-100">
                        {notificationCount}
                      </span>
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent side="bottom" sideOffset={4}>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}

          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger>
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent side="bottom" sideOffset={4} className="bg-slate-600">
              <div className="flex flex-col">
                <button className="p-2 text-left hover:text-blue-500" onClick={() => handleNavigation('/profile')}>
                  Profile
                </button>
                <button className="p-2 text-left hover:text-blue-500" onClick={() => handleNavigation('/logout')}>
                  Logout
                </button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </nav>
    </header>
  );
};

export default Header;
