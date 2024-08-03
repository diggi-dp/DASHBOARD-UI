import { GiEmptyWoodBucketHandle, GiDeliveryDrone, GiCancel } from 'react-icons/gi';
import { FaDollarSign } from 'react-icons/fa';
import Card from './components/Card';
import NetProfitCard from './components/NetProfitCard';

const cardsData = [
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

const netProfitData = {
  description: 'Net Profit',
  value: 5000,
  percentage: 10.5,
  isProfit: true,
  icon: FaDollarSign,
  iconColor: 'text-purple-500',
  iconWrapperColor: 'bg-purple-500 bg-opacity-20',
};

const DashboardPage = () => {
  return (
    <div className="px-4">
      <h2 className="mb-4 text-2xl font-semibold">Dashboard</h2>
      <div className="flex flex-wrap justify-between gap-4 lg:flex-nowrap">
        <div className="grid w-full flex-grow grid-cols-1 gap-2 sm:grid-cols-2 lg:w-3/5 lg:grid-cols-2 xl:grid-cols-4">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              description={card.description}
              value={card.value}
              percentage={card.percentage}
              isProfit={card.isProfit}
              icon={card.icon}
              iconColor={card.iconColor}
              iconWrapperColor={card.iconWrapperColor}
            />
          ))}
        </div>
        <div className="w-full lg:w-2/5">
          <NetProfitCard
            description={netProfitData.description}
            value={netProfitData.value}
            percentage={netProfitData.percentage}
            isProfit={netProfitData.isProfit}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
