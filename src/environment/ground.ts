import { Weather } from "../weather/weather";
import { Environemnt } from "../environment/environment";
import "p5";
import { Vector2D } from "../utils/vector";

export class Ground {
  constructor(private height: number) {}
  public update(currentWeather: Weather, heroSpeed: Vector2D) {
    // do nothing
  }

  public draw() {
    fill("green");
    rect(
      0,
      Environemnt.worldSizeY - this.height,
      Environemnt.worldSizeX,
      this.height
    );
  }
}
