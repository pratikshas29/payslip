import React from 'react';
import html2pdf from 'html2pdf.js';
import { COMPANY_DETAILS } from '../constants/companyDetails';
import './PaySlip.css';

const PaySlip = ({ employeeData }) => {
    const handleDownloadPDF = () => {
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="payslip-container">
                <div class="header">
                 
                    <div class="company-details">
                        <h2>${COMPANY_DETAILS.name}</h2>
                        <p>${COMPANY_DETAILS.address}</p>
                        <p>${COMPANY_DETAILS.city}</p>
                        <p>Phone: ${COMPANY_DETAILS.phone}</p>
                        <p>${COMPANY_DETAILS.website}</p>
                    </div>
                </div>

                <h3 class="payslip-title">PAY SLIP FOR THE MONTH OF SEPTEMBER 2024</h3>

                <div class="employee-details">
                    <table>
                        <tbody>
                            <tr><td>EMP Code</td><td>${employeeData.empCode}</td></tr>
                            <tr><td>Name</td><td>${employeeData.name}</td></tr>
                            <tr><td>Designation</td><td>${employeeData.designation}</td></tr>
                            <tr><td>PAN</td><td>${employeeData.pan}</td></tr>
                            <tr><td>Location</td><td>${employeeData.location}</td></tr>
                            <tr><td>DOJ</td><td>${employeeData.doj}</td></tr>
                            <tr><td>Department</td><td>${employeeData.department}</td></tr>
                            <tr><td>Payable Days</td><td>${employeeData.payableDays}</td></tr>
                        </tbody>
                    </table>
                </div>

                <div class="salary-details">
                    <table>
                        <thead>
                            <tr>
                                <th>Earnings</th><th>Amount</th><th>Deductions</th><th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Basic</td><td>${employeeData.earnings.basic}</td>
                                <td>Professional Tax</td><td>${employeeData.deductions.professionalTax}</td>
                            </tr>
                            <tr>
                                <td>DA</td><td>${employeeData.earnings.da}</td>
                                <td>Other</td><td>${employeeData.deductions.other}</td>
                            </tr>
                            <tr>
                                <td>Conveyance Allowance</td><td>${employeeData.earnings.conveyanceAllowance}</td>
                                <td></td><td></td>
                            </tr>
                                <tr>
                                <td>Medical Allowance</td><td>${employeeData.earnings.medicalAllowance}</td>
                                <td></td><td></td>
                            </tr>
                            <tr>
                                <td>Other Allowance</td><td>${employeeData.earnings.otherAllowance}</td>
                                <td></td><td></td>
                            </tr>
                             <tr >
                                <td>CCA</td><td>${employeeData.earnings.CCA}</td>
                                  <td></td><td></td>
                            </tr>
                            <tr class="total-row">
                                <td>Gross</td><td>${employeeData.earnings.gross}</td>
                                <td>Total</td><td>${employeeData.deductions.total}</td>
                            </tr>
                            <tr class="net-pay">
                                <td>Net Pay</td><td>${employeeData.netPay}</td>
                                <td></td><td></td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>

                <div class="footer">
                    <p>This is a computer-generated Pay slip. No Signature is required.</p>
                </div>
            </div>
        `;

        html2pdf().from(element).save(`PaySlip_${employeeData.name}.pdf`);
    };

    return (
        <div>
            {/* Download PDF Button */}
            <button className="download-button" onClick={handleDownloadPDF}>
                Download PDF
            </button>
        </div>
    );
};

export default PaySlip;
