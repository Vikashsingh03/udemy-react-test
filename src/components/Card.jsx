function Card({title = "Default",btnText = "Check it Out",imgUrl}) {
  return (
    <>
      <div className=" max-w-sm mt-5 bg-white border-gray-100 overflow-hidden shadow transition-shadow rounded-xl">
        <img
          className="object-cover w-full h-48"
          src={imgUrl}
          alt="demo"
        />
        <div className="p-4">
          <h2 className="text-gray-800 font-bold">{title}</h2>
          <p className="mt-2 text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            animi ab voluptate, aperiam amet pariatur?
          </p>
        <div className="flex items-center justify-center">
        <button className="px-4 bg-blue-600 text-white rounded-lg py-2 cursor-pointer hover:bg-blue-400 mt-2">
          {btnText}
          </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default Card;
