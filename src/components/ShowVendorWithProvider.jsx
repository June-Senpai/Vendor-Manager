"use client";
import { SessionProvider } from "next-auth/react";
import ShowVendor from "./ShowVendor";

export default function ShowVendorWithProvider() {
  return (
    <SessionProvider>
      <ShowVendor />
    </SessionProvider>
  );
}
