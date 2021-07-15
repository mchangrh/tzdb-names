const fs = require("fs");

exports.run = () => {
  let zoneLinks = {};

  try {
    // read contents of the file
    const data = fs.readFileSync('./build/backward', 'UTF-8');
  
    // split the contents by new line
    const lines = data.split(/\r?\n/);
  
    // print all lines
    lines.forEach((line) => {
      // ignore commented lines
      if (!line || line.startsWith("#")) return;
      // split on tab
      arr = line.split(/\s+/);
      // do any manipulation here
      const linkTarget = arr[2]
      const linkName = arr[1] 
      zoneLinks[linkTarget] = linkName;
    });
  } catch (err) {
    console.error(err);
  }
  
  fs.writeFileSync("./dist/zone-links.json", JSON.stringify(zoneLinks, null, 2));
}
