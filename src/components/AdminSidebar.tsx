import { IconType } from 'react-icons';
import { AiFillFileText } from 'react-icons/ai';
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad, FaStopwatch } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import { RiCoupon3Fill, RiDashboardFill, RiShoppingBag2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  interface LiProps {
    url: string;
    text: string;
    Icon: IconType;
    location: Location;
  }

  const Li = ({ url, text, Icon, location }: LiProps) => (
    <li
      style={{
        backgroundColor: location.pathname.includes(url)
          ? 'rgba(0,115,255,0.1)'
          : 'white',
      }}
    >
      <Link
        to={url}
        className='flex items-center gap-2 ml-12 py-1'
        style={{
          color: location.pathname.includes(url)
            ? 'rgb(0,115,255)'
            : 'rgb(31, 41, 55)',
        }}
      >
        <Icon />
        {text}
      </Link>
    </li>
  );

  return (
    <aside className='w-full'>
      <div className='text-3xl text-blue-900 mb-10 w-full'>ShopSphere</div>
      <div className='w-full'>
        <h2 className='mb-5 text-gray-500'>DASHBOARD</h2>
        <ul className='flex flex-col gap-2 w-full'>
          <Li
            url='/admin/dashboard'
            text='Dashboard'
            Icon={RiDashboardFill}
            location={location}
          />

          <Li
            url='/admin/product'
            text='Product'
            Icon={RiShoppingBag2Fill}
            location={location}
          />

          <Li
            url='/admin/customer'
            text='Customer'
            Icon={IoIosPeople}
            location={location}
          />

          <Li
            url='/admin/transaction'
            text='Transaction'
            Icon={AiFillFileText}
            location={location}
          />
        </ul>
      </div>

      <div className='w-full'>
        <h2 className='my-5 text-gray-500'>CHARTS</h2>
        <ul className='flex flex-col gap-2'>
          <Li
            url='/admin/chart/bar'
            text='Bar'
            Icon={FaChartBar}
            location={location}
          />

          <Li
            url='/admin/chart/pie'
            text='Pie'
            Icon={FaChartPie}
            location={location}
          />

          <Li
            url='/admin/chart/line'
            text='Line'
            Icon={FaChartLine}
            location={location}
          />
        </ul>
      </div>

      <div className='w-full'>
        <h2 className='my-5 text-gray-500'>APPS</h2>
        <ul className='flex flex-col gap-2'>
          <Li
            url='/admin/app/stopwatch'
            text='Stopwatch'
            Icon={FaStopwatch}
            location={location}
          />

          <Li
            url='/admin/app/coupon'
            text='Coupon'
            Icon={RiCoupon3Fill}
            location={location}
          />

          <Li
            url='/admin/app/toss'
            text='Toss'
            Icon={FaGamepad}
            location={location}
          />
        </ul>
      </div>
    </aside>
  );
};

export default AdminSidebar;
