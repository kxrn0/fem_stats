import headerDesktop from "../../assets/images/image-header-desktop.jpg";
import headerMobile from "../../assets/images/image-header-mobile.jpg";
import { TIME_UNIT } from "../../constants.ts";
import Counter from "../Counter/Counter.tsx";
import Stars from "../Stars/Stars.tsx";
import Typewriter from "../Typewriter/Typewriter.tsx";
import SCCard from "./Card.styled.tsx";
import { For, createSignal, onCleanup, onMount } from "solid-js";

export default function Card() {
  const description =
    "Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.";
  const [dimensions, setDimensions] = createSignal({
    width: innerWidth,
    height: innerHeight,
  });
  const stats = [
    { to: 10, decoration: "k+", label: "COMPANIES" },
    { to: 314, label: "TEMPLATES" },
    { to: 12, decoration: "M+", label: "QUERIES" },
  ];
  const statsDuration = TIME_UNIT * 6;
  const statsDelay = TIME_UNIT * 19;

  function reset_dimensions() {
    setDimensions({ width: innerWidth, height: innerHeight });
  }

  onMount(() => window.addEventListener("resize", reset_dimensions));

  onCleanup(() => window.removeEventListener("resize", reset_dimensions));

  return (
    <SCCard>
      <picture>
        <source srcset={headerDesktop} media="(min-width: 1125px)" />
        <img src={headerMobile} alt="header image" />
      </picture>
      <div class="content">
        <div class="text">
          <p class="fs-l">
            Get{" "}
            <Stars
              canvasWidth={dimensions().width}
              canvasHeight={dimensions().height}
              delay={TIME_UNIT * 8}
            >
              <span class="text-anime">insights</span>
            </Stars>{" "}
            that help your business grow.
          </p>
          <div class="fs-b1">
            <Typewriter text={description} delay={TIME_UNIT * 4} gap={33} />
          </div>
        </div>
        <ul class="stats">
          {
            <For each={stats}>
              {(stat) => (
                <li class="fs-m">
                  <Counter
                    to={stat.to}
                    decoration={stat.decoration || ""}
                    duration={statsDuration}
                    delay={statsDelay}
                  />
                  <p class="fs-b2">{stat.label}</p>
                </li>
              )}
            </For>
          }
        </ul>
      </div>
    </SCCard>
  );
}
