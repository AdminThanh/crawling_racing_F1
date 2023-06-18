import React from "react";
import "./NameType.scss";
import { Link, NavLink } from "react-router-dom";
import { log } from "console";
import { empty } from "cheerio/lib/api/manipulation";
import {IRace} from '../../index'
interface Props {
  rowHeadings: IRace[];
}

const NameType: React.FC<Props> = ({ rowHeadings }) => {
  return (
    <div className="list__typename">
      {rowHeadings.map((item, index) => {
        if (Object.values(item).length > 0) {
          return (
            <ul key={index}>
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
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default NameType;
