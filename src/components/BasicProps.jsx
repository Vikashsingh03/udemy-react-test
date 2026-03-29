import { useState } from "react";

function Button({ text, color, size = "medium", onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full sm:w-auto
        rounded-lg font-medium transition-all duration-300
        
        ${size === "small" ? "text-xs px-3 py-1" : ""}
        ${size === "medium" ? "text-sm px-4 py-2" : ""}
        ${size === "large" ? "text-base px-6 py-3" : ""}

        ${color === "primary" ? "bg-blue-500 hover:bg-blue-600 text-white" : ""}
        ${color === "secondary" ? "bg-gray-500 hover:bg-gray-600 text-white" : ""}
        ${color === "danger" ? "bg-red-500 hover:bg-red-600 text-white" : ""}
        ${color === "success" ? "bg-green-500 hover:bg-green-600 text-white" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
    {text}
    </button>
  );
}

function BasicProps() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <section className="p-4 sm:p-6 md:p-8 bg-white rounded-xl shadow-2xl  mx-auto">
      
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-800">
        Basic Props
      </h2>

      <p className="text-xs sm:text-sm text-gray-500">
        Props are argument passed to React components. They allow you to pass
        data from parent to child components.
      </p>

      <div className="space-y-4 mt-6">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
          Different Colors
        </h3>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
          <Button text="Primary Button" color="primary" onClick={() => setClickCount(clickCount + 1)} />
          <Button text="Secondary Button" color="secondary" onClick={() => setClickCount(clickCount + 1)} />
          <Button text="Danger Button" color="danger" onClick={() => setClickCount(clickCount + 1)} />
          <Button text="Success Button" color="success" onClick={() => setClickCount(clickCount + 1)} />
        </div>
      </div>

      <div className="space-y-4 mt-6">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
          Different Sizes
        </h3>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
          <Button text="Small" color="primary" size="small" onClick={() => setClickCount(clickCount + 1)} />
          <Button text="Medium" color="secondary" size="medium" onClick={() => setClickCount(clickCount + 1)} />
          <Button text="Large" color="secondary" size="large" onClick={() => setClickCount(clickCount + 1)} />
        </div>
      </div>

      <div className="space-y-4 mt-6">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
          Disabled State
        </h3>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
          <Button text="Enabled Button" color="primary" onClick={() => setClickCount(clickCount + 1)} />
          <Button
            text="Disabled Button"
            color="primary"
            disabled={true}
            onClick={() => alert("This should not fire")}
          />
        </div>
      </div>

     
      <div className="mt-6 p-3 sm:p-4 bg-blue-50 rounded-lg text-center sm:text-left">
        <p className="text-sm sm:text-lg font-medium text-gray-700">
          Click Count :{" "}
          <span className="text-blue-600 font-bold">{clickCount}</span>
        </p>
      </div>
    </section>
  );
}

export default BasicProps;