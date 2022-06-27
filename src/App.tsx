import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.scss';
import Information from './components/Information';
import Form from './components/Form';
import RaffleGift from './components/RaffleGift';
import RaffleInfos from './components/RaffleInfos';
import GoToShop from './components/GoToShop';
import waves from './public/img/svg/海浪.svg'

function App() {
  const formRef = useRef<HTMLDivElement>(null)

  const handleFormBtnClick = () => formRef.current?.scrollIntoView({ behavior: 'smooth' })


  return (
    <div className='container'>
      <Information handleFormBtnClick={handleFormBtnClick} />
      <div className='waves-move-wrapper'>
        <div className='waves-move'>
          <img src={waves} alt='waves' />
          <img src={waves} alt='waves' />
          <img src={waves} alt='waves' />
          <img src={waves} alt='waves' />
        </div>
      </div>

      {/* <img src={waves} alt='waves' /> */}
      {/* <div style={{ backgroundImage: `url(${waves})` }} /> */}
      <Form formRef={formRef} />
      <RaffleGift />
      <RaffleInfos />
      <GoToShop />
    </div>
  );
}

export default App;
