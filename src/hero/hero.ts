import { Vector2D } from "../utils/vector";
import { Weather } from "../weather/weather";
import "p5";
import { Vector } from "p5";

class Inventory {
  coins: number;
  guns;
}

export class Hero {
  isHoldingGun: boolean;
  position: Vector2D;
  speed: Vector2D = new Vector2D(0, 0);
  lookaheadRange: number;
  inventory: Inventory;
  jumpspeed: Vector2D = new Vector2D(0, 0);
  constructor(x: number, y: number) {
    this.position = new Vector2D(x, y);
  }

  update(currentWeather: Weather) {
    /**
     * 1 -  update speed based on weather
     * correct speed based on pressed key
     * add speed to position
     */
    this.calculateSpeedBasedOnWeather(currentWeather);
    this.calculateSpeedBasedOnKeyPressed();
    //this.position = this.position.add(this.speed);
    return this.speed;
  }

  calculateSpeedBasedOnWeather(currentWeather: Weather) {
    if (currentWeather.precipitation.isPresent() && this.speed.x !== 0) {
      this.speed = this.speed.add(new Vector2D(0, 0));
    } else {
      this.speed = this.speed.add(new Vector2D(0, 0));
    }
  }

  calculateSpeedBasedOnKeyPressed() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.speed = new Vector2D(0, 0);
      this.speed = this.speed.add(new Vector2D(5, 0));
    } else if (keyIsDown(LEFT_ARROW)) {
      this.speed = new Vector2D(0, 0);
      this.speed = this.speed.add(new Vector2D(-5, 0));
    } else {
      this.speed = new Vector2D(0, 0);
    }
  }

  draw() {
    fill("blue");
    rect(this.position.x, this.position.y, 30, 30);
  }
  jump() {
    frameRate(50);
    this.position = this.position.add(this.jumpspeed);
    if (keyIsDown(UP_ARROW) && this.position.y > 250) {
      this.jumpspeed = new Vector2D(0, 0);
      this.jumpspeed = this.jumpspeed.add(new Vector2D(0, -15));
    } else if (this.position.y === 350) {
      this.jumpspeed = new Vector2D(0, 0);
    } else {
      this.jumpspeed = new Vector2D(0, 0);
      this.jumpspeed = this.jumpspeed.add(new Vector2D(0, 15));
    }
  }
}
