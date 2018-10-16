import * as core from "../src/sdk";

describe("SDK test", () => {
    it("SDK is an object", () => {
        expect(typeof core).toBe("object");
    });
});
