import React, { useEffect, useState } from "react";
import "./crawling.scss";
import cheerio from "cheerio";
import axios from "axios";
import NameType from "./components/NameType";
import TableRace from "./components/TableRace";
import { useLocation } from "react-router-dom";
import { log } from "console";
import { routes } from "../../routers";

export interface IRace {
  [key: string]: {
    text: string;
    href?: string;
  };
}
const CrawlingPage = () => {
  const [url, setUrl] = useState("/en/results.html/2023/drivers.html");
  const [rowRaces, setRowDataRace] = useState<IRace[]>([]);
  const [rowHeadings, setRowHeading] = useState<IRace[]>([]);
  const [rowTitleRace, setRowTitleRace] = useState<IRace[]>([]);
  const [headingTitle, setHeadingTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const mainUrl = "https://www.formula1.com";

  const location = useLocation();
  const url2 =
    location.pathname != "/"
      ? location.pathname
      : "/en/results.html/2023/drivers.html";

  const fetchRaceResults = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/crawl?url=${mainUrl}${url2}`
      );
      const $ = cheerio.load(response.data);

      // DOM content Table
      const rowsContent = $(
        ".inner-wrap.ResultArchiveWrapper table.resultsarchive-table tr"
      );

      // DOM content heading type
      const rowsHeading = $(
        ".resultsarchive-filter-container .resultsarchive-filter-wrap"
      );

      const rowRaceArray: IRace[] = [];
      const rowRaceHeading: IRace[] = [];
      const rowHeadingArray: IRace[] = [];

      const heading_title = $(".ResultsArchiveTitle").text();
      setHeadingTitle(heading_title);

      // Get content table racing f1
      rowsContent.each((index, row) => {
        const rowDataTitleRace: {
          [key: string]: { text: string; href: string };
        } = {};

        const columnsTitle = $(row).find("th");

        columnsTitle.each((index, column) => {
          const columnText = $(column).text();
          const columnHref = $(column).find("a").attr("href") as string;
          const columnName = index;
          if (columnText) {
            rowDataTitleRace[columnName] = {
              text: columnText,
              href: columnHref,
            };
          }
        });
        rowRaceHeading.push(rowDataTitleRace);
        setRowTitleRace(rowRaceHeading);

        const rowDataRace: { [key: string]: { text: string; href: string } } =
          {};
        const columns = $(row).find("td");

        columns.each((index, column) => {
          const columnText = $(column).text();
          const columnHref = $(column).find("a").attr("href") as string;
          const columnName = index;
          if (columnText) {
            rowDataRace[columnName] = { text: columnText, href: columnHref };
          }
        });

        rowRaceArray.push(rowDataRace);
      });
      setRowDataRace(rowRaceArray);

      // Get heading type
      rowsHeading.each((index, row) => {
        const rowHeading: { [key: string]: { text: string; href: string } } =
          {};
        const columns = $(row).find("li");

        columns.each((index, column) => {
          const columnText = $(column).text();
          const columnHref = $(column).find("a").attr("href") as string;
          const columnName = index;
          if (columnText) {
            rowHeading[columnName] = { text: columnText, href: columnHref };
          }
        });
        rowHeadingArray.push(rowHeading);
      });
      setRowHeading(rowHeadingArray);

      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 1000);
      console.log("loading", loading);

      console.log("rowHeadings", rowHeadings);
    } catch (error) {
      console.error("Lỗi khi cào dữ liệu:", error);
    }
  };

  useEffect(() => {
    fetchRaceResults();
  }, [url2]);

  return (
    <div className="crawling_page">
      {loading && <div className="line-loading"></div>}

      <h1 className="heading">
        Crawling kết quả RACING F1 của RACE RESULTS (formula1.com)
      </h1>
      <NameType rowHeadings={rowHeadings} />
      <h3 className="heading_title">{headingTitle}</h3>
      <TableRace rowRaces={rowRaces} rowTitleRace={rowTitleRace} />
    </div>
  );
};

export default CrawlingPage;
