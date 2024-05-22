import React from "react";

const ListAntrian = () => {
  return (
    <div className="px-[80px] pb-[80px] flex items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="text-black text-[40px] font-semibold mt-[70px] w-full text-center">
          <p> Antrian Saat Ini</p>
          <p className="text-[20px] font-normal">
            Silahkan lihat estimasi waktu anda di email secara berkala!
          </p>
        </div>
        <div className="w-[400px] h-[100px] bg-[#45B987] rounded-xl shadow-lg flex flex-col items-center justify-center mt-[30px]">
          <div className="text-white leading-normal">
            <div className="text-[20px] flex items-center justify-start">
              <div className="flex items-center justify-between w-[150px]">
                <div>Tanggal</div>
                <div>:</div>
              </div>
              <div className="ml-[20px]">{new Date().toLocaleDateString()}</div>
            </div>
            <div className="text-[20px] flex items-center justify-start mt-2">
              <div className="flex items-center justify-between w-[150px]">
                <div>Jam</div>
                <div>:</div>
              </div>
              <div className="ml-[20px]">{new Date().toLocaleTimeString()}</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-[38px]">
          <div className="w-[400px] h-[200px] bg-[#45B987] rounded-xl shadow-lg flex flex-col items-center justify-center mt-[30px] px-[30px]">
            <div className="text-white leading-norma text-center">
              <div className="text-[48px]">09</div>
              <div className="text-[32px]">UMUM</div>
            </div>
            <div className="text-white text-[15px] flex items-center justify-start mt-2 w-full">
              <div className="flex items-center justify-start w-[200px]">
                <div>Tanggal :</div>
                <div className="ml-2">{new Date().toLocaleDateString()}</div>
              </div>
            </div>
          </div>
          <div className="w-[400px] h-[200px] bg-[#45B987] rounded-xl shadow-lg flex flex-col items-center justify-center mt-[30px] px-[30px]">
            <div className="text-white leading-norma text-center">
              <div className="text-[48px]">09</div>
              <div className="text-[32px]">ANAK</div>
            </div>
            <div className="text-white text-[15px] flex items-center justify-start mt-2 w-full">
              <div className="flex items-center justify-start w-[200px]">
                <div>Tanggal :</div>
                <div className="ml-2">{new Date().toLocaleDateString()}</div>
              </div>
            </div>
          </div>
          <div className="w-[400px] h-[200px] bg-[#45B987] rounded-xl shadow-lg flex flex-col items-center justify-center mt-[30px] px-[30px]">
            <div className="text-white leading-norma text-center">
              <div className="text-[48px]">02</div>
              <div className="text-[32px]">GIGI</div>
            </div>
            <div className="text-white text-[15px] flex items-center justify-start mt-2 w-full">
              <div className="flex items-center justify-start w-[200px]">
                <div>Tanggal :</div>
                <div className="ml-2">{new Date().toLocaleDateString()}</div>
              </div>
            </div>
          </div>
          <div className="w-[400px] h-[200px] bg-[#45B987] rounded-xl shadow-lg flex flex-col items-center justify-center mt-[30px] px-[30px]">
            <div className="text-white leading-norma text-center">
              <div className="text-[48px]">12</div>
              <div className="text-[32px]">LANSIA</div>
            </div>
            <div className="text-white text-[15px] flex items-center justify-start mt-2 w-full">
              <div className="flex items-center justify-start w-[200px]">
                <div>Tanggal :</div>
                <div className="ml-2">{new Date().toLocaleDateString()}</div>
              </div>
            </div>
          </div>
          <div className="w-[400px] h-[200px] bg-[#45B987] rounded-xl shadow-lg flex flex-col items-center justify-center mt-[30px] px-[30px]">
            <div className="text-white leading-norma text-center">
              <div className="text-[48px]">04</div>
              <div className="text-[32px]">IMUNISASI</div>
            </div>
            <div className="text-white text-[15px] flex items-center justify-start mt-2 w-full">
              <div className="flex items-center justify-start w-[200px]">
                <div>Tanggal :</div>
                <div className="ml-2">{new Date().toLocaleDateString()}</div>
              </div>
            </div>
          </div>
          <div className="w-[400px] h-[200px] bg-[#45B987] rounded-xl shadow-lg flex flex-col items-center justify-center mt-[30px] px-[30px]">
            <div className="text-white leading-norma text-center">
              <div className="text-[48px]">14</div>
              <div className="text-[32px]">VAKSIN</div>
            </div>
            <div className="text-white text-[15px] flex items-center justify-start mt-2 w-full">
              <div className="flex items-center justify-start w-[200px]">
                <div>Tanggal :</div>
                <div className="ml-2">{new Date().toLocaleDateString()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListAntrian;
