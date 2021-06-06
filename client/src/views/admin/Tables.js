import React from "react";

// components

import CardTable from "components/Cards/CardTable.js";
import FormTransaction from "../../components/Forms/FormTransaction";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <FormTransaction />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable />
        </div>
      </div>
    </>
  );
}