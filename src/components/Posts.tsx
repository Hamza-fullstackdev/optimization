import {
  List,
  type RowComponentProps,
  useDynamicRowHeight,
} from 'react-window';

interface PostsProps {
  PostsData: { id: number; title: string; body: string }[];
}

interface PostsData {
  id: number;
  title: string;
  body: string;
}

const Posts = ({ PostsData }: PostsProps) => {
  const rowHeight = useDynamicRowHeight({
    defaultRowHeight: 180,
  });
  return (
    <List
      rowComponent={RowComponent}
      rowCount={PostsData.length}
      rowHeight={rowHeight}
      rowProps={{ data: PostsData }}
      style={{ maxHeight: '100vh' }}
      className="gap-3 grid grid-cols-1"
    />
  );
};

function RowComponent({
  index,
  data,
  style,
}: RowComponentProps<{
  data: PostsData[];
}>) {
  const post = data[index];
  return (
    <div key={post.id}>
      <div
        className="shadow-sm p-4 border border-gray-300 rounded-lg"
        style={style}
      >
        <h2 className="mb-2 font-semibold text-lg uppercase">{post.title}</h2>
        <p className="text-gray-700 uppercase">{post.body}</p>
      </div>
    </div>
  );
}

export default Posts;
