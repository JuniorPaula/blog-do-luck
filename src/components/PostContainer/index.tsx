import { marked } from 'marked';
import { Container } from './styled';

export type PostContainerProps = {
  content: string;
};

export const PostContainer = ({ content }: PostContainerProps) => {
  return (
    <Container
      dangerouslySetInnerHTML={{ __html: marked(content) }}
    ></Container>
  );
};
