import { FC } from "react";

interface Props {
  title: string;
  description: string;
}

const Post: FC<Props> = ({ title, description }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
      }}
    >
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Post;
