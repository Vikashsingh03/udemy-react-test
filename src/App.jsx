import "./App.css";
import Card from "./components/Card.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
    <Header/>
    <Hero/>

    <div className="bg-gray-900">

      <div className="flex items-center justify-center">
        <h1 className=" flex text-center w-100 text-white mt-8 dark:text-sky-400 font-bold text-2xl border-2 padding-4 rounded">
        Learn to Integrating Tailwind CSS
      </h1>
      </div>


      <div className="flex items-center justify-center gap-5 ">
        <Card  
        title="Buy Python Course"
        imgUrl = "https://images.unsplash.com/photo-1649180556628-9ba704115795?q=80&w=1162&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        btnText = "Join Now"/>
        
        <Card 
        title = "Buy Node.js Course"
        imgUrl="https://media.istockphoto.com/id/1347542592/photo/node-js-inscription-against-laptop-and-code-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=SacKSD7fEYyWEqaXXagsWO0nPPtel7PRmhMAB0Tp7h8="
        btnText = "Join Now"/>

        <Card 
        title = "Buy AI Course"
        imgUrl="https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8MHx8fDA%3D"
        btnText = "Join Now"/>

      </div>
      <Footer/>
      </div>
  
    </>
  )
}

export default App;
