import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo_hc.svg";

const Header = () => {
  return (
    <Link to="/">
      <div className="px-[220px] h-[105px] bg-[#49AC82] flex items-center justify-between">
        <div>
          {" "}
          <img src={Logo} alt="emptylogo" className="h-[82px]" />
        </div>
        <div className="flex items-center justify-between text-[20px] text-white font-semibold w-[750px]">
          <Link to="/">Home</Link>
          <Link to="/tentang">Tentang Kami</Link>
          <Link to="/tesst">Jadwal Antrian</Link>
          <Link to="/pendaftaran">Pendaftaran Online</Link>
        </div>
      </div>
    </Link>
  );
};

export default Header;
