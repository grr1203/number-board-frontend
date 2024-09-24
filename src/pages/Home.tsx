import { useEffect, useRef } from 'react';
import { useData } from '../hooks/useData';

const Home = () => {
  const { data } = useData({});
  const audioRef = useRef<HTMLAudioElement>(null);

  // Server-Sent Events (SSE)로 서버의 이벤트 처리
  useEffect(() => {
    const eventSource = new EventSource(`/events`);
    eventSource.onmessage = function (event) {
      console.log('Received message:', event.data);
      if (event.data === 'refresh') {
        localStorage.setItem('playAudio', 'true'); // 재생 플래그 설정
        window.location.reload(); // 페이지 새로고침
      } else if (event.data === 'refreshNotice') {
        window.location.reload();
      }
    };
    eventSource.onerror = (error) => console.error('SSE Error:', error);

    // 컴포넌트가 언마운트될 때 SSE 연결 해제
    return () => eventSource.close();
  }, []);

  useEffect(() => {
    const shouldPlayAudio = localStorage.getItem('playAudio');
    if (shouldPlayAudio === 'true') {
      const checkRefAndPlay = () => {
        if (audioRef.current) {
          audioRef.current.play();
          localStorage.removeItem('playAudio'); // 재생 후 다시 플래그 제거
        } else {
          // audioRef가 아직 null인 경우, 500ms 후 다시 시도
          setTimeout(checkRefAndPlay, 500);
        }
      };
      checkRefAndPlay();
    }
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen bg-[url(/image.png)] bg-cover bg-center">
      <div className="text-center text-7xl font-medium tracking-wider my-8">퇴원약 복약상담실</div>
      <audio src="/bell.mp3" ref={audioRef} />
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
