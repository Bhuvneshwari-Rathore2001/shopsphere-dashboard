import AdminSidebar from "../../components/AdminSidebar";

const Stopwatch = () => {
  return (
    <div>
      <div className='flex h-screen '>
        {/* Sidebar */}
        <div className='py-10 w-3/12 px-10 '>
          <AdminSidebar />
        </div>
        {/* Main */}
        <main className='w-full py-10 px-10 overflow-y-auto bg-gray-100'>
          <div className='uppercase text-center text-gray-700 font-medium tracking-[4px]'>
            
            Stop Watch
          </div>
          <div></div>
        </main>
      </div>
    </div>
  );
}

export default Stopwatch