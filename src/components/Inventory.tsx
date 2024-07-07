const Inventory = () => {
  interface InventoryItemProps {
    color: string;
    value: number;
    heading: string;
  }


    const InventoryItemData = [
      {
        value: 40,
        heading: 'Laptops',
      },
      {
        value: 100,
        heading: 'Shoes',
      },
      {
        value: 80,
        heading: 'Cameras',
      },
      {
        value: 60,
        heading: 'Jeans',
      },
      {
        value: 60,
        heading: 'Jeans',
      },
      {
        value: 60,
        heading: 'Jeans',
      },
      {
        value: 60,
        heading: 'Jeans',
      },
      {
        value: 60,
        heading: 'Jeans',
      },
      {
        value: 60,
        heading: 'Jeans',
      },
      {
        value: 60,
        heading: 'Jeans',
      },
      {
        value: 60,
        heading: 'Jeans',
      },
      {
        value: 60,
        heading: 'Jeans',
      },
      {
        value: 60,
        heading: 'Jeans',
      },
      {
        value: 60,
        heading: 'Jeans',
      },
    ];


  const InventoryItem = ({ color, value, heading }: InventoryItemProps) => (
    <div className='flex justify-between items-center px-4 w-full'>
      <h5 className='text-gray-700'>{heading}</h5>
      <div className='bg-gray-300 w-24 rounded-3xl h-2'>
        <div
          style={{ backgroundColor: color, width: `${value}%` }}
          className='h-full w-full rounded-3xl'
        ></div>
      </div>
      <span className='text-sm font-bold text-gray-700'>{value}%</span>
    </div>
  );
  return (
    <div className='bg-white w-2/5 min-w-64 flex flex-col gap-8 py-8 rounded-2xl items-center'>
      <div className='uppercase text-center text-gray-700 font-medium tracking-[4px]'>
        Inventory
      </div>
      <div className='overflow-y-auto px-2 flex flex-col items-center gap-10 w-full '>
        {InventoryItemData.map((i) => (
          <InventoryItem
            key={i.heading}
            color={'hsl(169,100%,50%'}
            value={i.value}
            heading={i.heading}
            color={`hsl(${i.value * 4}169,${i.value}%,50%)`}
          />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
