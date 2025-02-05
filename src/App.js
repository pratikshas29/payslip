import React from 'react';
import PaySlip from './components/PaySlip';

function App() {
  const sampleEmployeeData = {
    empCode: "MYC 7206",
    name: "Ashutosh Yashwant Babar",
    designation: "Software Engineer",
    pan: "CYUPB4408B",
    location: "Pune",
    doj: "14-Jun-2021",
    department: "IT",
    payableDays: "30",
    earnings: {
      basic: "13,125.00",
      da: "11,250.00",
      conveyanceAllowance: "7,500.00",
      otherAllowance: "5,625.00",
      medicalAllowance: "-",
      gross: "37,500.00",
      CCA: "-"

    },
    deductions: {
      professionalTax: "200.00",
      other: "2100.00",
      total: "2300.00"
    },
    netPay: "35,200.00"
  };

  return (
    <div className="App">
      <PaySlip employeeData={sampleEmployeeData} />
    </div>
  );
}

export default App;