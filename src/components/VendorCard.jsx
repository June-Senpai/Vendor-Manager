import React from "react";
import Image from "next/image";
import VendorForm from "./VendorForm";

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-black text-white p-8 rounded-xl relative ">
        <button
          onClick={onClose}
          className="absolute top-0 right-1 bg-transparent border-none cursor-pointer "
        >
          <Image
            src="/closeButton.png"
            width={40}
            height={40}
            alt="close-button"
          />
        </button>
        {children}
      </div>
    </div>
  );
};

export default ({ vendor, setVendors }) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] =
    React.useState(false);

  const handleDelete = async (id) => {
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDelete = async (id) => {
    setShowDeleteConfirmation(false);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/delete?id=${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();
    // console.log(data);

    if (data.isSuccess) {
      setVendors((prevVendors) => {
        return prevVendors.filter((vendor) => vendor._id !== id);
      });
    }
  };

  const dialogRef = React.useRef();

  const handleShowEditModal = () => {
    dialogRef.current.showModal();
  };

  const handleCloseEditModal = () => {
    dialogRef.current.close();
  };
  return (
    <>
      <div className="font-bold text-xl mb-2 text-blue-500 hover:text-blue-200 flex justify-between ">
        {vendor.name}
        <div className="flex gap-1">
          <button
            className="hover:border-blue-500 hover:border-2"
            onClick={handleShowEditModal}
          >
            <Image src="/edit.svg" width={20} height={20} alt="edit" />
          </button>
          <button
            onClick={() => handleDelete(vendor._id)}
            className="hover:border-blue-500 hover:border-2"
          >
            <Image src="/delete.svg" width={20} height={20} alt="delete" />
          </button>
        </div>
      </div>
      <p className="hover:text-blue-500">
        Account No: <b className="text-blue-500">{vendor.accountNo}</b>
      </p>
      <p className="hover:text-blue-500">
        Bank Name: <b className="text-blue-500"> {vendor.bankName}</b>
      </p>
      <Modal
        isOpen={showDeleteConfirmation}
        onClose={() => setShowDeleteConfirmation(false)}
      >
        <p className="m-2">Are you sure you want to delete this vendor?</p>
        <div className="flex justify-between">
          <button
            className="bg-red-500 px-4 py-2 rounded-md "
            onClick={() => handleConfirmDelete(vendor._id)}
          >
            Yes
          </button>
          <button
            className="bg-blue-500 px-4 py-2 rounded-md"
            onClick={() => setShowDeleteConfirmation(false)}
          >
            No
          </button>
        </div>
      </Modal>
      <dialog
        className="top-8 bg-black text-white backdrop:bg-gray-600 backdrop:opacity-30 rounded-2xl h-100"
        ref={dialogRef}
        style={{ overflow: "hidden" }}
      >
        <VendorForm
          mode={"edit"}
          vendor={vendor}
          handleCloseEditModal={handleCloseEditModal}
          setVendors={setVendors}
        />
        <button
          className="absolute top-0 right-0 p-2 text-white bg-black rounded-full"
          onClick={handleCloseEditModal}
        >
          <Image
            src="/closeButton.png"
            width={30}
            height={30}
            alt="close-button"
          />
        </button>
      </dialog>
    </>
  );
};
