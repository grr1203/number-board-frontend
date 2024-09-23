import { useData } from '../hooks/useData';

const Home = () => {
  const { data } = useData({});

  return (
    <div className="flex flex-col w-screen h-screen bg-[url(image.png)] bg-cover bg-center">
      <div className="text-center text-7xl font-medium tracking-wider my-8">퇴원약국 복약상담실</div>
      <div className="w-screen border-b border-gray-500 mb-8"></div>
      <div className="h-1/3 relative pt-16 mb-10">
        <img src="/line.png" className="w-full h-44" />
        <div className="absolute inset-0 flex justify-between mx-14 w-full">
          <div className="text-white text-8xl font-semibold mt-28 w-1/6 min-w-64">창구 1</div>
          <div className="text-[150px] font-bold tracking-widest w-5/6 text-center mt-2">{data?.number1}</div>
        </div>
      </div>
      <div className="h-1/3 relative pt-12">
        <img src="/line.png" className="w-full h-44" />
        <div className="absolute inset-0 flex justify-between mx-14 w-full">
          <div className="text-white text-8xl font-semibold mt-24 w-1/6 min-w-64">창구 2</div>
          <div className="text-[150px] font-bold tracking-widest w-5/6 text-center">{data?.number2}</div>
        </div>
      </div>
      <div className="h-1/6 flex justify-center items-center my-4 text-6xl font-bold text-center">{data?.notice}</div>
    </div>
  );
};

export default Home;
