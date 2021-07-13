const fs = require("fs");

const zones = [];

try {
  // read contents of the file
  const data = fs.readFileSync('./build/zone1970.tab', 'UTF-8');

  // split the contents by new line
  const lines = data.split(/\r?\n/);

  // print all lines
  lines.forEach((line) => {
    // ignore commented lines
    if (!line || line.startsWith("#")) return;
    // split on tab
    arr = line.split("	");
    // only push timezone names
    zones.push(arr[2]);
  });
} catch (err) {
  console.error(err);
}

fs.writeFileSync("./dist/zone.json", JSON.stringify(zones));
