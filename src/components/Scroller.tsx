import { Virtuoso } from 'react-virtuoso';

const Scroller = () => {
  return (
    <Virtuoso
      style={{ height: '300px' }}
      totalCount={5000000}
      overscan={200}
      itemContent={(index) => (
        <div className="flex justify-between items-center p-2 border-gray-200 border-b">
          Post #{index + 1}
          <div className="text-slate-500 text-xs">{`${index + 1} of 5000000`}</div>
        </div>
      )}
    />
  );
};

export default Scroller;
