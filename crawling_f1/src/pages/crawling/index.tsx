import React, { useEffect, useState } from "react";
import "./crawling.scss";
import NameType from "./components/NameType";
import TableRace from "./components/TableRace";

const CrawlingPage = () => {
  return (
    <div className="crawling_page">
      <h1 className="heading">
        Crawling kết quả RACING F1 của RACE RESULTS (formula1.com)
      </h1>
      <NameType />
      <h3 className="heading_title">2022 RACE RESULTS</h3>
      <TableRace />
    </div>
  );
};

export default CrawlingPage;
