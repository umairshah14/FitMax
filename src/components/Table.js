import React from "react"


function BodyFatTable() {
  return (
    
    <table  className="table h-auto rounded-lg table-striped bg-indigo-50">
      <thead>
        <tr className="text-indigo-800 font-semibold">
          <th>Description</th>
          <th>Women</th>
          <th>Men</th>
        </tr>
      </thead>
      <tbody>
        <tr className="font-semibold">
          <td>Essential fat</td>
          <td>10-13%</td>
          <td>2-5%</td>
        </tr>
        <tr className="font-semibold">
          <td>Athletes</td>
          <td>14-20%</td>
          <td>6-13%</td>
        </tr>
        <tr className="font-semibold">
          <td>Fitness</td>
          <td>21-24%</td>
          <td>14-17%</td>
        </tr>
        <tr className="font-semibold">
          <td>Average</td>
          <td>25-31%</td>
          <td>18-24%</td>
        </tr>
        <tr className="font-semibold">
          <td>Obese</td>
          <td>32%+</td>
          <td>25%+</td>
        </tr>
      </tbody>
    </table>
    
  );
}

export default BodyFatTable;