import React from "react";
import Puskemas from "../../assets/puskesmas.png";

const AboutUs = () => {
  return (
    <div className="px-[80px] flex items-center justify-center">
      <div className="w-full">
        <div className="text-black text-[40px] font-semibold mt-[70px] w-full text-center">
          Informasi Pukesmas Mentarau
        </div>
        <div className="flex items-center justify-between mt-[120px] w-full">
          <div className="w-1/2">
            <div className="w-[700px]">
              {" "}
              <div>
                Puskesmas Mentarau adalah puskesmas yang terletak di Kecamatan
                Sekupang, Kota Batam, Kepulauan RIau. Pada website ini, kami
                telah menyediakan 6 layanan puskesmas, yaitu :
              </div>
              <div className="my-3">
                <ul className="list-disc ml-4">
                  <li>Layanan Umum</li>
                  <li>Layanan Anak </li>
                  <li>LLayanan Gigi</li>
                  <li>Layanan Lansia </li>
                  <li>Layanan Vaksin</li>
                  <li>Layanan Imunisasi</li>
                </ul>
              </div>
              <div>
                Pendaftaran online di Puskesmas Mentarau, Kecamatan Sekupang
                bertujuan memudahkan masyarakat mendapatkan layanan kesehatan
                dengan cepat dan efisien. Ini mengurangi waktu tunggu,
                meningkatkan efisiensi pelayanan, dan memberikan akses yang
                lebih luas kepada semua orang.
              </div>
            </div>
          </div>
          <div className="w-1/2">
            {" "}
            <img src={Puskemas} alt="emptylogo" className="w-[533px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
