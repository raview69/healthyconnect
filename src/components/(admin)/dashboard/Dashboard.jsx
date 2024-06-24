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
    <div className="px-[80px] pb-[80px] flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {userData?.map((data, index) => {
            return (
              <div key={index} className="flex">
                <div className="mr-2">{data.id}</div>
                <div>{data.email}</div>
              </div>
            );
          })}
        </div>

        <button>Kirim antrian selanjutnya</button>
      </form>
    </div>
  );
};

export default Dashboard;
