import { describe, expect, it } from "vitest";
import { find } from "../exercises/e16";
import { Equal, TestObj } from "../test-utils";

describe("find", () => {
  it("should exist", () => {
    expect(find).toBeInstanceOf(Function);
  });

  it("should return the first thing that returns true from a callback with an array of numbers", () => {
    //@ts-ignore error TS2322: Type 'boolean' is not assignable to type 'number'.
    const returnVal = find([1, 2, 3], (el) => el === 2);
    expect(returnVal).toEqual(2);
    type IsTTest2ANumber = Equal<typeof returnVal, number | undefined>;
  });

  it("should return the first thing that returns true from a callback", () => {
    const returnVal = find(
      [
        { v: false, id: 1 },
        { v: true, id: 2 },
        { v: true, id: 3 },
      ],
      //@ts-ignore  error TS2322: Type 'boolean' is not assignable to type '{ v: boolean; id: number; }'.
      (el) => el.v
    );

    expect(returnVal).toEqual({ v: true, id: 2 });

    type IsTTest2ATestObjs = Equal<typeof returnVal, TestObj | undefined>;
  });
  it("should return undefined if not found", () => {
    const returnValue = find(
      [
        { v: false, id: 1 },
        { v: false, id: 2 },
        { v: false, id: 3 },
      ],
      //@ts-ignore error TS2322: Type 'boolean' is not assignable to type '{ v: boolean; id: number; }'.
      (obj) => obj.v
    );

    type isValidType1 = Equal<TestObj | undefined, typeof returnValue>;

    expect(returnValue).toEqual(undefined);
  });
});
