"use client";

import { useRouter } from "next/navigation";

function VendorForm({
  mode = "create",
  vendor,
  handleCloseEditModal,
  setVendors,
}) {
  const router = useRouter();

  const isEditMode = mode === "edit";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("vendorName");
    const accountNo = formData.get("bankAccountNo");
    const bankName = formData.get("bankName");
    const address1 = formData.get("addressLine1");
    const address2 = formData.get("addressLine2");
    const city = formData.get("city");
    const country = formData.get("country");
    const zip = formData.get("zipCode");
    console.log({
      name,
      accountNo,
      bankName,
      address1,
      address2,
      country,
      city,
      zip,
    });
    console.log({ isEditMode, vendor });
    const vendorData = {
      ...(isEditMode ? { id: vendor._id } : {}),
      name,
      accountNo,
      bankName,
      address1,
      address2,
      country,
      city,
      zip,
    };
    console.log({ e });

    const routeByMode = isEditMode ? "update" : "create";
    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/${routeByMode}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vendorData),
    });
    if (isEditMode) {
      handleCloseEditModal();
      setVendors((prev) => {
        return prev.map((vendor) => {
          if (vendor._id === vendorData.id) {
            console.log({ vendorData });
            return {
              ...vendorData,
              _id: vendorData.id,
            };
          } else {
            return vendor;
          }
        });
      });
    }
    router.push("/");
  };

  const formClass = mode === "edit" ? "" : "pt-11";

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen mt-16 pb-11 ">
      <form
        onSubmit={handleSubmit}
        className={`${
          mode === "edit"
            ? "grid grid-cols-2 -mt-40 shadow-xl shadow-blue-700"
            : "flex flex-col items-center justify-center"
        } p-8 border border-blue-500 rounded-lg shadow-2xl shadow-blue-500`}
      >
        <label
          htmlFor="vendorName"
          className="cursor-pointer hover:text-blue-300"
        >
          Vendor Name
        </label>

        <input
          defaultValue={isEditMode ? vendor.name : ""}
          id="vendorName"
          name="vendorName"
          type="text"
          required
          className="p-2 mb-4 text-black border border-gray-200 rounded-md w-72 text-sky-400"
        />

        <label
          htmlFor="bankAccountNo"
          className="cursor-pointer hover:text-blue-300"
        >
          Bank Account No.
        </label>

        <input
          defaultValue={isEditMode ? vendor.accountNo : ""}
          id="bankAccountNo"
          name="bankAccountNo"
          type="text"
          required
          className="p-2 mb-4 text-black border border-gray-200 rounded-md w-72 text-sky-400"
        />
        <label
          htmlFor="bankName"
          className="cursor-pointer hover:text-blue-300"
        >
          Bank Name
        </label>

        <input
          defaultValue={isEditMode ? vendor.bankName : ""}
          id="bankName"
          name="bankName"
          type="text"
          required
          className="p-2 mb-4 text-black border border-gray-200 rounded-md w-72 text-sky-400"
        />
        <label
          htmlFor="addressLine1"
          className="cursor-pointer hover:text-blue-300"
        >
          Address Line 1
        </label>

        <input
          defaultValue={isEditMode ? vendor.address1 : ""}
          id="addressLine1"
          name="addressLine1"
          type="text"
          required
          className="p-2 mb-4 text-black border border-gray-200 rounded-md w-72 text-sky-400"
        />
        <label
          htmlFor="addressLine2"
          className="cursor-pointer hover:text-blue-300"
        >
          Address Line 2
        </label>

        <input
          defaultValue={isEditMode ? vendor.address2 : ""}
          id="addressLine2"
          name="addressLine2"
          type="text"
          className="p-2 mb-4 text-black border border-gray-200 rounded-md w-72 text-sky-400"
        />
        <label htmlFor="city" className="cursor-pointer hover:text-blue-300">
          City
        </label>

        <input
          defaultValue={isEditMode ? vendor.city : ""}
          id="city"
          name="city"
          type="text"
          required
          className="p-2 mb-4 text-black border border-gray-200 rounded-md w-72 text-sky-400"
        />

        <label htmlFor="country" className="cursor-pointer hover:text-blue-300">
          Country
        </label>

        <input
          defaultValue={isEditMode ? vendor.country : ""}
          id="country"
          name="country"
          type="text"
          required
          className="p-2 mb-4 text-black border border-gray-200 rounded-md w-72 text-sky-400"
        />
        <label htmlFor="zipCode" className="cursor-pointer hover:text-blue-300">
          Zip Code
        </label>

        <input
          defaultValue={isEditMode ? vendor.zip : ""}
          id="zipCode"
          name="zipCode"
          type="text"
          required
          className="p-2 mb-4 text-black border border-gray-200 rounded-md w-72 text-sky-400"
        />
        <button
          type="submit"
          className="col-span-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default VendorForm;
