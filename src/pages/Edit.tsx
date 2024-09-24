import { useState } from 'react';
import { useData } from '../hooks/useData';

const Edit = () => {
  const { data } = useData({});
  const { refetchData } = useData({ number1: '-', number2: '-' });

  return (
    <div className="flex h-screen justify-center items-center bg-[url(/image.png)] bg-cover bg-center">
      <div className="w-1/2 flex justify-center">
        <div className="w-1/2 flex justify-center items-center transform scale-[150%] border-8 border-slate-900">
          <div className="flex flex-col w-full h-full">
            <div className="text-center text-2xl font-medium tracking-wider my-2">퇴원약 복약상담실</div>
            <div className="w-full border-b border-gray-500 mb-4"></div>
            <div className="relative mb-4">
              <img src="/line.png" className="w-full max-h-32" />
              <div className="absolute inset-0 flex justify-between px-4 w-full">
                <div className="text-white text-[25px] font-semibold w-1/6 min-w-32 mt-2 -ml-2">창구 1</div>
                <div className="text-4xl font-bold tracking-widest w-5/6 text-center -ml-8">{data?.number1}</div>
              </div>
            </div>
            <div className="relative mb-4">
              <img src="/line.png" className="w-full max-h-32" />
              <div className="absolute inset-0 flex justify-between px-4 w-full">
                <div className="text-white text-[25px] font-semibold w-1/6 min-w-32 mt-2 -ml-2">창구 2</div>
                <div className="text-4xl leading-9 font-bold tracking-widest w-5/6 text-center -ml-8">{data?.number2}</div>
              </div>
            </div>
            <div className="flex justify-center items-center text-normal font-bold text-center mb-2">{data?.notice}</div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="flex flex-col items-center justify-center h-screen">
          <EditRow label="창구 1" />
          <EditRow label="창구 2" />
          <div className="mb-4 flex justify-center">
            <button
              className="min-w-16 bg-[#D00024] text-white py-2 px-4 mr-8 rounded focus:outline-none focus:shadow-outline mb-8"
              onClick={() => refetchData()}
            >
              번호 초기화
            </button>
          </div>
          <EditRow label="안내말" />
          <p className="text-gray-400 text-center mt-4">Enter 혹은 적용 버튼을 누르면 Main 화면에 반영됩니다</p>
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

  return (
    <div className="flex items-center mb-8">
      <label className="text-gray-700 text-2xl font-semibold mb-2 min-w-28">{label}</label>
      <input
        className="shadow appearance-none border rounded w-ful min-w-64 py-2 px-3 mr-8 text-gray-700 text-lg leading-tight focus:outline-none focus:shadow-outline"
        value={tempString}
        onChange={(e) => setTempString(e.target.value)}
        onKeyUp={(e) => e.key === 'Enter' && refetchData() && setTempString('')}
        placeholder="입력"
      />
      <button
        className="min-w-16 bg-[#36459F] text-white py-2 px-4 mr-8 rounded focus:outline-none focus:shadow-outline"
        onClick={() => refetchData() && setTempString('')}
      >
        적용
      </button>
    </div>
  );
};
