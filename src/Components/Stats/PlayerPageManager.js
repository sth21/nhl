import { useState, useEffect } from "react";

export default function PlayerPageManager({
  tableSettings,
  setTableSettings,
  displayType,
  playersAvailable,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const endPage = (playersAvailable - (playersAvailable % 50)) / 50 + 1;

  /*
  If any information altered, set bounds for PlayerTable
  If descending, create bounds based off index 0
  If ascending, create bounds based off playersAvailable count
  */

  useEffect(() => {
    if (tableSettings.sortType === "D") {
      const endIndex =
        currentPage * 50 > playersAvailable
          ? playersAvailable
          : currentPage * 50;
      setTableSettings((curSettings) => {
        return {
          ...curSettings,
          startIndex: (currentPage - 1) * 50,
          endIndex: endIndex,
        };
      });
    } else {
      const startIndex = playersAvailable - currentPage * 50;
      setTableSettings((curSettings) => {
        return {
          ...curSettings,
          startIndex: startIndex < 0 ? 0 : startIndex,
          endIndex: startIndex + 50,
        };
      });
    }
  }, [playersAvailable, tableSettings.sortType, setTableSettings, currentPage]);

  // If sort parameter or sort type changed, reset current page to 1
  useEffect(() => {
    setCurrentPage(1);
  }, [tableSettings.sortParam, tableSettings.sortType]);

  return (
    <div>
      <button
        onClick={() => setCurrentPage((curPage) => curPage - 1)}
        disabled={currentPage === 1}
      >
        {"<--"}
      </button>
      <p>{`${playersAvailable} ${displayType} Returned`}</p>
      <p>{`Page ${currentPage} of ${endPage}`}</p>
      <button
        onClick={() => setCurrentPage((curPage) => curPage + 1)}
        disabled={currentPage === endPage}
      >
        {"-->"}
      </button>
    </div>
  );
}
