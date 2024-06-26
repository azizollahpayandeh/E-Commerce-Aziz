import Button from "@/Components/Modules/Button/Button";
import ButtonWithoutBg from "@/Components/Modules/ButtonWithoutBg/ButtonWithoutBg";
import SideBar from "@/Components/Modules/SideBar/SideBar";
import React, { useState } from "react";

export default function page() {
  return (
    <>
      <div className="grid lg:grid-cols-4  place-content-center place-self-center  mt-[100px]">
        <div className="col-span-1 hidden lg:block">
          <SideBar />
        </div>

        <div className="lg:col-span-3 place-content-center place-self-center w-[90vw]  lg:w-[600px] xl:w-[750px]  2xl:w-[830px] shadow-lg rounded-md ">
          <div className="all p-[20px] lg:p-[20px] 2xl:p-[50px] xl:p-[30px]">
            <h1 className="text-[20px] text-red font-[500]">Edit Your Profile</h1>
            <div className=" flex flex-col gap-5 pt-[10px]">
              <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
                <div className="flex gap-1 flex-col">
                  <label htmlFor="Md" className="font-[500] text-[15px]">First Name</label>
                  <input type="text" placeholder="Md" id="Md" className="bg-[#F7F7FC] pl-[7px] text-[14px] w-[100%] lg:w-[260px] xl:w-[325px] 2xl:w-[345px] h-[50px] rounded-md"/>
                </div>

                <div className="flex gap-1 flex-col">
                  <label htmlFor="Rimel" className="font-[500] text-[15px]">Last Name</label>
                  <input type="text" placeholder="Rimel" id="Rimel" className="bg-[#F7F7FC] pl-[7px] text-[14px] w-[100%] lg:w-[260px] xl:w-[325px] 2xl:w-[345px] h-[50px] rounded-md"/>
                </div>
              </div>
              <div className="flex gap-5 lg:gap-10 flex-col lg:flex-row">
                <div className="flex gap-1 flex-col">
                  <label htmlFor="email" className="font-[500] text-[15px]">Email</label>
                  <input type="text" placeholder="email" id="email" className="bg-[#F7F7FC] pl-[7px] text-[14px] w-[100%] lg:w-[260px] xl:w-[325px] 2xl:w-[345px] h-[50px] rounded-md"/>
                </div>
                <div className="flex gap-1 flex-col">
                  <label htmlFor="Address" className="font-[500] text-[15px]">Address</label>
                  <input type="text" placeholder="Address" id="Address" className="bg-[#F7F7FC] pl-[7px] text-[14px] w-[100%] lg:w-[260px] xl:w-[325px] 2xl:w-[345px] h-[50px] rounded-md"/>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-[20px]">
              <p className="font-[500] text-[15px]">Password Changes</p>
              <input type="text" placeholder="Current Passwod" className="bg-[#F7F7FC] pl-[7px] text-[14px] w-[100%] h-[50px] rounded-md"/>
              <input type="text" placeholder="New Passwod" className="bg-[#F7F7FC] pl-[7px] text-[14px] w-[100%] h-[50px] rounded-md"/>
              <input type="text" placeholder="Confirm New Passwod" className="bg-[#F7F7FC] pl-[7px] text-[14px] w-[100%] h-[50px] rounded-md"/>
            </div>

            <div className="flex lg:justify-end justify-center pt-[20px] gap-2">
              <ButtonWithoutBg value="cancel"/>
              <Button value="save changes"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
