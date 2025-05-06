import TransactionList from "@/components/Staff/Transactions/transaction-list";
import { TransitionLink } from "@/components/Utils/transition-link";
import React from "react";
import { useSelector } from "react-redux";

const Transactions = () => {
  const { staff } = useSelector((state) => state.authStaff);
  if (!staff.OfficeStaffInfo.isAdmin) {
    return (
      <div className="h-[80vh] w-full grid place-items-center">
        <div className="text-center">
          <p className="text-3xl font-medium">
            This Page is Accessible for Admin
          </p>
          <p className="mt-5 text-xl">
            Go to Dashboard:{" "}
            <TransitionLink href={"/staff"} className="underline tracking-widest">Dashboard</TransitionLink>{" "}
          </p>
        </div>
      </div>
    );
  }
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
