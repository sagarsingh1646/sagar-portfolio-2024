import FeaturedWork from "../components/FeaturedWork"
import IntroBody from "../components/IntroBody"
import Navbar from "../components/Navbar"


function HomePage() {
  return (
    <div className="bg-neutral-900 min-h-screen">
        <Navbar/>
      <IntroBody/>
      <FeaturedWork/>
    </div>
  )
}

export default HomePage