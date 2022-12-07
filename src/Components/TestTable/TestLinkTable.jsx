import React from 'react';

const TestLinkTable = () => {
    return (
        <>
             <table>
                      <thead className="table__head">
                        <tr>
                          <th>Sr</th>
                          <th>Time</th>
                          <th>Amount</th>
                          <th>Hash</th>
                        </tr>
                      </thead>
                      <tbody
                        className="table__body"
                        style={{ textAlign: "center" }}
                      >
                        <tr>
                          <td>1</td>
                          <td>08:30 AM</td>
                          <td>748</td>
                          <td>7s7effkeurusue4</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>10:23 AM</td>
                          <td>974</td>
                          <td>sfe7r7sr4fer</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>11:10 AM</td>
                          <td>874</td>
                          <td>s4e7s8er</td>
                        </tr>
                      </tbody>
                    </table>
        </>
    );
};

export default TestLinkTable;