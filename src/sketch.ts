import "p5";
import { Environemnt } from "environment/environment";
import { WeatherProvider } from "weather/weatherProvider";
import { Hero } from "hero/hero";

const environment = new Environemnt();
const weatherProvider = new WeatherProvider();
const hero = new Hero(200, 350);

function setup() {
  frameRate(10);
  createCanvas(Environemnt.worldSizeX, Environemnt.worldSizeY);
}

function draw() {
  background(200);
  const currentWeather = weatherProvider.getCurrentWeather();
  const heroSpeed = hero.update(currentWeather);
  const jumpspeed = hero.jump();
  environment.update(currentWeather, heroSpeed);
  environment.draw();
  hero.draw();
}

// It will be explained later.
export { setup, draw };
