import React from 'react';
import { Button } from 'antd';
import { Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'Web Development',
    content: 'Our innovative web and mobile payment solutions make transactions fast, secure, and effortless for both you and your customers. Say goodbye to the hassle of traditional payment methods and embrace the future of seamless payments.',
  },
  {
    key: '2',
    title: 'Mobile App Development',
    content: "Collaborate and achieve your goals as a team. Join forces, share ideas and leverage each others strengths to reach new heights together. Let's work together and create a brighter future for us all.",
  },
  {
    key: '3',
    title: 'Design Web and Mobile',
    content: 'Boost your productivity and streamline your workday with our cutting-edge app. Stay organized, prioritize tasks, and never miss a deadline. Get more done in less time and achieve your goals faster than ever before.',
  },
]

function Home() {
  return (
    <div id="home" className="heroBlock">
      <Carousel>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large">Learn More</Button>
                  <Button href='#home' size="large"><i className="fas fa-desktop"></i> Watch a Demo</Button>
                </div>
              </div>
            </div>  
          );
        })}
      </Carousel>
    </div>
  );
}

export default Home;