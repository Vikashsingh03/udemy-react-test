import "./Index.css";
import Card from "./components/Card.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Hero />

      <div className="bg-gray-900 py-6 px-3 sm:px-5 md:px-10">
        
        {/* Heading */}
        <div className="flex items-center justify-center">
          <h1 className="mt-2 text-sky-400 font-bold text-lg sm:text-2xl md:text-3xl border border-gray-500 rounded-lg px-4 py-2 text-center">
            Chai Aur Code Courses
          </h1>
        </div>

        {/* Cards Section */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          <Card
            title="Buy Python Course"
            imgUrl="https://images.unsplash.com/photo-1649180556628-9ba704115795?q=80&w=1162&auto=format&fit=crop"
            btnText="Join Now"
          />

          <Card
            title="Buy Node.js Course"
            imgUrl="https://media.istockphoto.com/id/1347542592/photo/node-js-inscription-against-laptop-and-code-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=SacKSD7fEYyWEqaXXagsWO0nPPtel7PRmhMAB0Tp7h8="
            btnText="Join Now"
          />

          <Card
            title="Buy AI Course"
            imgUrl="https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?w=600&auto=format&fit=crop&q=60"
            btnText="Join Now"
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
