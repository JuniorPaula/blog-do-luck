import { marked } from 'marked';
import { Footer } from '../../components/Footer';
import { Heading } from '../../components/Headding';
import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { PostCover } from '../../components/PostCover';
import { PostDetails } from '../../components/PostDetails';
import { URL_API } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';

export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps) => {
  return (
    <>
      <Header />

      <MainContainer>
        <Heading>{post.attributes.title}</Heading>

        <PostCover
          coverUrl={URL_API + post.attributes.cover.data.attributes.url}
          alt={post.attributes.title}
        />

        <PostDetails
          author={post.attributes.author.data.attributes.name}
          category={post.attributes.category.data.attributes.name}
          date={post.attributes.createdAt}
        />

        <div
          dangerouslySetInnerHTML={{ __html: marked(post.attributes.content) }}
        ></div>
      </MainContainer>

      <Footer />
    </>
  );
};
