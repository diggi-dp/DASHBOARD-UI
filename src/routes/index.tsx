import NotFound from '@/pages/not-found';
import { Suspense, lazy } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
const RootLayout = lazy(() => import('@/components/layout/RootLayout'));
const DashboardPage = lazy(() => import('@/pages/dashboard'));
const AnalyticsPage = lazy(() => import('@/pages/analytics'));
const OrdersPage = lazy(() => import('@/pages/orders'));
const TransactionsPage = lazy(() => import('@/pages/transactions'));
const CustomersPage = lazy(() => import('@/pages/customers'));

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <RootLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </RootLayout>
      ),
      loader: () => <div>Loader...</div>,
      children: [
        {
          element: <DashboardPage />,
          index: true,
          path: '/dashboard',
        },
        {
          path: '/analytics',
          element: <AnalyticsPage />,
        },
        {
          path: '/orders',
          element: <OrdersPage />,
        },
        {
          path: '/transactions',
          element: <TransactionsPage />,
        },
        {
          path: '/customers',
          element: <CustomersPage />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
