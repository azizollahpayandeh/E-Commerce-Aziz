import React from "react";

export default function SideBar() {
  return (
    <div className="flex flex-col">
      <h1 className="font-[500] 2xl:text-[18px] ">Manage My Account</h1>
      <div className="pt-[15px] 2xl:w-[50%] xl:w-[70%] pb-[15px] flex flex-col gap-3">
        <p className="text-[15px]  opacity-60 pl-[20px] font-[500] cursor-pointer hover:text-hoverbtn">
          My Profile
        </p>
        <p className="text-[15px]  opacity-60 pl-[20px] font-[500] cursor-pointer hover:text-hoverbtn">
          Address Book
        </p>
        <p className="text-[15px]  opacity-60 pl-[20px] font-[500] cursor-pointer hover:text-hoverbtn">
          My Payment Options
        </p>
      </div>
      <h1 className="font-[500] 2xl:text-[18px]" >My Orders</h1>
      <div className="pt-[15px] 2xl:w-[50%] xl:w-[70%] pb-[15px] flex flex-col gap-3">
        <p className="text-[15px]  opacity-60 pl-[20px] font-[500] cursor-pointer hover:text-hoverbtn">
          My Returns
        </p>
        <p className="text-[15px]  opacity-60 pl-[20px] font-[500] cursor-pointer hover:text-hoverbtn">
          My Cancellations
        </p>
      </div>
      <h1 className="font-[500] 2xl:text-[18px]" >My Washlist</h1>
      <p className="text-[15px] 2xl:w-[40%] xl:w-[40%]  opacity-60 pl-[20px] pt-[5px] font-[500] cursor-pointer hover:text-hoverbtn">
        Lets See
      </p>
    </div>
  );
}
