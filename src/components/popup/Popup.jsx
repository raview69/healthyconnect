import React, { useState, useContext, useEffect } from "react";
import { ModalContext } from "../modal/ModalContext";
import { FaUsers, FaCalendarAlt } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Popup = ({ category }) => {
  const { handleModal } = useContext(ModalContext);

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #BFF7FF 0%, #FFF 95%)",
      }}
      className="w-[700px] h-[480px] rounded-xl text-black flex items-center justify-center flex-col shadow-lg"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="text-[48px] font-semibold">Pendaftaran Berhasil! </div>
        <div className="my-2">
          <IoMdCheckmarkCircleOutline className="text-[#4DD784] text-[120px]" />
        </div>
        <div className="text-[24px]">Jenis Pelayanan: {category}</div>
        <div className="text-[24px]">
          Bukti pendaftaran akan dikirim melalui email
        </div>
        <div
          onClick={() => handleModal()}
          className="bg-[#4DD784] px-[40px] py-[8px] text-black rounded-full cursor-pointer font-semibold mt-4"
        >
          Kembali
        </div>
      </div>
    </div>
  );
};

export default Popup;
