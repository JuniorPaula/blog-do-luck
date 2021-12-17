import { GetStaticPaths, GetStaticProps } from 'next';
import { countAllPosts } from '../../data/posts/count-all-posts';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { getPosts } from '../../data/posts/get-posts';
import { PostData } from '../../domain/posts/post';

import { marked } from 'marked';

export type DynamicPostProps = {
  post: PostData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
  return (
    <>
      <p>{post.attributes.slug}</p>
      <p
        dangerouslySetInnerHTML={{ __html: marked(post.attributes.content) }}
      ></p>
    </>
  );
};

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts();

  const posts = await getAllPosts(
    `pagination[start]=0&pagination[limit]=${numberOfPosts.length}`,
  );

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.attributes.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getPosts(ctx.params.slug);
  return {
    props: { post: posts[0] },
    //revalidate: 10,
  };
};
