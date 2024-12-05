const Navbar = () => {
  return (
    <div className="flex w-full justify-between font-bold">
      <h1 className="text-start text-2xl">
        actor <br />
        project
      </h1>
      <nav className="flex items-end gap-[400px] text-xl">
        <ul className="flex gap-[200px]">
          <li>캐스팅 공고</li>
          <li>배우 프로필</li>
          <li>극장 정보</li>
        </ul>
        <section className="flex gap-[30px]">
          <p>로그인</p>
          <p>회원가입</p>
        </section>
      </nav>
    </div>
  );
};
export default Navbar;
