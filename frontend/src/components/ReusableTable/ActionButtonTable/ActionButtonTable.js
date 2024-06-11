import React from "react";
import ButtonAction from "./ButtonAction/ButtonAction";

const ActionsButtonTable = ({ actions }) => {
  return (
    <div className="flex justify-center gap-x-3">
      {actions.map((action, index) => (
        <ButtonAction key={index} onClick={action.onClick} type={action.type} />
      ))}
    </div>
  );
};

export default ActionsButtonTable;
