const xlsx = require('xlsx');

function getTestData() {
    const workbook = xlsx.readFile('tests/test-data/testData.xlsx');
    const sheet = workbook.Sheets['Sheet1'];

    return xlsx.utils.sheet_to_json(sheet);
}

module.exports = getTestData;