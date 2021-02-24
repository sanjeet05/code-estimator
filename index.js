const fileProcess = require("./fileProcess");

const multi = [
  {
    path: "js-code.txt",
    lang: "",
  },
  {
    path: "python-code.txt",
    lang: "python",
  },
];

const main = async () => {
  try {
    const result = await fileProcess("js-code.txt");
    // const result = await fileProcess("python-code.txt", "python");

    console.log("Total:", result.total);
    console.log("Blank:", result.blank);
    console.log("Comment:", result.comment);
    console.log("Code:", result.code);
  } catch (error) {
    console.log("file error", error);
  }
};

main();

const multiFile = async () => {
  let promises = [];
  for (let item of multi) {
    promises.push(fileProcess(item.path, item.lang));
  }

  try {
    const res = await Promise.all(promises);

    const result = {
      total: 0,
      blank: 0,
      comment: 0,
      code: 0,
    };

    for (let item of res) {
      result.total = result.total + item.total;
      result.blank = result.blank + item.blank;
      result.comment = result.comment + item.comment;
      result.code = result.code + item.code;
    }

    console.log("Total:", result.total);
    console.log("Blank:", result.blank);
    console.log("Comment:", result.comment);
    console.log("Code:", result.code);
  } catch (error) {
    console.log("file error", error);
  }
};

// multiFile();
