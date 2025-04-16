import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useTable = (rows, selectedIDs, setSelectedID) => {
  const dispatch = useDispatch();

  const toogleAll = () => {
    dispatch(
      setSelectedID(
        selectedIDs.length === rows.length ? [] : rows.map((row) => row.id)
      )
    );
  };

  const toogleSelect = (id) => {
    dispatch(
      setSelectedID(
        selectedIDs.includes(id)
          ? selectedIDs.filter((selectedID) => selectedID !== id)
          : [...selectedIDs, id]
      )
    );
  };

  return { toogleAll, toogleSelect };
};

export default useTable;
