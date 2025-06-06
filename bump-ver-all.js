const fs = require("node:fs/promises");
const path = require("node:path");

const getFiles = async (dir) => {
  const subdirs = await fs.readdir(dir);
  const files = await Promise.all(
    subdirs.map(async (subdir) => {
      const res = path.resolve(dir, subdir);
      return (await fs.stat(res)).isDirectory() ? getFiles(res) : res;
    })
  );
  return files.reduce((a, f) => a.concat(f), []);
};

(async () => {
  const argv = process.argv;
  if (argv.length < 3) {
    console.log(`Usage: node bump-ver-all.js <ver>`);
    return;
  }
  const version = argv[2];

  const dirs = ["Enhancements", "Extras", "Fixes", "Unlockers"];
  const projects = [...(await Promise.all(dirs.map((d) => getFiles(d))))]
    .flat()
    .filter((f) => f.endsWith("csproj"));

  for (const proj of projects) {
    fs.readFile(proj).then(async (src) => {
      const dst = src
        .toString()
        .replace(
          /<Version>\d+\.\d+\.\d+<\/Version>/g,
          `<Version>${version}</Version>`
        );
      await fs.writeFile(proj, dst);
    });
  }
})();
