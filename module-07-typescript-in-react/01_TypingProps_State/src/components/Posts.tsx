import { useEffect, useState } from 'react';
import type { Post } from '../types';

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false); // inferred as boolean
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) throw new Error('fetch failed');

        const data = (await res.json()) as Post[];
        // console.log(data);
        setPosts(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  if (loading) return <p>Loadiog...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
