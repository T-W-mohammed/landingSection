import './App.scss';
import tImg from"./img/teacher.png";
import Typed from 'react-typed/dist/react-typed';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {AiOutlineHome,AiOutlinePhone} from "react-icons/ai";
import {GiNewspaper} from "react-icons/gi";
import {useEffect} from "react";
function App () {
  useEffect(()=>{
AOS.init();
},[]);
 
   return (
 
   	
  <div className="glass">
    <div className="container"
                data-aos="fade-up-left" 
                data-aos-delay="150"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
    >
      <nav>
        <div className="logo">
        logo
        </div>
        <ul>
          <li><AiOutlineHome/></li>
          <li><GiNewspaper/></li>
          <li><AiOutlinePhone/></li>
        </ul>
      </nav>
      <div className="content">
        <div className="left"
                data-aos="fade-up-left" 
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
          >
          <h3>Hello!</h3>
          <h2>This is <Typed
                    strings= {['<span><i>Mohammed Badr !</i></span>']}
            typeSpeed= {300}
            backDelay={200}
            backSpeed= {200}

            loop
                />
                <br/> 
            & I am a <Typed
                    strings= {['<i>Teacher</i>']}
            typeSpeed= {300}
            backDelay={200}
            backSpeed= {200}

            loop
                /> & a Web <Typed
                    strings= {['<i>Developer .</i>']}
            typeSpeed= {300}
            backDelay={200}
            backSpeed= {200}

            loop
                /></h2>
          <p>Welcome to my website.</p>
        </div>
        <div className="right"
                data-aos="fade-up-right" 
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
          >
           <div className="img">
            <img src={tImg} alt="teacher"/>
           </div>
        </div>
      </div>
    </div>
  </div>
   		
   		
	
   		
  
    
  );
 
}

export default App;



