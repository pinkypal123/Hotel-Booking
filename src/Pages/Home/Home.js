import Feature from "../../Components/feature/Feature";
import FProperty from "../../Components/fProperty/FProperty";
import Fpropertyy from "../../Components/fProperty/Fpropertyy";
import Header from "../../Components/header/Header";
import Headerr from "../../Components/header/Headerr";
import Navbar from "../../Components/navbar/Navbar";
import Property from "../../Components/property/Property";
import './Home.css'
export default function Home() {
  return (
    <>
      <Navbar />
      <Headerr />
      {/* <Header/> */}
  
      <div className="homeContainer">
        {/* <Feature/> */}
        
        <h1 className="homeTitle">Browser by property type</h1>
      </div>
      <div className="HomeContainer">
        <div className="pContainer">
          <img src="https://cdn.pixabay.com/photo/2015/01/10/11/39/hotel-595121_960_720.jpg" className='pListImg' />
          <div className='pListTitles'>
            <h1>Hotel</h1>
          </div>
        </div>
        <div className="pContainer">
          <img src="https://cdn.pixabay.com/photo/2014/10/16/08/39/bedroom-490779_960_720.jpg" className='pListImg' />
          <div className='pListTitles'>
            <h1>BedRoom</h1>
          </div>
        </div>
        <div className="pContainer">
          <img src="https://cdn.pixabay.com/photo/2016/11/14/02/28/apartment-1822409_960_720.jpg" className='pListImg' />
          <div className='pListTitles'>
            <h1>Resorts</h1>
          </div>
        </div>
        <div className="pContainer">
          <img src="https://cdn.pixabay.com/photo/2020/01/15/18/02/room-4768553_960_720.jpg" className='pListImg' />
          <div className='pListTitles'>
            <h1>Guest</h1>
          </div>
        </div>
      </div>
      <section className="section2">
        <h1 className="homeTitle">About the TAJ Hotel</h1>
        {/* about1 */}
        <div className="about-1">
          <div className="about-1-area">
            <div className="about-header">
              Few words about us
            </div>
            <div className="about-content">
              At TAJ Hotel Group we strive to be the first
              choice in the mind of guests, owners and talent.
              In our journey to achieve this, we practice strong
              beliefs and actions that respect the diversity of
              people, the community, ethics and the planet.
            </div>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className="about-img" />
          </div>
        </div>

        <div className="about-1">
          <div>
            <img src="https://images.unsplash.com/photo-1605651531144-51381895e23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className="about-img" />
          </div>
          <div className="about-1-area">
            <div className="about-header">
              Taking Care Of You
            </div>
            <div className="about-content">
              Hotel TAJ is a free hotel  that will set your accommodation
              from the competition. Even if youplatforms primarily, still, the must
              Hotel TAJ is a fretemplate that will set your from the competition.
              Even if you rely onprimarily, still, the official website is a must
              Hotel TAJ is a free template
            </div>
          </div>
        </div>
      </section>

    </>
  )
}