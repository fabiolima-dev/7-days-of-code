import { Shape, Stripes, Texture } from "./styles";

export default function Background() {
  return (
    <>
      <Shape src="/public/images/bg-shape.svg" alt="background shape" />
      <Texture src="/public/images/background.png" alt="background texture" />
      <Stripes />
    </>
  );
}
