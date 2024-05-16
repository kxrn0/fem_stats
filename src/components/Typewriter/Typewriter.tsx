import { For, createSignal, mergeProps, onCleanup, onMount } from "solid-js";
import SCTypewriter from "./Typewriter.styled.tsx";
import { createStore } from "solid-js/store";

type Props = {
  text: string;
  gap?: number;
  delay?: number;
};

export default function Typewriter(props: Props) {
  const merged = mergeProps({ gap: 100, delay: 0 }, props);
  const [words, setWords] = createStore<string[]>([""]);
  const [animeId, setAnimeId] = createSignal(-1);

  onMount(() => {
    const strings = merged.text.split(" ");
    let prevTime: number, index: number;

    function anime(timestamp: number) {
      if (index >= strings.length) return;

      const dt = timestamp - prevTime;

      if (dt >= merged.gap) {
        const str = strings[index].substring(
          0,
          (words[index]?.length || 0) + 1
        );

        setWords(index, str);

        if (words[index] && words[index].length === strings[index].length)
          index++;

        prevTime = timestamp;
      }

      setAnimeId(requestAnimationFrame(anime));
    }

    function init() {
      prevTime = 0;
      index = 0;

      setAnimeId(requestAnimationFrame(anime));
    }

    setTimeout(init, merged.delay);
  });

  onCleanup(() => cancelAnimationFrame(animeId()));

  return (
    <SCTypewriter>
      <p class="hidden">{merged.text}</p>
      <div class="words">
        <For each={words}>{(word) => <p>{word}</p>}</For>
      </div>
    </SCTypewriter>
  );
}
