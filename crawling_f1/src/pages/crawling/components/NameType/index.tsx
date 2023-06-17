import React from "react";
import "./NameType.scss";
import { Link, NavLink } from "react-router-dom";

interface IRace {
  [key: string]: {
    text: string;
    href?: string;
  };
}
interface Props {
  rowHeadings: IRace[];
}

const NameType: React.FC<Props> = ({ rowHeadings }) => {
  return (
    <div className="list__typename">
      {rowHeadings.map((item, index) => (
        <ul>
          {Object.values(item).map((data, dataIndex) => {
            if (data.text) {
              return (
                <li key={dataIndex}>
                  <NavLink to={data?.href as string}>{data.text}</NavLink>
                </li>
              );
            }
          })}
        </ul>
      ))}
    </div>
  );
};

export default NameType;
