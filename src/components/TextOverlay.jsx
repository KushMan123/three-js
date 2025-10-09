import { Scroll } from "@react-three/drei";
import "../styles/TextOverlay.css";

const Section = (props) => {
  return <section className="h-screen">{props.children}</section>;
};

export const TextOverlay = () => {
  return (
    <Scroll html>
      <Section>
        <h1>Hello World</h1>
      </Section>
    </Scroll>
  );
};
