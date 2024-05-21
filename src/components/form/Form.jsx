import React, { useState, useContext, useEffect } from "react";
import Hc2 from "../../assets/hc_2.png";
import Hc3 from "../../assets/hc_3.png";
import Hc4 from "../../assets/hc_4.png";
import Hc5 from "../../assets/hc_5.png";
import Hc6 from "../../assets/hc_6.png";
import Hc7 from "../../assets/hc_7.png";
import { useForm } from "react-hook-form";
import { ModalContext } from "../modal/ModalContext";

import { useParams, useNavigate } from "react-router-dom";

const Form = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { handleModal } = useContext(ModalContext);

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      email: "",
      activity_group_id: "sds",
      priority: "very-high",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  const getCategory = (value) => {
    switch (value) {
      case "umum":
        return <img src={Hc2} alt="hc_2" className="w-[438px]" />;
      case "anak":
        return <img src={Hc3} alt="hc_3" className="w-[438px]" />;
      case "gigi":
        return <img src={Hc4} alt="hc_4" className="w-[438px]" />;
      case "lansia":
        return <img src={Hc5} alt="hc_5" className="w-[438px]" />;
      case "vaksin":
        return <img src={Hc6} alt="hc_6" className="w-[438px]" />;
      case "imunisasi":
        return <img src={Hc7} alt="hc_7" className="w-[438px]" />;
    }
  };

  return (
    <div className="px-[80px] flex items-center justify-center">
      <div className="w-full">
        {" "}
        <div className="text-black text-[40px] font-semibold mt-[70px] w-full text-left">
          Form Pendaftaran
        </div>
        <div className="flex items-center justify-start ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="flex items-center justify-between mt-[20px]">
                <div className="w-[274px] flex items-center justify-between text-[24px]">
                  <div>NIK</div>
                  <div>:</div>
                </div>
                <div className="ml-6">
                  {" "}
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Masukkan NIK"
                    className="w-[480px] outline-none flex items-center justify-start text-black text-[24px] leading-[150%] px-[10px] py-[6px] rounded-lg bg-white"
                  />
                </div>
              </div>
              <div className="flex items-center justify-start mt-[20px]">
                <div className="w-[274px] flex items-center justify-between text-[24px]">
                  <div>Jenis Layanan</div>
                  <div>:</div>
                </div>
                <div className="ml-6 text-[24px]">{slug?.toUpperCase()}</div>
              </div>
              <div className="flex items-center justify-start mt-[20px]">
                <div className="w-[274px] flex items-center justify-between text-[24px]">
                  <div>Tanggal</div>
                  <div>:</div>
                </div>
                <div className="ml-6 text-[24px]">
                  {new Date().toLocaleDateString()}
                </div>
              </div>
              <div className="flex items-center justify-between mt-[20px]">
                <div className="w-[274px] flex items-center justify-between text-[24px]">
                  <div>Keluhan</div>
                  <div>:</div>
                </div>
                <div className="ml-6">
                  {" "}
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Masukkan Keluhan"
                    className="w-[480px] outline-none flex items-center justify-start text-black text-[24px] leading-[150%] px-[10px] py-[6px] rounded-lg bg-white"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mt-[20px]">
                <div className="w-[274px] flex items-center justify-between text-[24px]">
                  <div>No. Whatsapp</div>
                  <div>:</div>
                </div>
                <div className="ml-6">
                  {" "}
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Masukkan No. Whatsapp"
                    className="w-[480px] outline-none flex items-center justify-start text-black text-[24px] leading-[150%] px-[10px] py-[6px] rounded-lg bg-white"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mt-[20px]">
                <div className="w-[274px] flex items-center justify-between text-[24px]">
                  <div>Email</div>
                  <div>:</div>
                </div>
                <div className="ml-6">
                  {" "}
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Masukkan email"
                    className="w-[480px] outline-none flex items-center justify-start text-black text-[24px] leading-[150%] px-[10px] py-[6px] rounded-lg bg-white"
                  />
                </div>
              </div>
              <div className="flex items-center justify-start mt-[20px]">
                <div className="w-[274px] flex items-center justify-between text-[24px]">
                  <div>Penjamin</div>
                  <div>:</div>
                </div>
                <div className="ml-6 text-[24px] flex items-center justify-between">
                  <div className="bg-[#0085FF] px-[40px] py-[8px] text-white rounded-lg">
                    BPJS Kesehatan
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start mt-[40px]">
                <div className="text-[24px] flex items-center justify-between">
                  <div
                    onClick={() => navigate("/pendaftaran")}
                    className="bg-[#49AC82] px-[40px] py-[8px] text-white rounded-lg cursor-pointer"
                  >
                    Kembali
                  </div>
                </div>
                <div className="ml-8 text-[24px] flex items-center justify-between">
                  <div className="bg-[#49AC82] px-[40px] py-[8px] text-white rounded-lg">
                    Submit
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="ml-[100px]">{getCategory(slug)}</div>
        </div>
      </div>
    </div>
  );
};

export default Form;
