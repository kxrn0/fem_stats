import star from "../../assets/images/star.png"
import { onMount } from "solid-js";
import SCStars from "./Stars.styled.tsx";
import Vector from "../../utilities/Vector.ts";

type Props = {
  position?: Vector
  offset?: number
  delay?: number
}

export default function Stars(props: Props) {
  let canvas!: HTMLCanvasElement;

  onMount(() => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    
    

  });

  return <SCStars ref={canvas}></SCStars>;
}


