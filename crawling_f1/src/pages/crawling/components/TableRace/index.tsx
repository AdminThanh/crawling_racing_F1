import React from "react";

const TableRace = () => {
  return (
    <div className="tableRace">
      <table>
        <thead>
          <tr>
            <td>Grand Prix</td>
            <td>Date</td>
            <td>Winner</td>
            <td>Car</td>
            <td>Laps</td>
            <td>Time</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="/en/results.html/2022/races/1124/bahrain/race-result.html">
                Bahrain
              </a>
            </td>
            <td>20 Mar 2022</td>
            <td>Charles Leclerc LEC</td>
            <td>Ferrari</td>
            <td>57</td>
            <td>1:37:33.584</td>
          </tr>
          <tr>
            <td>
              <a href="/en/results.html/2022/races/1125/saudi-arabia/race-result.html">
                Saudi Arabia
              </a>
            </td>
            <td>27 Mar 2022</td>
            <td>Max Verstappen VER</td>
            <td>Red Bull Racing RBPT</td>
            <td>50</td>
            <td>1:24:19.293</td>
          </tr>
          <tr>
            <td>
              <a href="/en/results.html/2022/races/1138/abu-dhabi/race-result.html">
                Abu Dhabi
              </a>
            </td>
            <td>20 Nov 2022</td>
            <td>Max Verstappen VER</td>
            <td>Red Bull Racing RBPT</td>
            <td>58</td>
            <td>1:27:45.914</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableRace;
