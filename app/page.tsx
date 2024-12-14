export default function Home() {
 
 return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="text-3xl w-1/2 px-10 md:block hidden  ">
        <img
          src={"/pictures/faceBook.png"}
          alt="facebook logo"
          width={300}
          height={100}
        />
        <p className=" mt-3">
          Facebook helps you connect and share <br /> with the people in your
          life.
        </p>
      </div>
      <div className="bg-white flex flex-col p-5 rounded-xl w-1/3 "  >
        <input
          className=" m-2 border border-1 border-gray-100  p-3 rounded-md focus:outline-1 outline-blue-600"
          type="text"
          placeholder="Email address or phone number"
        />

        <input
          className=" m-2 border border-1 border-gray-100  p-3 rounded-md focus:outline-1 outline-blue-600"
          type="password"
          placeholder="password"
        />
        <button   className="bg-blue-600 text-sm my-2 py-2 text-lg font-bold text-white rounded.md hover:bg-blue-700">
        log In
        </button>
        <p className="cursor-pointer text-blue-600 text-blue-600 text -sm my-2 text-center hover:underline">
          {" "}
          forgotten password?
        </p>
        <span className="my-2">
          <hr />
        </span>
        <button className=" bg-green-500 my-2 py-2 px-2 text-lg font-bold text-white rounded-md hover:green-600 w-fit mx-auto">
          Create new account
        </button>
      </div>
    </div>
  );
}
