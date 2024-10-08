import { useState } from 'react';
import { useData } from '../hooks/useData';

const Edit = () => {
  const { data } = useData({});

  return (
    <div className="flex sm:flex-row flex-col h-screen sm:justify-center items-center bg-[url(/image.png)] bg-cover bg-center overflow-hidden">
      <div className="sm:w-1/2 flex justify-center mt-20 -mb-24 sm:mt-0 sm:mb-0">
        <div className="w-1/2 flex justify-center items-center transform sm:scale-[150%] scale-[140%] border-slate-900 lg:border-8 border-4">
          <div className="flex flex-col w-full h-full overflow-hidden">
            <div className="text-center text-[#222] font-medium tracking-wide my-2 lg:text-2xl md:text-lg sm:text-sm sm:my-1">
              퇴원약 복약상담실
            </div>
            <div className="w-full border-b border-gray-500 mb-4"></div>
            <div className="relative mb-4">
              <img src="/line.png" className="w-full max-h-32" />
              <div className="absolute inset-0 flex justify-between px-4 w-full">
                <div
                  className="text-white font-semibold w-1/6 min-w-32 mr-2 
                  lg:text-xl lg:mt-2 lg:-ml-2 
                  md:text-base md:mt-1 md:-ml-3 md:mr-3 
                  sm:text-xs sm:mt-1 sm:-ml-3 sm:mr-4
                  text-lg mt-1 -ml-2"
                >
                  창구 1
                </div>
                <div
                  className="font-bold w-5/6 text-center 
                lg:text-2xl lg:-ml-16 md:text-xl md:-ml-20 sm:text-base sm:-ml-24 text-xl -ml-16"
                >
                  {data?.number1}
                </div>
              </div>
            </div>
            <div className="relative mb-2 sm:mb-3">
              <img src="/line.png" className="w-full max-h-32" />
              <div className="absolute inset-0 flex justify-between px-4 w-full">
                <div
                  className="text-white font-semibold w-1/6 min-w-32 mr-3 
                  lg:text-xl lg:mt-2 lg:-ml-2 
                  md:text-base md:mt-1 md:-ml-3 md:mr-3 
                  sm:text-xs sm:mt-1 sm:-ml-3 sm:mr-4
                  text-lg mt-1 -ml-2"
                >
                  창구 2
                </div>
                <div
                  className="font-bold w-5/6 text-center 
                lg:text-2xl lg:-ml-16 md:text-xl md:-ml-20 sm:text-base sm:-ml-24 text-xl -ml-16"
                >
                  {data?.number2}
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center text-[#333] font-semibold text-center mb-2 lg:text-base md:text-sm sm:text-xs">
              {data?.notice}
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 lg:scale-[100%] md:scale-[85%] sm:scale-[69%] scale-[75%] sm:ml-0 ml-4">
        <div className="flex flex-col items-center justify-center h-screen">
          <EditRow label="창구 1" />
          <EditRow label="창구 2" />
          <EditRow label="안내말" />
          <p className="text-gray-400 text-center mt-4 w-screen">
            Enter 혹은 적용 버튼을 누르면 Main 화면에 반영됩니다
          </p>
        </div>
      </div>
    </div>
  );
};

export default Edit;

const EditRow = ({ label }) => {
  const [tempString, setTempString] = useState('');
  const paramters =
    label === '안내말'
      ? { notice: tempString }
      : label === '창구 1'
      ? { number1: tempString }
      : { number2: tempString };
  const { refetchData } = useData(paramters);
  const { refetchData: refetchData1 } = useData({ number1: '-' });
  const { refetchData: refetchData2 } = useData({ number2: '-' });

  return (
    <div className="flex items-center mb-8 ml-8 mr-8">
      <label className="text-gray-700 text-2xl font-semibold mb-2 min-w-28">{label}</label>
      <input
        className="shadow appearance-none border rounded min-w-40 py-2 px-3 mr-8 text-gray-700 sm:text-lg text-xl leading-tight focus:outline-none focus:shadow-outline"
        value={tempString}
        onChange={(e) => setTempString(e.target.value)}
        onKeyUp={(e) => e.key === 'Enter' && refetchData() && setTempString('')}
        placeholder="입력"
      />
      <button
        className="min-w-16 bg-[#36459F] text-sm text-white py-2 px-4 mr-6 rounded focus:outline-none focus:shadow-outline"
        onClick={() => refetchData() && setTempString('')}
      >
        적용
      </button>
      {label !== '안내말' ? (
        <button
          className="min-w-20 text-sm bg-[#D00024] text-white py-2 px-2 mr-8 rounded focus:outline-none focus:shadow-outline"
          onClick={() => (label === '창구 1' ? refetchData1() : refetchData2())}
        >
          초기화
        </button>
      ) : (
        <button className="min-w-20 py-2 px-3 mr-8 rounded"></button>
      )}
    </div>
  );
};
