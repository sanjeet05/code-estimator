const fs = require("fs");
const readline = require("readline");

// config for lang
const config = {
  javascript: "//",
  python: "#",
};

const processLineByLine = async (filePath, lang) => {
  // default comment lang would be javascript
  const commentedLine = config[lang] || config["javascript"];

  let totalLine = 0,
    totalValidLine = 0,
    totalComment = 0;

  const fileStream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    // console.log(`Line from file: ${line}`);

    const removedSpace = line.trim();
    if (removedSpace) {
      // for single valid comments
      const commentedSize = commentedLine.length;
      if (removedSpace.length >= commentedSize) {
        const prefix = removedSpace.slice(0, commentedSize);
        if (prefix == commentedLine) {
          totalComment++;
        }
      }

      totalValidLine++;
    }

    totalLine++;
  }

  // return a resultset
  const result = {
    total: totalLine,
    blank: totalLine - totalValidLine,
    comment: totalComment,
    code: totalValidLine - totalComment,
  };

  return result;
};

module.exports = processLineByLine;
