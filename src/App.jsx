import { Routes } from "react-router-dom";
import "./App.scss";
import Button from "./component/Button";
import { useState } from "react";
import Input from "./component/Input";
import Navbar from "./component/Navbar";
import UserInfoEdit from "./page/userInfoEdit";

function App() {
  return (
    <div className="w-full justify-center items-center flex flex-col">
      <header className="flex items-center h-[100px] w-5/6">
        <Navbar />
      </header>
      <main className="flex items-center justify-center max-w-[1350px] ">
        <UserInfoEdit />
      </main>
      {/* <div className="flex gap-[5px]">
        <Button label={"수 정"}></Button>
        <Button label={"장바구니"}></Button>
        <Button
          label={"회원가입"}
          onClick={() => {
            alert("test");
          }}
        ></Button>
        <Button variant={"orange"} size={"sm"} label={"삭제"}></Button>
        <Button size={"sm"} label={"미열람"} isActive={true}></Button>
        <Button size={"sm"} label={"열람"} isActive={false}></Button>
        <Button size={"sm"} label={"모집중"} isActive={true}></Button>
        <Button size={"sm"} label={"마감"} isActive={false}></Button>
        <Button size={"sm"} label={"수정"}></Button>
        <Button variant={"lightgray"} size={"sm"} label={"수정"}></Button>
        <Button size={"wlg"} label={"지원자 자세히 보기"}></Button>
      </div>
      <div className="flex gap-[10px] mt-[50px]">
        <Input type="text" placeholder="아이디" />
        <Input type="password" placeholder="비밀번호" />
        <Input type="text" placeholder="닉네임" isValid={false} />
        <input
          type="text"
          className="bg-green-50 border border-green-500 text-green-500  placeholder-green-700 text-sm rounded-lg ring-green-500 focus:border-green-500 block w-full p-2.5 "
        />
        <input type="text" className="blue-border" /> */}
      {/* </div> */}
    </div>
  );
}

export default App;
