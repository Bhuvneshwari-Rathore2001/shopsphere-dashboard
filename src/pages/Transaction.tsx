import AdminSidebar from "../components/AdminSidebar";

const Transaction = () => {
  return (
    <div className=''>
      <div className='flex h-screen '>
        {/* Sidebar */}
        <div className='py-10 w-3/12 shadow-gray-200 shadow-lg px-10'>
          <AdminSidebar />
        </div>
        {/* Main */}
        <main className='w-full py-10 px-10 overflow-y-auto bg-gray-100'>
          hihiihihh
        </main>
      </div>
    </div>
  );
}

export default Transaction