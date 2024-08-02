import { Suspense, lazy } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
const RootLayout = lazy(() => import('@/components/layout/RootLayout'));
const DashboardPage = lazy(() => import('@/pages/dashboard'));

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
      children: [
        {
          element: <DashboardPage />,
          index: true,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
