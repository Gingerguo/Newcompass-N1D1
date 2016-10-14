var taxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.01
};

var companySalesData =[
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function salesTaxReport(salesData, taxRates){
    // console.log(salesData[0]);
  let companies = {};
  let saleEachpro;
  let total = 0;
  for(let i = 0; i < salesData.length; i ++){
    let salesArr;
    for(let sales in salesData[i]){
      salesArr = salesData[i]["sales"];
      salesEachpro = salesArr.reduce((a,b) => a+b, 0);
    }
      console.log(salesEachpro);
    }
}

var results = salesTaxReport(companySalesData,taxRates);
