import { BsSearch } from 'react-icons/bs';
import { FaRegBell } from 'react-icons/fa';
import AdminSidebar from '../components/AdminSidebar';
import Inventory from '../components/Inventory';
import RevenueChart from '../components/RevenueChart';
import WidgetItem from '../components/WidgetItem';
import GenderRatio from '../components/GenderRatio';
import TransactionTable from '../components/TransactionTable';

const userImg =
  'https://cdn.vectorstock.com/i/1000v/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg';

const Dashboard = () => {
  return (
    <div className=''>
      <div className='flex h-screen '>
        {/* Sidebar */}
        <div className='py-10 w-3/12 px-10'>
          <AdminSidebar />
        </div>
        {/* Main */}
        <main className='w-full pb-10 px-10 overflow-y-auto bg-gray-100'>
          <div className='flex flex-row border-b-2 border-b-gray-200 justify-between items-center py-2'>
            <div className='flex items-center gap-3 px-4 py-3 w-5/12'>
              <BsSearch />
              <input
                type='text'
                placeholder='Search for data, users, docs'
                className='w-2/5 focus:w-full text-gray-700 bg-gray-50 focus:outline-gray-300 rounded-md outline-gray-300 outline outline-1 py-1 px-2 focus:bg-white'
              />
            </div>
            <div className='flex items-center gap-5 px-4 py-3'>
              <FaRegBell />
              <img src={userImg} alt='User' className='h-7 w-7' />
            </div>
          </div>

          <div className='my-10 flex justify-between gap-14'>
            <WidgetItem
              heading='Revenue'
              value={340000}
              percent={40}
              color='rgb(0,155,255)'
              amount={true}
            />
            <WidgetItem
              heading='Users'
              value={400}
              percent={-14}
              color='rgb(0,198,202)'
              amount={false}
            />
            <WidgetItem
              heading='Transactions'
              value={23000}
              percent={80}
              color='rgb(255,196,0)'
              amount={true}
            />
            <WidgetItem
              heading='Products'
              value={1000}
              percent={30}
              color='rgb(75,0,255)'
              amount={true}
            />
          </div>

          <div className='flex gap-10 h-3/4'>
            <RevenueChart />
            <Inventory />
          </div>

          <div className='mt-10 h-2/4 flex gap-10'>
          <GenderRatio/>
          <TransactionTable/>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
