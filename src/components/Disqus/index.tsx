import { DiscussionEmbed } from "disqus-react";

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
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};
export { DisqusComments };
