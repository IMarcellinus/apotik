import React from "react";

const ReusableTable = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-gray-200">
        <thead>
          <tr className="text-white">
            <th className="min-w-[40px] sticky left-0">
              <div className="bg-blue-500 rounded-tl-md py-2 text-center">No</div>
            </th>
            {columns.map((column, index, array) => (
              <th key={index} className={`min-w-[80px] ${index === 0 && "sticky left-10"} ${column.customStyles}`}>
                <div
                  className={`${
                    index + 1 === array.length ? "rounded-tr-md" : ""
                  } p-2 bg-blue-500 text-center`}
                >
                  {column.header}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex, array) => (
            <tr
              key={rowIndex}
              //   className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-100"}
            >
              <td className="h-[40px] sticky left-0">
                <div
                  className={`${
                    array.length - 1 === rowIndex ? "rounded-bl-md" : ""
                  } ${
                    rowIndex % 2 === 0 ? "bg-white" : "bg-gray-200"
                  } p-2 h-full text-center`}
                >
                  {rowIndex + 1}
                </div>
              </td>
              {columns.map((column, colIndex) => (
                <td key={colIndex} className={`${colIndex === 0 && "sticky left-10"} h-[40px]`}>
                  <div
                    className={`${
                      rowIndex % 2 === 0 ? "bg-white" : "bg-gray-200"
                    } ${
                      colIndex + 1 === columns.length &&
                      array.length - 1 === rowIndex
                        ? "rounded-br-md"
                        : ""
                    } py-2 px-4 h-full`}
                  >
                    {column.Cell
                      ? <column.Cell row={row} value={row[column.accessor]} />
                      : row[column.accessor]}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReusableTable;
