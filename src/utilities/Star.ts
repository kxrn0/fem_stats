import Vector from "./Vector";
import star from "../assets/images/star.png";

export default class Star {
  position: Vector;
  velocity: Vector;
  acceleration: Vector;
  width: number;
  height: number;
  mass: number;
  angle: number;
  angularVelocity: number;
  angularAcceleration: number;
  alpha: number;
  img: HTMLImageElement;

  constructor(
    position: Vector,
    velocity: Vector,
    width: number,
    height: number,
    mass: number,
    angle: number
  ) {
    this.position = position.clone();
    this.velocity = velocity.clone();
    this.acceleration = new Vector(0, 0);
    this.width = width;
    this.height = height;
    this.mass = mass;
    this.angle = angle;
    this.angularVelocity = 0;
    this.angularAcceleration = 0;
    this.alpha = 1;
    this.img = document.createElement("img");
    this.img.src = star;
  }

  apply_force(force: Vector) {
    force = force.clone().scale(1 / this.mass);

    this.acceleration.add(force);
    this.angularAcceleration += force.x / 10;
  }

  move() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.scale(0);
    this.angularVelocity += this.angularAcceleration;
    this.angle += this.angularVelocity;
    this.angularAcceleration = 0;
  }

  draw(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.translate(this.position.x, this.position.y);
    context.rotate(this.angle);
    context.globalAlpha = Math.max(this.alpha, 0);
    context.drawImage(
      this.img,
      0,
      0,
      this.img.naturalWidth,
      this.img.naturalHeight,
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    );
    context.globalAlpha = 1;
    context.setTransform(1, 0, 0, 1, 0, 0);
  }
}
