import {
  createEffect,
  createSignal,
  mergeProps,
  onCleanup,
  onMount,
} from "solid-js";
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
  const [box, setBox] = createSignal<DOMRect | null>(null);
  let canvas!: HTMLCanvasElement;
  let contentRef!: HTMLDivElement;

  onMount(() => {
    const gravity = new Vector(0, 1);
    const context = canvas.getContext("2d")!;
    let stars: Star[];

    function add_star() {
      const xOff = random(-box()!.width, box()!.width);
      const yOff = random(-box()!.height, box()!.height);
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
      const box = contentRef.getBoundingClientRect();

      setBox(box);

      canvas.width = merged.canvasWidth;
      canvas.height = merged.canvasHeight;
      stars = [];

      setAnimeId(requestAnimationFrame(anime));
    }

    createEffect(() => {
      if (props.canvasWidth || props.canvasHeight) {
        const box = contentRef.getBoundingClientRect();

        setBox(box);

        canvas.width = props.canvasWidth!;
        canvas.height = props.canvasHeight!;
      }
    });

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
