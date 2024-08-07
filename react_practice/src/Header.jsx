function Header() {
  return (
    <>
      <nav className=" w-[100%] bg-blue-900 flex justify-between">
        <div className=" mx-14 flex flex-row justify-center">
          <h1 className=" text-[35px] text-white m-2">Codefinity</h1>
          <ul className="flex flex-row">
            <li className=" font-bold m-6 text-[16px] text-white">
              <a href="#">Catalog</a>
            </li>
            <li className=" font-bold m-6 text-[16px] text-white">
              <a href="#">Workspaces</a>
            </li>
            <li className=" font-bold m-6 text-[16px] text-white">
              <a href="#">Blog</a>
            </li>
            <li className=" font-bold m-6 text-[16px] text-white">
              <a href="#">For Teams</a>
            </li>
          </ul>
        </div>
        <div className=" mx-10">
            <button className=" text-white font-bold text-[16px] m-3 px-6 py-2 rounded-full hover:bg-orange-500 hover:text-black">En</button>
            <button className="font-bold text-[16px] m-3 bg-orange-500 px-6 py-2 rounded-full">Get Started</button>
            <button className="font-bold text-white text-[16px] m-3 px-6 py-2 rounded-full
            border">Login</button>
        </div>
      </nav>
    </>
  );
}
export default Header;
