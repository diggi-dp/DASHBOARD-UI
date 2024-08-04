import { AiFillHome, AiOutlineSchedule } from 'react-icons/ai';
import { IoWalletOutline } from 'react-icons/io5';
import { HiOutlineUsers } from 'react-icons/hi';
import { MdFastfood, MdOutlineAnalytics } from 'react-icons/md';
import { CiBellOn, CiMail, CiSettings } from 'react-icons/ci';
import { GiCancel, GiDeliveryDrone, GiEmptyWoodBucketHandle, GiTargeting } from 'react-icons/gi';
import { PiHamburger } from 'react-icons/pi';
import { CgCap } from 'react-icons/cg';
import { FaDollarSign, FaUtensils } from 'react-icons/fa';

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

export const cardsData = [
  {
    description: 'Total Orders',
    value: 12,
    percentage: 12.4,
    isProfit: true,
    icon: GiEmptyWoodBucketHandle,
    iconColor: 'text-blue-500',
    iconWrapperColor: 'bg-blue-500 bg-opacity-20',
  },
  {
    description: 'Total Delivered',
    value: 340,
    percentage: 5.0,
    isProfit: true,
    icon: GiDeliveryDrone,
    iconColor: 'text-yellow-500',
    iconWrapperColor: 'bg-yellow-500 bg-opacity-20',
  },
  {
    description: 'Total Cancelled',
    value: 24,
    percentage: 2.1,
    isProfit: false,
    icon: GiCancel,
    iconColor: 'text-red-500',
    iconWrapperColor: 'bg-red-500 bg-opacity-20',
  },
  {
    description: 'Total Revenue',
    value: '$50k',
    percentage: 8.2,
    isProfit: true,
    icon: FaDollarSign,
    iconColor: 'text-green-500',
    iconWrapperColor: 'bg-green-500 bg-opacity-20',
  },
];

export const MainCourseSections = [
  {
    title: 'Goals',
    icon: GiTargeting,
    iconColor: 'text-red-500',
    iconWrapperColor: 'bg-red-500 bg-opacity-20',
  },
  {
    title: 'Popular Dishes',
    icon: PiHamburger,
    iconColor: 'text-blue-500',
    iconWrapperColor: 'bg-blue-500 bg-opacity-20',
  },
  {
    title: 'Menus',
    icon: CgCap,
    iconColor: 'text-yellow-500',
    iconWrapperColor: 'bg-yellow-500 bg-opacity-20',
  },
  {
    title: 'Specials',
    icon: FaUtensils,
    iconColor: 'text-green-500',
    iconWrapperColor: 'bg-green-500 bg-opacity-20',
  },
  {
    title: 'Fast Food',
    icon: MdFastfood,
    iconColor: 'text-orange-500',
    iconWrapperColor: 'bg-orange-500 bg-opacity-20',
  },
];

export const customerReviews = [
  {
    profileImage: 'https://picsum.photos/200/301',
    customerName: 'Emily R.',
    rating: 4,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
  },
  {
    profileImage: 'https://picsum.photos/200/302',
    customerName: 'David K.',
    rating: 5,
    review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    profileImage: 'https://picsum.photos/200/303',
    customerName: 'Sarah T.',
    rating: 2,
    review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    profileImage: 'https://picsum.photos/200/304',
    customerName: 'James B.',
    rating: 5,
    review: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    profileImage: 'https://picsum.photos/200/305',
    customerName: 'Jessica W.',
    rating: 3,
    review: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
  },
];

export const netProfitData = {
  description: 'Net Profit',
  value: 5000,
  percentage: 10.5,
  goalPercentage: 60,
  isProfit: true,
};
