"use client";

import { useFormik } from "formik";

function VendorForm() {
  const formik = useFormik({
    initialValues: {
      vendorName: "",
      bankAccountNo: "",
      bankName: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      country: "",
      zipCode: "",
    },
    onSubmit: (values) => {
      // Submit form data to server
    },
  });

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen mt-16 pt-11 pb-11 ">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center justify-center p-8 border border-blue-500 rounded-lg shadow-2xl shadow-blue-500"
      >
        <label
          htmlFor="vendorName"
          className="cursor-pointer hover:text-blue-300"
        >
          Vendor Name
        </label>

        <input
          id="vendorName"
          name="vendorName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.vendorName}
          required
          className="p-2 mb-4 text-black border border-gray-200 rounded-md w-80 text-sky-400"
        />
        {/*  */}
        <br />

        <label
          htmlFor="bankAccountNo"
          className="cursor-pointer hover:text-blue-300"
        >
          Bank Account No.
        </label>

        <input
          id="bankAccountNo"
          name="bankAccountNo"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.bankAccountNo}
          required
          className="p-2 mb-4 text-black border border-gray-200 rounded-md w-80"
        />
        <br />
        <label
          htmlFor="bankName"
          className="cursor-pointer hover:text-blue-300"
        >
          Bank Name
        </label>

        <input
          id="bankName"
          name="bankName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.bankName}
          required
          className="p-2 mb-4 text-black border border-gray-200 rounded-md w-80"
        />
        <br />
        <label
          htmlFor="addressLine1"
          className="cursor-pointer hover:text-blue-300"
        >
          Address Line 1
        </label>

        <input
          id="addressLine1"
          name="addressLine1"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.addressLine1}
          required
          className="p-2 mb-4 text-black border border-gray-200 rounded-md w-80"
        />
        <br />
        <label
          htmlFor="addressLine2"
          className="cursor-pointer hover:text-blue-300"
        >
          Address Line 2
        </label>

        <input
          id="addressLine2"
          name="addressLine2"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.addressLine2}
          className="p-2 mb-4 text-black border border-gray-200 rounded-md w-80"
        />
        <br />
        <label htmlFor="city" className="cursor-pointer hover:text-blue-300">
          City
        </label>

        <input
          id="city"
          name="city"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.city}
          required
          className="p-2 mb-4 text-black border border-gray-200 rounded-md w-80"
        />
        <br />

        <label htmlFor="country" className="cursor-pointer hover:text-blue-300">
          Country
        </label>

        <input
          id="country"
          name="country"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.country}
          required
          className="p-2 mb-4 text-black border border-gray-200 rounded-md w-80"
        />
        <br />
        <label htmlFor="zipCode" className="cursor-pointer hover:text-blue-300">
          Zip Code
        </label>

        <input
          id="zipCode"
          name="zipCode"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.zipCode}
          required
          className="p-2 mb-4 text-black border border-gray-200 rounded-md w-80"
        />
        <br />
        <button
          type="submit"
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default VendorForm;
