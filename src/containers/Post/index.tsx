import { marked } from 'marked';
import { Footer } from '../../components/Footer';
import { Heading } from '../../components/Headding';
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
        <Heading>{post.attributes.title}</Heading>
        <div
          dangerouslySetInnerHTML={{ __html: marked(post.attributes.content) }}
        ></div>
      </MainContainer>

      <Footer />
    </>
  );
};
