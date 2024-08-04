import { useState } from 'react';
import Header from '../shared/Header';
import SideBar from '../shared/SideBar';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <div className="flex h-screen bg-slate-400 dark:bg-slate-950">
      <SideBar open={open} setOpen={setOpen} />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
};

export default RootLayout;
