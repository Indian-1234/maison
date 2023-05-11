import { Button } from 'antd';
import React, { useState } from 'react';
import { Modal } from 'antd';
import './AboutPage.css'
import {  Row, Col, Image } from 'antd';
import { Carousel } from 'antd';

const MyCard = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className='body'>
      <Button variant="contained"  type="dashed" onClick={showModal}>
        VIEW DETAILS
      </Button>
      <Modal
        title={props.location}
        visible={isModalVisible}
        onCancel={handleCancel}
        onOk={handleOk}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} lg={8} style={{ margin: 'auto' }}>
            <Carousel
              style={{ width: '100%', height: '200px', borderRadius: '10px', marginTop: '15px' }}
              fade
              autoplay
              autoplaySpeed={2000}
            >
              <Image style={{ borderRadius: '10px' }} src={props.image2} width="100%" height="200px" />
              <Image style={{ borderRadius: '10px' }} src={props.image1} width="100%" height="200px" />
              <Image style={{ borderRadius: '10px' }} src={props.image3} width="100%" height="200px" />
              <Image style={{ borderRadius: '10px' }} src={props.image4} width="100%" height="200px" />
              <Image style={{ borderRadius: '10px' }} src={props.image5} width="100%" height="200px" />
            </Carousel>
          </Col>
          <Col xs={24} sm={12} lg={16}>
            <center>
              <p style={{ color: 'red' }}>Gender: {props.title}</p>
              <p style={{ color: 'red' }}>Price: {props.content}</p>
              <p style={{ color: 'red' }}>Phone: 123-456-7890</p>
            </center>
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

export default MyCard;
