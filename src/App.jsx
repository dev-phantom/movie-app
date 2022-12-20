import Header from "./Components/Header"
import Movies from "./Components/Movies"
import Navbar from "./Components/Navbar"
import Search from "./Components/Search"

function App() {

  return (
    <div className="text-black tablet:overflow-hidden"> 
      <nav>
        <Navbar />
      </nav>
      <header>
        <Header />
      </header>
      <section>
        <Search />
      </section>
      <section>
        <Movies />
      </section>
    </div>
  )
}

export default App
