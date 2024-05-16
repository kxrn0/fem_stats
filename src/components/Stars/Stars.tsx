import { createSignal, mergeProps, onCleanup, onMount } from "solid-js";
import { JSX } from "solid-js";
import random from "../../utilities/random.ts";
import Vector from "../../utilities/Vector.ts";
import Star from "../../utilities/Star.ts";
import SCStars from "./Stars.styled.tsx";

type Props = {
  canvasWidth?: number;
  canvasHeight?: number;
  delay?: number;
  children: JSX.Element;
};

export default function Stars(props: Props) {
  const merged = mergeProps(
    { canvasWidth: 300, canvasHeight: 150, delay: 0 },
    props
  );
  const [animeId, setAnimeId] = createSignal(-1);
  let canvas!: HTMLCanvasElement;
  let contentRef!: HTMLDivElement;

  onMount(() => {
    const gravity = new Vector(0, 1);
    const context = canvas.getContext("2d")!;
    const contentD = { width: 0, height: 0 };
    let stars: Star[];

    function add_star() {
      const xOff = random(-contentD.width / 2, contentD.width / 2);
      const yOff = random(-contentD.height / 2, contentD.height / 2);
      const position = new Vector(
        canvas.width / 2 + xOff,
        canvas.height / 2 + yOff
      );
      const angle = (random(-135, -45) * Math.PI) / 180;
      const velocity = new Vector(0, 0);
      const size = random(10, 20);
      const force = Vector.from_angle(angle, 75);
      const star = new Star(position, velocity, size, size, size, 0);

      star.apply_force(force);

      stars.push(star);
    }

    function anime() {
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (let star of stars) {
        star.apply_force(gravity);

        star.alpha -= 0.01;
        star.apply_force(gravity);
        star.move();
        star.draw(context);
      }

      stars = stars.filter((star) => star.alpha >= 0);

      if (random(0, 100) < 10) add_star();

      setAnimeId(requestAnimationFrame(anime));
    }

    function init() {
      const contentRekt = contentRef.getBoundingClientRect();

      contentD.width = contentRekt.width;
      contentD.height = contentRekt.height;

      canvas.width = merged.canvasWidth;
      canvas.height = merged.canvasHeight;
      stars = [];

      setAnimeId(requestAnimationFrame(anime));
    }

    setTimeout(init, merged.delay);
  });

  onCleanup(() => cancelAnimationFrame(animeId()));

  return (
    <SCStars class="stars">
      <canvas ref={canvas}></canvas>
      <div class="container" ref={contentRef}>
        {props.children}
      </div>
    </SCStars>
  );
}
