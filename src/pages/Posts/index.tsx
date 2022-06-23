import Loader from "@components/Loader";
import Post from "@components/Post";
import { hooks as postsHooks } from "@domains/posts";

const Posts = () => {
  const { data, isLoading } = postsHooks.useGetPosts("");
  if (isLoading) return <Loader />;
  return (
    <div>
      {data?.map((post) => (
        <Post key={post.id} title={post.title} description={post.body} />
      ))}
    </div>
  );
};

export default Posts;
