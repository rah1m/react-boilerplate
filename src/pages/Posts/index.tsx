import Loader from "@components/Loader";
import { hooks as postsHooks } from "@domains/posts";

const Posts = () => {
  const { data, isLoading } = postsHooks.useGetPosts("");
  console.log(data);
  if (isLoading) return <Loader />;
  return <div>Posts</div>;
};

export default Posts;
