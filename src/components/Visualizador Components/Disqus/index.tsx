import { DiscussionEmbed } from "disqus-react";
import { Container } from "./styles";

interface PostProps {
  url?: string;
  title: string;
  id?: string;
}

const DisqusComments = ({ title }: PostProps) => {
  const disqusShortname = "animesroom";
  const disqusConfig = {
    title: title, // Single post title
    language: "pt_BR",
  };
  return (
    <Container>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </Container>
  );
};
export { DisqusComments };
