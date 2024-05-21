import React from "react";
import Hc1 from "../../assets/hc_1.png";
import { FaUsers, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="px-[80px] flex items-center justify-center">
      <div className="w-full">
        <div className="flex items-center justify-between w-full">
          <div className="w-[700px]">
            <div className="text-[#49AC82]  text-[40px] font-bold leading-normal">
              Sistem Antrian Online Puskesmas Mentarau Batam
            </div>
            <div className="mt-[50px] text-[24px] leading-normal">
              Kesehatan memburuk tetapi jadwal padat ? Tenang saja! dengan
              layanan kami, anda bisa mendaftarkannya secara Online loh!
            </div>
          </div>
          <div>
            {" "}
            <img src={Hc1} alt="emptylogo" className="w-[473px]" />
          </div>
        </div>
        <div className="flex items-center justify-center mt-[30px]">
          <div className="flex items-center justify-between w-[900px]">
            {" "}
            <Link
              to="/pendaftaran"
              className="w-[400px] h-[334px] bg-[#45B987] rounded-xl shadow-lg flex flex-col items-center justify-center"
            >
              <div>
                <FaUsers className="w-[128px] h-[128px] text-white" />
              </div>
              <div className="text-white leading-normal w-[280px] mt-3">
                <div className="text-[26px] font-semibold">
                  Pendaftaran Online
                </div>
                <div className="text-[20px] font-light mt-2">
                  Daftar secara online tanpa perlu mengantri di puskesmas
                </div>
              </div>
            </Link>
            <div className="w-[400px] h-[334px] bg-[#45B987] rounded-xl shadow-lg flex flex-col items-center justify-center">
              <div>
                <FaCalendarAlt className="w-[128px] h-[120px] text-white" />
              </div>
              <div className="text-white leading-normal w-[280px] mt-3">
                <div className="text-[26px] font-semibold">
                  Pendaftaran Online
                </div>
                <div className="text-[20px] font-light mt-2">
                  Daftar secara online tanpa perlu mengantri di puskesmas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
