"use client";

function VendorForm() {
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
    const vendorData = {
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
    fetch(`${process.env.NEXT_PUBLIC_URL}/api/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vendorData),
    });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen mt-16 pt-11 pb-11 ">
      <form
        onSubmit={handleSubmit}
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
          required
          className="p-2 mb-4 text-black border border-gray-200 rounded-md w-80 text-sky-400"
        />
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
