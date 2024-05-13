import headerDesktop from "../../assets/images/image-header-desktop.jpg";
import headerMobile from "../../assets/images/image-header-mobile.jpg";
import SCCard from "./Card.styled.tsx";

export default function Card() {
  return (
    <SCCard>
      <picture>
        <source srcset={headerDesktop} media="(min-width: 1000px)" />
        <img src={headerMobile} alt="header image" />
      </picture>
      <div class="content">
        <div class="text">
          <p class="fs-l">
            Get <span class="highlight">insights</span> that help your business
            grow.
          </p>
          <p class="fs-b1">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
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
