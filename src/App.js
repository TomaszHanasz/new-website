import "./App.css";

function App() {
  return (
    <>
      <div className=" container  to-pink-500 mx-auto  ">
        <nav className=" bg-gradient-to-r from-indigo-500 via-purple-500 flex justify-between px-4 drop-shadow-xl">
          <p1 className=" text-white">Logo</p1>
          <ul className=" flex-row gap-10 justify-center text-white max-sm:hidden py-2">
            <li>Home</li>
            <li>About us</li>
            <li>Careers</li>
          </ul>
          <button className=" rounded-full bg-orange-600 px-2 text-white hover:rotate-90 hover:bg-blue-500">
            Sign In
          </button>
        </nav>
        <section>
          <div className=" bg-white h-3/4 flex py-10 px-5 items-center text-center">
            <div>
              <h1 className=" font-bold text-3xl mb-4">William Shakespare</h1>
              <p className=" text-sm font-semibold italic">
                Love all, trust a few, Do wrong to none: be able for thine enemy
                Rather in power than use; and keep thy friend Under thy own
                life's key: be check'd for silence, But never tax'd for speech.
              </p>
            </div>
            <img
              className=" mx-auto w-6/12 object-cover h-full rounded-lg drop-shadow-lg"
              src="https://nationaltoday.com/wp-content/uploads/2022/04/50-William-Shakespeare-1200x834.jpg"
              alt="william"
            />
          </div>
        </section>
        <section className="flex justify-between gap-2 font-semibold">
          <div className="flex h-40 w-1/4 bg-red-400 items-center justify-center text-white hover:bg-green-500 hover:text-yellow-500 rounded-lg">
            <h1>Goals</h1>
          </div>
          <div className="flex h-40 w-1/4 bg-red-400 items-center justify-center text-white hover:bg-green-500 hover:text-yellow-500 rounded-lg">
            <h1>Targets</h1>
          </div>
          <div className="flex h-40 w-1/4 bg-red-400 items-center justify-center text-white hover:bg-green-500 hover:text-yellow-500 rounded-lg">
            <h1>Principles</h1>
          </div>
          <div className="flex h-40 w-1/4 bg-red-400 items-center justify-center text-white hover:bg-green-500 hover:text-yellow-500 rounded-lg">
            <h1>Statements</h1>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
