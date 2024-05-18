import { createSignal, mergeProps, onCleanup, onMount } from "solid-js";
import SCCounter from "./Counter.styled.tsx";
import map from "../../utilities/map.ts";

type Props = {
  from?: number;
  to: number;
  decoration?: string;
  duration: number;
  delay?: number;
  floor?: boolean;
};

export default function Counter(props: Props) {
  const merged = mergeProps(
    { from: 0, decoration: "", delay: 0, floor: true },
    props
  );

  const [count, setCount] = createSignal(merged.from);
  const [animeId, setAnimeId] = createSignal(-1);

  onMount(() => {
    let startTime: number;

    function anime() {
      const dt = Date.now() - startTime;

      if (dt >= merged.duration) return setCount(merged.to);

      const value = map(dt, 0, merged.duration, merged.from, merged.to);

      setCount(merged.floor ? ~~value : value);

      setAnimeId(requestAnimationFrame(anime));
    }

    function init() {
      startTime = Date.now();

      setAnimeId(requestAnimationFrame(anime));
    }

    setTimeout(init, merged.delay);
  });

  onCleanup(() => cancelAnimationFrame(animeId()));

  return (
    <SCCounter>
      <p class="hidden">{merged.to}{merged.decoration}</p>
      <p class="count">
        {count()}
        {merged.decoration}
      </p>
    </SCCounter>
  );
}
