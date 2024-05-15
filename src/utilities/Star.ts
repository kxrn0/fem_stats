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
    angle: number,
    angularVelocity: number,
    angularAcceleration: number
  ) {
    this.position = position.clone();
    this.velocity = velocity.clone();
    this.acceleration = new Vector(0, 0);
    this.width = width;
    this.height = height;
    this.mass = mass;
    this.angle = angle;
    this.angularVelocity = angularVelocity;
    this.angularAcceleration = angularAcceleration;
    this.alpha = 1;
    this.img = document.createElement("img");

    this.img.src = star;
  }

  apply_force(force: Vector) {
    force = force.clone().scale(1 / this.mass);

    this.acceleration.add(force);
    this.angularAcceleration = force.x / 10;
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
  }
}
