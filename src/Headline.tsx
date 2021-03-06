import { motion } from "framer-motion";
import logo from "./images/logo.svg";
import { server_link } from "./links";
import {
  Title,
  GradientTitle,
  Description,
  Img,
  Container,
  LinkButton,
} from "./util/components";
import { useTranslate } from "./util/translate";

export function Introduction() {
  return (
    <div className="relative h-fit overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full rotate-45 px-10 mask-container">
        <BlocksGrid />
      </div>
      <MainPanel />
    </div>
  );
}

function MainPanel() {
  const { t } = useTranslate();

  return (
    <Container className="flex flex-row justify-center p-10 z-10 relative gap-5">
      <div className="flex flex-col mt-10 max-w-3xl gap-3">
        <Title>綜合資本</Title>
        <GradientTitle className="font-extrabold text-9xl">
          小天堂
        </GradientTitle>
        <Description className="mt-4">
          The powerful community for games
        </Description>
        <LinkButton link={server_link} className="mt-10">
          Join Us
        </LinkButton>
      </div>
      <Img
        alt="community-svg"
        src={logo}
        className="flex-1 w-0 max-w-4xl min-w-[10vw]"
      />
    </Container>
  );
}

function BlocksGrid() {
  const rows = 20;
  const colors = ["black", "white", "DeepPink"];
  const items = [];

  for (let i = 0; i < rows; i++) {
    const color = Math.floor(Math.random() * colors.length);
    items.push(colors[color]);
  }

  const element = (index: number, color: string) => {
    return (
      <motion.div
        key={index}
        style={{ backgroundColor: color }}
        className="rounded-lg"
      />
    );
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      className="grid grid-cols-5 w-full h-full opacity-40 gap-10"
      layout
      whileInView={{ scale: 1 }}
    >
      {items.map((c, i) => element(i, c))}
    </motion.div>
  );
}
