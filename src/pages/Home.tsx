import { useState } from 'react';

const Home = () => {
  const [number1] = useState(2121);
  const [number2] = useState(91);
  const [notice] = useState('해당하는 창구로 상담받으러 오세요');

  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="text-center text-7xl font-medium tracking-wider my-8">퇴원약국 복약상담실</div>
      <div className="w-screen border-b border-gray-500 mb-6"></div>
      <div className="h-2/5 relative pt-12 mb-10">
        <img src="/line.png" className="w-full h-44" />
        <div className="absolute inset-0 flex justify-between mx-14 w-full">
          <div className="text-white text-8xl font-semibold mt-24 w-1/4 min-w-64">창구 1</div>
          <div className="text-[150px] font-bold tracking-widest w-5/6 text-center">{number1}</div>
        </div>
      </div>
      <div className="h-2/5 relative pt-12">
        <img src="/line.png" className="w-full h-44" />
        <div className="absolute inset-0 flex justify-between mx-14 w-full">
          <div className="text-white text-8xl font-semibold mt-24 w-1/4 min-w-64">창구 2</div>
          <div className="text-[150px] font-bold tracking-widest w-5/6 text-center">{number2}</div>
        </div>
      </div>
      <div className="h-32 flex justify-center items-center my-4 text-6xl font-bold text-center">{notice}</div>
    </div>
  );
};

export default Home;
