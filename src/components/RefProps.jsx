import { useRef, forwardRef } from "react";

const CustomInput = forwardRef(({ label, className, placeholder }, ref) => {
  return (
    <div className="mb-4 sm:mb-5">
      <label className="block text-xs sm:text-sm font-semibold text-gray-600 mb-1 sm:mb-2">
        {label}
      </label>

      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base 
        border border-gray-300 rounded-lg bg-gray-50 
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white 
        transition-all duration-200 ${className}`}
      />
    </div>
  );
});

CustomInput.displayName = "CustomInput";

function RefProps() {
  const inputRef = useRef(null);
  const secondInputRef = useRef(null);

  const focusInput = () => inputRef.current?.focus();

  const getInputValue = () => {
    if (inputRef.current) {
      alert(`Input Value: ${inputRef.current.value}`);
    }
  };

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  const focusSecondInput = () => secondInputRef.current?.focus();

  const getSecondInputValue = () => {
    if (secondInputRef.current) {
      alert(`Second Input Value: ${secondInputRef.current.value}`);
    }
  };

  const clearSecondInput = () => {
    if (secondInputRef.current) {
      secondInputRef.current.value = "";
      secondInputRef.current.focus();
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-white shadow-lg rounded-xl ">
      
      <section className="w-full bg-white rounded-2xl">
        
        <div className="mb-5 sm:mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Ref Props Demo
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Learn how to control inputs using refs in React
          </p>
        </div>

        <div className="bg-gray-100 p-4 sm:p-6 rounded-xl shadow-lg">
          <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-4">
            Try it Out
          </h3>

          <CustomInput
            ref={inputRef}
            label="First Input with Ref"
            placeholder="Type something..."
          />

          <CustomInput
            ref={secondInputRef}
            label="Second Input with Ref"
            placeholder="Type something else..."
          />

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-5">
            
            <button
              onClick={focusInput}
              className="w-full sm:w-auto px-4 py-2 text-sm sm:text-base bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-all"
            >
              Focus First
            </button>

            <button
              onClick={focusSecondInput}
              className="w-full sm:w-auto px-4 py-2 text-sm sm:text-base bg-purple-500 text-white rounded-lg cursor-pointer hover:bg-purple-600 transition-all"
            >
              Focus Second
            </button>

            <button
              onClick={getInputValue}
              className="w-full sm:w-auto px-4 py-2 text-sm sm:text-base bg-green-500 text-white rounded-lg cursor-pointer hover:bg-green-600 transition-all"
            >
              Get First Value
            </button>

            <button
              onClick={clearInput}
              className="w-full sm:w-auto px-4 py-2 text-sm sm:text-base bg-red-500 text-white rounded-lg cursor-pointer hover:bg-red-600 transition-all"
            >
              Clear First
            </button>

            <button
              onClick={getSecondInputValue}
              className="w-full sm:w-auto px-4 py-2 text-sm sm:text-base bg-green-500 text-white rounded-lg cursor-pointer hover:bg-green-600 transition-all"
            >
              Get Second Value
            </button>

            <button
              onClick={clearSecondInput}
              className="w-full sm:w-auto px-4 py-2 text-sm sm:text-base bg-red-500 text-white rounded-lg cursor-pointer hover:bg-red-600 transition-all"
            >
              Clear Second
            </button>
          </div>
        </div>
      </section>

      <div className="border-l-4 border-yellow-500 bg-yellow-50 mt-5 p-4 sm:p-6 rounded-lg shadow-md">
        <h3 className="text-base sm:text-lg font-semibold text-blue-700 mb-3">
          When to Use Refs
        </h3>

        <ul className="space-y-2 list-disc pl-5 text-xs sm:text-sm text-gray-700">
          <li>Managing focus, text selection, or media playback.</li>
          <li>Triggering imperative animations.</li>
          <li>Integrating with third party DOM libraries.</li>
          <li>Accessing DOM measurements (scroll position, element size).</li>
        </ul>
      </div>

    </div>
  );
}

export default RefProps;