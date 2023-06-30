//function to calulcate blitz rate
//than show weeks based on their blitz rate

//step 1 open the csv file
const fs = require('fs');

const filePath = 'tennessee_titans.csv';

fs.readFile(filePath, 'utf-8', (err, csv) => {
  if (err) {
    console.error('Error reading CSV file:', err);
    return;
  }

  // Process the CSV data
  processCSV(csv);
});

//maybe I should first try to display the excel sheet on the website first// 
//make sure you know how to calcualte blitz rate, order weeks by blitz rate
//csv should also include wins and losses, and turnover differential
//first calculate blitz rate, than turnover differential, than wins and losses
//all that should be pasted into a different csv
//than display that csv on website

//step 2: calulcate blitz rate, and store those results in blitzRateResult
//and then we got to display the results on the webiste by weeks
function processCSV(csv) {

}
