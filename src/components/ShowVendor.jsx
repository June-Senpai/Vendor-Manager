"use client";

import { useEffect, useRef, useState } from "react";
import VendorCard from "./VendorCard";

export default function ShowVendor() {
  const [page, setPage] = useState(1);
  const [vendors, setVendors] = useState([]);

  const loaderRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/read?page=${page}`
      );
      const vendors = await response.json();
      setVendors((prev) => [...prev, ...vendors.result]);
    };
    fetchData();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      {
        rootMargin: "50px",
        threshold: 0,
      }
    );
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loaderRef.current]);

  return (
    <div className="mt-5 text-white">
      <h1 className="text-2xl font-bold mb-5 flex hover:text-blue-200 justify-center ">
        Vendor List
      </h1>
      <ul className="flex flex-col gap-8">
        {vendors.map((vendor) => {
          return (
            <li
              // key={vendor._id}
              className="rounded border-t border-blue-300 shadow-2xl shadow-blue-500/50 bg-grey-500 hover:bg-gray-200 text-gray-700 p-4"
            >
              <VendorCard vendor={vendor} setVendors={setVendors} />
            </li>
          );
        })}
      </ul>
      <div id="loader" className="bg-red w-10 h-10" ref={loaderRef}></div>
    </div>
  );
}
