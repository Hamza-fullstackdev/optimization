import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from './handlers/api';
import Loading from './shared/Loading';
import Error from './shared/Error';

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetchPosts(),
    refetchOnWindowFocus: false,
    staleTime: 5000,
    gcTime: 10000,
    retry: 2,
  });
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <>
      <main>
        <header className="bg-black p-3">
          <h1 className="font-bold text-white text-xl text-center">
            React Query Demonstration and Implementation
          </h1>
        </header>
        <section className="my-8 px-4 md:px-12">
          <div className="gap-5 grid grid-cols-1">
            {data?.map((post: any) => (
              <div
                key={post.id}
                className="shadow-sm mb-4 p-4 border border-gray-300 rounded-lg"
              >
                <h2 className="mb-2 font-semibold text-lg uppercase">
                  {post.title}
                </h2>
                <p className="text-gray-700 uppercase">{post.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
