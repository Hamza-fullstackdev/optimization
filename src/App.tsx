import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from './handlers/api';
import Loading from './shared/Loading';
import Error from './shared/Error';
import Posts from './components/Posts';
import Scroller from './components/Scroller';

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
          <h2 className="mb-4 font-semibold text-lg uppercase">
            5 Million Posts
          </h2>
          <Scroller />
          <h2 className="mt-4 mb-4 font-semibold text-lg uppercase">Posts</h2>
          <Posts PostsData={data} />
        </section>
      </main>
    </>
  );
}

export default App;
