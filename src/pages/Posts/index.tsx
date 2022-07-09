import AnimatedWrapper from "@components/AnimatedWrapper/AnimatedWrapper";
import Loader from "@components/Loader";
import Post from "@components/Post";
import { hooks as postsHooks } from "@domains/posts";

const Posts = () => {
  const { data, isLoading } = postsHooks.useGetPosts("");
  if (isLoading) return <Loader />;
  return (
    <AnimatedWrapper>
      {data?.map((post) => (
        <Post key={post.id} title={post.title} description={post.body} />
      ))}
    </AnimatedWrapper>
  );
};

export default Posts;
