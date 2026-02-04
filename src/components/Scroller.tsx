import { List } from 'react-window';

const Scroller = () => {
  return (
    <List
      rowComponent={RowComponent}
      rowCount={5000000}
      rowHeight={35}
      rowProps={{
        data: Array.from({ length: 5000000 }, (_, i) => `POST ${i + 1}`),
      }}
      style={{
        maxHeight: 300,
      }}
    />
  );
};

function RowComponent({
  index,
  data,
  style,
}: {
  index: number;
  data: string[];
  style: React.CSSProperties;
}) {
  return (
    <div
      className="flex justify-between items-center bg-gray-100 my-2 p-3"
      style={style}
    >
      {data[index]}
      <div className="text-slate-500 text-xs">{`${index + 1} of ${data.length}`}</div>
    </div>
  );
}

export default Scroller;
