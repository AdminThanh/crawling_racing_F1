import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./TableRace.scss";
import { IRace } from "../../index";

interface Props {
  rowRaces: IRace[];
  rowTitleRace: IRace[];
}

const TableRace: React.FC<Props> = ({ rowRaces, rowTitleRace }) => {
  return (
    <div className="tableRace">
      <table>
        <thead>
          {rowTitleRace.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((data, dataIndex) => {
                if (data.text) {
                  return (
                    <td key={dataIndex}>
                      <>{data.text}</>
                    </td>
                  );
                }
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {rowRaces.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((data, dataIndex) => {
                if (data.text) {
                  return (
                    <td key={dataIndex}>
                      {data.href ? (
                        <NavLink to={data.href as string}>{data.text}</NavLink>
                      ) : (
                        <>{data.text}</>
                      )}
                    </td>
                  );
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableRace;
