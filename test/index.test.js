const { expect } = require("chai");

const fileProcess = require("../fileProcess");

describe("Code test", () => {
  it("Javascript code test", async () => {
    try {
      const res = await fileProcess("js-code.txt");
      expect(typeof res === "object").to.be.true;
      expect(res.hasOwnProperty("total")).to.be.true;
      expect(res.hasOwnProperty("blank")).to.be.true;
      expect(res.hasOwnProperty("comment")).to.be.true;
      expect(res.hasOwnProperty("code")).to.be.true;
    } catch (error) {
      // console.log("error", error);
      expect(error.toString()).to.be.equal("something is wrong here");
    }
  });

  it("Python code test", async () => {
    try {
      const res = await fileProcess("python-code.txt", "python");
      expect(typeof res === "object").to.be.true;
      expect(res.hasOwnProperty("total")).to.be.true;
      expect(res.hasOwnProperty("blank")).to.be.true;
      expect(res.hasOwnProperty("comment")).to.be.true;
      expect(res.hasOwnProperty("code")).to.be.true;
    } catch (error) {
      // console.log("error", error);
      expect(error.toString()).to.be.equal("something is wrong here");
    }
  });
});
