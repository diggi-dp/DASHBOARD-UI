import { AiFillHome, AiOutlineSchedule } from 'react-icons/ai';
import { IoWalletOutline } from 'react-icons/io5';
import { HiOutlineUsers } from 'react-icons/hi';
import { MdOutlineAnalytics } from 'react-icons/md';
import { CiBellOn, CiMail, CiSettings } from 'react-icons/ci';

interface MenuItem {
  icon: React.ComponentType;
  label: string;
  href: string;
  className?: string;
}

interface actionItems {
  icon: React.ComponentType;
  label: string;
  className?: string;
}
export const menuItems: MenuItem[] = [
  { icon: AiFillHome, label: 'Dashboard', href: '/dashboard' },
  { icon: MdOutlineAnalytics, label: 'Analytics', href: '/analytics' },
  { icon: AiOutlineSchedule, label: 'Orders', href: '/orders' },
  { icon: IoWalletOutline, label: 'Transactions', href: '/transactions' },
  { icon: HiOutlineUsers, label: 'Customers', href: '/customers' },
];

export const actionItems: actionItems[] = [
  { label: 'Mail', icon: CiMail },
  { label: 'Settings', icon: CiSettings },
  { label: 'Notifications', icon: CiBellOn },
];
