import React from 'react'
import BasicProps from './components/BasicProps.jsx'
import ChildrenProps from './components/ChildrenProps.jsx'
import ComplexProps from './components/ComplexProps.jsx'
import RefProps from './components/RefProps.jsx'
import ThemeToggler,{ThemeProvider} from './components/ThemeToggler.jsx'


function Navigation(){
  const isDark  = true
  const sections = [
    {id: 'basic', label: 'Basic Props', icon:'📦'},
    {id: 'children', label: 'Children Props', icon:'👶'},
    {id: 'complex', label: 'Complex Props', icon:'🧩'},
    {id: 'ref', label: 'Ref Props', icon:'🔗'},
    {id: 'theme', label: 'Theme Props', icon:'🎨'}
  ]
  return <nav className={`sticky top-0  z-50 shadow-md transition-colors ${isDark ? "bg-gray-800" : "bg-white"}`} >

    <div className='container mx-auto px-4 py-4'>
      <div className='flex flex-wrap justify-center gap-2'>
        {sections.map((section)=>(
          <button 
          className={`px-4 py-2 rounded-lg cursor-pointer font-medium bg-blue-600 text-white transition-all hover:bg-sky-800`}
          key={section.id}>
            <span className='mr-2'>{section.icon}</span>
            {section.label}
          </button>
        ))}
      </div>
    </div>

  </nav>

}


function AppContent(){
  const isDark = true
  return <div className={`min-h-screen bg-gray-800`}>
    <Navigation/>
    <div className='container mx-auto px-4 py-8 '>
      <header
      className={`text-center mb-12 transition-colors 
      ${
        isDark ? "text-white" : "text-gray-800"

      }`}>
        <h1 className='text-5xl font-bold mb-4'>React Props Explained</h1>
        <p
        className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}>A comprehensive guide to understanding props in React.</p>

        <div className={`mt-4 inline-block px-6 py-2  rounded-full ${isDark ? "text-gray-300 font-bold"  : "text-gray-600"}`}>
          Built with React + Vite + Tailwind CSS
        </div>

      </header>

      <div className='space-y-8'>
        <div id='basic' className='scroll-mt-200'><BasicProps/></div>
        <div id='children' className='scroll-mt-200'><ChildrenProps/></div>
        <div id='complex' className='scroll-mt-200'><ComplexProps/></div>
        <div id='ref' className='scroll-mt-200'><RefProps/></div>
        <div id='theme' className='scroll-mt-200'><ThemeToggler/></div>
      </div>

      <footer
      className={`mt-12 text-center p-8 transition-colors ${ isDark ?"text-gray-400" :"text-gray-600"}`}>
        <p className='text-sm'>Made with 💖 using npm, Vite, React and Tailwind CSS</p>
      </footer>

    </div>
  </div>
}

function App() {
  return (
    <ThemeProvider>
      <AppContent/>
    </ThemeProvider>
  )
}

export default App
