import { useState } from 'react';
import Header from '../shared/Header';
import SideBar from '../shared/SideBar';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <div className="flex h-screen bg-slate-400 dark:bg-slate-950">
      <SideBar open={open} setOpen={setOpen} />
      <div className="flex-1">
        <Header />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default RootLayout;
