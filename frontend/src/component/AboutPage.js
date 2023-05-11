 import React from 'react'
 import { Card ,Image} from 'antd';
 import myImage from './images/h1.jpg';
 import { Carousel } from 'antd';
 import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

 function AboutPage() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  // };
   return (
    <div className='body'>
    
    <Carousel style={{ width: '100%',height:'500px'}} fade autoplay>
    
      <img  src={myImage} width="100%" height="500px"></img>
    
    
      <img  src='https://img.staticmb.com/mbcontent//images/uploads/2020/7/rent.jpg' width="100%" height="500px"></img>
    
    
      <img  src={myImage} width="100%" height="500px"></img>
    
    
     <img   src='https://img.staticmb.com/mbcontent//images/uploads/2020/7/rent.jpg' width="100%" height="500px"></img>
    
  </Carousel>
      {/* <Image src={myImage} style={{ height: '400px',width:'1300px',borderRadius:'10px'}}/> */}
     
      <Card >
     <div >
      
        {/* <Navbar /> */}
         {/* <div>
             <div>
                 <img src='https://img.staticmb.com/mbcontent//images/uploads/2020/7/rent.jpg' width="100%" height="300px"></img>
             </div>
         </div> */}
         <p>Launched in 2023, maison.com, it deals with every aspect of the consumers’ needs in the real life rental system. It is an online forum where buyers, sellers and brokers/agents can exchange information about real estate properties quickly, effectively and inexpensively. At maison.com, you can advertise a property, search for a property, browse through properties, build your own property microsite, and keep yourself updated with the latest news and trends making headlines in the realty sector.</p>
         <h2>why maison?</h2>
         <p>Launched in 2023, maison.com, it deals with every aspect of the consumers’ needs in the real life rental system. It is an online forum where buyers, sellers and brokers/agents can exchange information about real estate properties quickly, effectively and inexpensively. At maison.com, you can advertise a property, search for a property, browse through properties, build your own property microsite, and keep yourself updated with the latest news and trends making headlines in the realty sector.</p>

     </div>
     </Card>
     </div>
   )
 }

export default AboutPage;