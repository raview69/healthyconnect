import React, { useState, useEffect } from "react";
import { useGetUserQuery } from "../../redux/services/userApi";
import moment from "moment";

const ListAntrian = () => {
  const { data } = useGetUserQuery();
  const userData = data?.data?.slice(0, 6);

  const tipeAntrian = ["UMUM", "ANAK", "GIGI", "LANSIA", "IMUNISASI", "VAKSIN"];

  const [date, setDate] = useState(new Date());

  let interval;
  useEffect(() => {
    interval = setInterval(() => {
      tick();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const tick = () => {
    setDate(new Date());
  };

  const format = (val) => {
    if (val < 10) {
      val = "0" + val;
    }
    return val;
  };

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
              <div className="ml-[20px]">
                <p>{`${date.getHours()} : ${format(date.getMinutes())} : 
      ${format(date.getSeconds())}`}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-[38px]">
          <>
            {userData?.map((data, index) => {
              return (
                <div className="w-[400px] h-[200px] bg-[#45B987] rounded-xl shadow-lg flex flex-col items-center justify-center mt-[30px] px-[30px]">
                  <div className="text-white leading-norma text-center">
                    <div className="text-[48px]">0{index + 1}</div>
                    <div className="text-[32px]">{tipeAntrian[index]}</div>
                  </div>
                  <div className="text-white text-[15px] flex items-center justify-start mt-2 w-full">
                    <div className="flex items-center justify-start w-[200px]">
                      <div>Tanggal :</div>
                      <div className="ml-2">
                        {new Date().toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex items-center justify-start w-[200px]">
                      <div>Jam :</div>
                      <div className="ml-2">
                        {moment(data?.created_at)
                          .add(1, "hours")
                          .format("HH:mm")}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        </div>
      </div>
    </div>
  );
};

export default ListAntrian;
