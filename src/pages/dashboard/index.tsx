import Card from './components/Card';
import NetProfitCard from './components/NetProfitCard';
import DashboardBarChart from '@/pages/dashboard/components/BarChart';
import IconWrapper from '@/components/shared/IconWrapper';
import { MdKeyboardArrowRight } from 'react-icons/md';
import OrderTable from './components/Table';
import FeedbackCard from './components/FeedbackCard';
import { cardsData, customerReviews, MainCourseSections, netProfitData } from '@/lib/constants';

const DashboardPage = () => {
  return (
    <div className="px-4">
      <h2 className="mb-4 text-2xl font-semibold">Dashboard</h2>
      <div className="flex flex-col gap-4">
        {/* cards  */}
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
              goalPercentage={netProfitData.goalPercentage}
              isProfit={netProfitData.isProfit}
            />
          </div>
        </div>

        {/* chart and menus */}
        <div className="flex flex-wrap justify-between gap-4 lg:flex-nowrap">
          <div className="grid w-full flex-grow rounded-sm p-4 dark:bg-slate-800 lg:w-3/5">
            <DashboardBarChart />
          </div>
          <div className="flex w-full flex-col items-start gap-4 rounded-sm p-4 dark:bg-slate-800 lg:w-2/5">
            {MainCourseSections.map((item, i) => {
              return (
                <div key={i} className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-4">
                    <IconWrapper
                      icon={item.icon}
                      className={`h-14 w-14 ${item.iconWrapperColor} flex items-center justify-center rounded-full`}
                      iconClasses={`text-2xl ${item.iconColor}`}
                    />
                    <p className="text-lg">{item.title}</p>
                  </div>
                  <IconWrapper
                    icon={MdKeyboardArrowRight}
                    className={`flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-slate-500`}
                    iconClasses={`text-xl`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* orders and feedback */}
        <div className="flex flex-wrap justify-between gap-4 lg:flex-nowrap">
          <div className="grid w-full flex-grow rounded-sm p-4 dark:bg-slate-800 lg:w-3/5">
            <h3 className="mb-2 text-xl font-semibold tracking-wider">Recent Orders</h3>
            <div className="max-h-[400px] overflow-y-auto">
              <OrderTable />
            </div>
          </div>
          <div className="w-full rounded-sm p-4 dark:bg-slate-800 lg:w-2/5">
            <h3 className="mb-2 text-xl font-semibold tracking-wider">Customers Feedback</h3>
            <div className="max-h-[400px] overflow-y-auto">
              {customerReviews.map((review, i) => (
                <div key={i}>
                  <FeedbackCard review={review} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
