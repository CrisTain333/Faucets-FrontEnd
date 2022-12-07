import React from 'react';

const EthTable = () => {
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
                          <td>12:30 AM</td>
                          <td>487</td>
                          <td>4s8er5s5fe57rjmxnfuewrurks</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>10:30 AM</td>
                          <td>875</td>
                          <td>sf7s7ers4e7r7wser</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>11:30 AM</td>
                          <td>797</td>
                          <td>se4s7er7</td>
                        </tr>
                      </tbody>
                    </table>
            
        </>
    );
};

export default EthTable;