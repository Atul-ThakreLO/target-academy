import TransactionList from "@/components/Staff/Transactions/transaction-list";
import React from "react";

const Transactions = () => {
  return (
    <div>
      <div className="mt-5 pl-5">
        <h6 className="text-4xl font-semibold gradient-title-custom">
          Transactions
        </h6>
        <p className="text-gray-500 mt-3">List of Transactions</p>
      </div>
      <div>
        <TransactionList />
      </div>
    </div>
  );
};

export default Transactions;
