import fs from 'fs';
import csv from 'csv-parser';

const results = [];

let csvFilePath = "/Users/jtubert/Desktop/dev-projects/_personal/astro/src/data/stories.csv";

fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    fs.writeFileSync('./src/data/stories.json', JSON.stringify(results, null, 2));
    console.log('CSV converted to JSON and saved as output.json');
  });
