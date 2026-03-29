function Card({ title = "Default", btnText = "Check it Out", imgUrl }) {
  return (
    <div className="w-full px-3 sm:px-4 md:px-0 flex justify-center mt-4">
      
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
        
 
        <img
          className="w-full h-36 sm:h-44 md:h-52 object-cover"
          src={imgUrl}
          alt="card"
        />

   
        <div className="p-3 sm:p-4 md:p-5">
          
  
          <h2 className="text-gray-800 font-semibold text-sm sm:text-base md:text-lg leading-tight">
            {title}
          </h2>

          <p className="mt-2 text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            animi ab voluptate.
          </p>

          <div className="mt-3 sm:mt-4">
            <button className="cursor-pointer w-full sm:w-auto px-4 py-2 text-xs sm:text-sm md:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-500 active:scale-95 transition-all duration-200">
              {btnText}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Card;