import React from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaTooth } from "react-icons/fa";
import { FaUserDoctor, FaChildren } from "react-icons/fa6";
import Imunisasi from "../../assets/imunisasi.svg";
import Lansia from "../../assets/lansia.svg";
import { TbVaccine } from "react-icons/tb";

const CategoryPendaftaran = () => {
  return (
    <div className="px-[80px] pb-[80px] flex items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="text-black text-[40px] font-semibold mt-[70px] w-full text-center">
          Pendaftaran Online
        </div>
        <div className="grid grid-cols-3 gap-4 mt-[38px]">
          {" "}
          <Link
            to="/pendaftaran/umum"
            className="w-[400px] h-[250px] bg-[#45B987] rounded-xl shadow-lg flex flex-col items-center justify-center mt-[30px]"
          >
            <div>
              <FaUserDoctor className="w-[128px] h-[128px] text-white" />
            </div>
            <div className="text-white leading-normal px-6 mt-3">
              <div className="text-[32px] ">UMUM</div>
            </div>
          </Link>
          <Link
            to="/pendaftaran/anak"
            className="w-[400px] h-[250px] bg-[#45B987] rounded-xl shadow-lg flex flex-col items-center justify-center mt-[30px]"
          >
            <div>
              <FaChildren className="w-[128px] h-[128px] text-white" />
            </div>
            <div className="text-white leading-normal px-6 mt-3">
              <div className="text-[32px] ">ANAK</div>
            </div>
          </Link>
          <Link
            to="/pendaftaran/gigi"
            className="w-[400px] h-[250px] bg-[#45B987] rounded-xl shadow-lg flex flex-col items-center justify-center mt-[30px]"
          >
            <div>
              <FaTooth className="w-[128px] h-[128px] text-white" />
            </div>
            <div className="text-white leading-normal px-6 mt-3">
              <div className="text-[32px] ">GIGI</div>
            </div>
          </Link>
          <Link
            to="/pendaftaran/lansia"
            className="w-[400px] h-[250px] bg-[#45B987] rounded-xl shadow-lg flex flex-col items-center justify-center mt-[30px]"
          >
            <div>
              <img
                src={Lansia}
                alt="emptylogo"
                className="w-[128px] h-[128px]"
              />
            </div>
            <div className="text-white leading-normal px-6 mt-3">
              <div className="text-[32px] ">LANSIA</div>
            </div>
          </Link>
          <Link
            to="/pendaftaran/vaksin"
            className="w-[400px] h-[250px] bg-[#45B987] rounded-xl shadow-lg flex flex-col items-center justify-center mt-[30px]"
          >
            <div>
              <TbVaccine className="w-[128px] h-[128px] text-white" />
            </div>
            <div className="text-white leading-normal px-6 mt-3">
              <div className="text-[32px] ">VAKSIN</div>
            </div>
          </Link>
          <Link
            to="/pendaftaran/imunisasi"
            className="w-[400px] h-[250px] bg-[#45B987] rounded-xl shadow-lg flex flex-col items-center justify-center mt-[30px]"
          >
            <div>
              <img
                src={Imunisasi}
                alt="emptylogo"
                className="w-[128px] h-[128px]"
              />
            </div>
            <div className="text-white leading-normal px-6 mt-3">
              <div className="text-[32px] ">IMUNISASI</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryPendaftaran;
