import headerDesktop from "../../assets/images/image-header-desktop.jpg";
import headerMobile from "../../assets/images/image-header-mobile.jpg";
import { TIME_UNIT } from "../../constants.ts";
import Stars from "../Stars/Stars.tsx";
import Typewriter from "../Typewriter/Typewriter.tsx";
import SCCard from "./Card.styled.tsx";

export default function Card() {
  const description =
    "Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.";

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
              canvasWidth={innerWidth}
              canvasHeight={innerHeight}
              delay={TIME_UNIT * 8}
            >
              <span class="text-anime">insights</span>
            </Stars>{" "}
            that help your business grow.
          </p>
          <div class="fs-b1">
            <Typewriter text={description} delay={TIME_UNIT * 6} gap={33} />
          </div>
        </div>
        <ul class="stats">
          <li>
            <p class="fs-m">10k+</p>
            <p class="fs-b2">COMPANIES</p>
          </li>
          <li>
            <p class="fs-m">314</p>
            <p class="fs-b2">TEMPLATES</p>
          </li>
          <li>
            <p class="fs-m">12M+</p>
            <p class="fs-b2">QUERIES</p>
          </li>
        </ul>
      </div>
    </SCCard>
  );
}
