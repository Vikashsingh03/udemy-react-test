import {createContext, useState,useContext} from 'react'


// create theme context
const ThemeContext = createContext()

// create theme provider component
export function ThemeProvider({children}) {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light')
  }
const value = {
  theme, 
  toggleTheme,
  isDark: theme === 'dark'}
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

// custom hook to use theme context
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

function ToggleButton() {
  const {toggleTheme, isDark} = useTheme() 
  return (
    <div 
      onClick={toggleTheme} 
      className={`relative w-12 h-6 rounded-full cursor-pointer transition-colors duration-300 ${isDark ? 'bg-blue-500' : 'bg-gray-300'}`}
    >
      <div 
        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${isDark ? 'translate-x-6' : 'translate-x-0'}`}
      ></div>
    </div>
  )
}

function ThemeCard() {
  const {theme,isDark} = useTheme()
  return <div className={`p-4 rounded-lg transition-colors ${theme === 'dark' ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-800"}`}>
    <h3 className='text-lg font-bold mb-2'>Current Theme</h3>
    <p>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</p>
      <h2 className='text-2xl font-bold mb-4'>Theme Toggler</h2>
      <div className='flex items-center space-x-4 mb-4'>
        <ToggleButton/> 
        <span className={`${isDark ? "text-white" : "text-gray-800"}`}>Click the button to toggle theme</span>
      </div>
      <div className={`p-4 rounded-lg ${isDark ? "bg-gray-600 text-white" : "bg-gray-200 text-gray-800"}`}>
        <h3 className='text-lg font-bold mb-2'>Theme Information</h3>
        <p>Current theme: {theme === 'dark' ? 'Dark' : 'Light'}</p>
      </div>
  </div>
}

function ThemeToggler() {
  return (
 <div>
      <ThemeCard/>
    </div>
  )
}

export default ThemeToggler
