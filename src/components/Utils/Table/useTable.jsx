import { useState } from "react";

const useTable = (rows) => {
  const [selectedIds, setSelectedIds] = useState([]);

  const toogleAll = () => {
    setSelectedIds((prev) =>
      prev.length === rows.length ? [] : rows.map((row) => row.id)
    );
  };

  const toogleSelect = (id) => {
    console.log(id);

    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((selectedID) => selectedID !== id)
        : [...prev, id]
    );
  };

  

  return { selectedIds, toogleAll, toogleSelect };
};

export default useTable;
