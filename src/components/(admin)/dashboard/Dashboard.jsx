import React, { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useGetUserQuery } from "../../../redux/services/userApi";
import { useSendEmailMutation } from "../../../redux/services/userApi";

const Dashboard = () => {
  const [thisEmail, setthisEmail] = useState("");
  const { handleSubmit, setValue } = useForm({
    defaultValues: {
      email: thisEmail,
    },
  });

  const { data } = useGetUserQuery();
  const [sendEmail] = useSendEmailMutation();
  const userData = data?.data;
  console.log(userData);

  const onSubmit = async () => {
    const data = {
      email: thisEmail,
    };
    await sendEmail(data);
  };

  useEffect(() => {
    if (userData) {
      setthisEmail(userData[0].email);
      setValue("email", userData[0].email);
    }
  }, [userData]);

  return (
    <div className="px-[80px] py-[80px] flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <table class="table-auto w-[800px] text-[20px]">
            <thead>
              <tr>
                <th className="border-2">No</th>
                <th className="border-2">Email</th>
                <th className="border-2">Jenis Layanan</th>
                <th className="border-2">Keluhan</th>
              </tr>
            </thead>
            <tbody>
              {userData?.map((data, index) => {
                return (
                  <tr key={index}>
                    <td className="border-[2px] p-2">{index + 1}</td>
                    <td className="border-[2px] p-2">{data.email}</td>
                    <td className="border-[2px] p-2">{data.jenis_layanan}</td>
                    <td className="border-[2px] p-2">{data.keluhan}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <button className="bg-[#49AC82] px-[40px] py-[8px] text-white rounded-lg cursor-pointer mt-4">
          Antrian Selanjutnya
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
