"use client";

import { useEffect, useState } from "react";

export default function ShowVendor() {
  const [page, setPage] = useState(1);
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/read?page=${page}`
      );
      const vendors = await response.json();
      console.log({ vendors });
      setVendors(vendors.result);
    };
    fetchData();
  }, []);

  return (
    <div className="mt-5 text-white ">
      vendor list
      <ul className="flex flex-col gap-20">
        {vendors.map((vendor) => {
          return (
            <li className="border-8 py-36 gap-1 mt-16" key={vendor._id}>
              {vendor.name}
              {vendor.accountNo}
              {vendor.bankName}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
