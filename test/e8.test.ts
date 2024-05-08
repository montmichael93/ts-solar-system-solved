import { describe, expect, it } from "vitest";
import { findPlanetByMoon } from "../exercises/e8";
import { data } from "../data/data";

describe("findPlanetNameByMoon", () => {
  it("Should exist", () => {
    expect(findPlanetByMoon).toBeInstanceOf(Function);
  });
  it("Should be the planet Neptune object for Triton moon", () => {
    expect(
      //@ts-ignore error TS2339: Property 'name' does not exist on type 'false | Planet'.
      findPlanetByMoon({ moonName: "Triton", planets: data.planets })?.name
    ).toEqual("Neptune");
  });

  it("Should not care about case sensitivity", () => {
    expect(
      //@ts-ignore error TS2339: Property 'name' does not exist on type 'false | Planet'.
      findPlanetByMoon({ moonName: "triton", planets: data.planets })?.name
    ).toEqual("Neptune");
  });
});
