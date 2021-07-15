const fs = require("fs");

exports.run = () => {
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
      arr = line.split(/\s+/);
      // only push timezone names
      const zoneName = arr[2] // do any manipulation here
      zones.push(zoneName);
    });
  } catch (err) {
    console.error(err);
  }
  
  fs.writeFileSync("./dist/zone-names.json", JSON.stringify(zones, null, 2));  
}
