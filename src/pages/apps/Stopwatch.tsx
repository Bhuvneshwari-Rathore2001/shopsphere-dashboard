import { useEffect, useState } from 'react';
import AdminSidebar from '../../components/AdminSidebar';

const formatTime = (timeInSeconds: number) => {
  const hours = String(Math.floor(timeInSeconds / 3600));
  const minutes = String(Math.floor((timeInSeconds % 3600) / 60));
  const seconds = String(timeInSeconds % 60);

  const hoursInString = hours.toString().padStart(2, '0');
  const minutesInString = minutes.toString().padStart(2, '0');
  const secondsInString = seconds.toString().padStart(2, '0');

  return `${hoursInString} : ${minutesInString} :${secondsInString}`;
};

const Stopwatch = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const resetHandler = () => {
    setTime(0);
    setIsRunning(false);
  };

  useEffect(() => {
    let intervalID: number;
    if (isRunning)
      intervalID = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, [isRunning]);

  return (
    <div>
      <div className='flex'>
        {/* Sidebar */}
        <div className='py-10 w-3/12 px-10 '>
          <AdminSidebar />
        </div>
        {/* Main */}
        <main className='w-full bg-gray-100 '>
          <div className='uppercase text-gray-700 tracking-[2px] text-2xl mt-20 ml-10'>
            Stop Watch
          </div>
          <div className='w-full flex justify-center mt-40'>
            <div className=' bg-white py-8 px-16 flex flex-col items-center justify-between rounded-3xl'>
              <h2 className='font-light text-3xl text-center'>
                {formatTime(time)}
              </h2>
              <div className='flex'>
                <button
                  className='px-8 py-3 border-none cursor-pointer text-white m-8 font-bold rounded-xl bg-blue-900'
                  onClick={() => setIsRunning((prev) => !prev)}
                >
                  {isRunning ? 'Stop' : 'Start'}
                </button>
                <button
                  className='px-8 py-3 border-none cursor-pointer text-white m-8 font-bold rounded-xl bg-red-700'
                  onClick={resetHandler}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Stopwatch;
