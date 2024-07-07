import { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Loader from './components/Loader';

// imports
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Products = lazy(() => import('./pages/Products'));
const Transaction = lazy(() => import('./pages/Transaction'));
const Customers = lazy(() => import('./pages/Customers'));

// charts imports
const BarCharts = lazy(() => import('./pages/charts/BarCharts'));
const PieCharts = lazy(() => import('./pages/charts/PieCharts'));
const LineCharts = lazy(() => import('./pages/charts/LineCharts'));

// apps imports
const Stopwatch = lazy(() => import('./pages/apps/Stopwatch'));
const Coupon = lazy(() => import('./pages/apps/Coupon'));
const Toss = lazy(() => import('./pages/apps/Toss'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/product' element={<Products />} />
          <Route path='/admin/transaction' element={<Transaction />} />
          <Route path='/admin/customer' element={<Customers />} />

          {/* /Charts */}
          <Route path='/admin/chart/bar' element={<BarCharts />} />
          <Route path='/admin/chart/pie' element={<PieCharts />} />
          <Route path='/admin/chart/line' element={<LineCharts />} />

          {/* Apps */}
          <Route path='/admin/app/stopwatch' element={<Stopwatch />} />
          <Route path='/admin/app/coupon' element={<Coupon />} />
          <Route path='/admin/app/toss' element={<Toss />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
