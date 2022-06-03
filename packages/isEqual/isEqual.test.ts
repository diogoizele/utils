import { isEqual } from "./isEqual";

describe("isEqual", () => {
  it("should compare two equals objects and return true", () => {
    const obj1 = {
      name: "Telmux",
      age: 50,
    };

    const obj2 = {
      name: "Telmux",
      age: 50,
    };

    const comparation = isEqual(obj1, obj2);

    expect(comparation).toBeTruthy();
  });

  it("should compare two objects that have equal objects as value", () => {
    const obj1 = {
      name: "Telmux",
      skills: {
        frontEnd: "Java",
      },
    };

    const obj2 = {
      name: "Telmux",
      skills: {
        frontEnd: "Java",
      },
    };

    const comparation = isEqual(obj1, obj2);

    expect(comparation).toBeTruthy();
  });

  it("should return true even having multiple nested same objects", () => {
    const obj1 = {
      name: "Jelly",
      type: {
        id: 1,
        category: {
          id: 1,
        },
      },
    };

    const obj2 = {
      name: "Jelly",
      type: {
        id: 1,
        category: {
          id: 1,
        },
      },
    };

    const comparation = isEqual(obj1, obj2);

    expect(comparation).toBeTruthy();
  });

  it("should return true with objects that contain an array equal", () => {
    const obj1 = {
      name: "Jimmy",
      skills: [
        "ReactJS",
        "ReactNative",
        "NodeJS",
        {
          TypeScript: "Awesome",
        },
      ],
    };

    const obj2 = {
      name: "Jimmy",
      skills: [
        "ReactJS",
        "ReactNative",
        "NodeJS",
        {
          TypeScript: "Awesome",
        },
      ],
    };

    const comparation = isEqual(obj1, obj2);

    expect(comparation).toBeTruthy();
  });
});
