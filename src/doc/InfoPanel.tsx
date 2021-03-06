import { dev_yt_link, github_link } from "../links";
import {
  Container,
  GradientTitle,
  Img,
  lines,
  LinkButton,
  MarginDescription,
  Title,
} from "../util/components";
import { useTranslate } from "../util/translate";

const avatar =
  "https://media.discordapp.net/attachments/615904589320945678/978250819692560404/IMG_1556.png?width=1196&height=897";
export function InfoPanel() {
  return (
    <div className="flex flex-col p-20 gap-10">
      <DeveloperPanel />
      <IssuesPanel />
    </div>
  );
}

function IssuesPanel() {
  return (
    <Container className="flex flex-col gap-5">
      <Title>Report Issues</Title>
      <MarginDescription>
        {lines(
          "This website is open source.",
          "Find any Problems? Tell me on the Github Repo!"
        )}
      </MarginDescription>
      <LinkButton link={github_link}>Repository</LinkButton>
    </Container>
  );
}
function DeveloperPanel() {
  const { t } = useTranslate();

  return (
    <Container className="flex flex-row gap-8 flex-wrap items-start">
      <Img
        src={avatar}
        alt="Avatar"
        className="min-w-[25rem] flex-1 max-w-3xl"
      />
      <div className="flex flex-col">
        <GradientTitle>The Developer</GradientTitle>
        <Title>Of This Website</Title>
        <MarginDescription className="leading-normal">
          {lines(
            "Hello, I am MONEY.",
            "I have been worked on this website for a week,",
            "As a Full-Stack Engineer, I have a Github account and my own Youtube Channel",
            "Feel free to subscribe my channel or see My Projects on Github"
          )}
          <LinkButton link={dev_yt_link} className="mt-10">
            My Channel
          </LinkButton>
        </MarginDescription>
      </div>
    </Container>
  );
}
