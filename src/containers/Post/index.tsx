import { marked } from 'marked';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { PostData } from '../../domain/posts/post';

export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps) => {
  return (
    <>
      <Header />

      <MainContainer>
        <h2>{post.attributes.title}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: marked(post.attributes.content) }}
        ></div>
      </MainContainer>

      <Footer />
    </>
  );
};
