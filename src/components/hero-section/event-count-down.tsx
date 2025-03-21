"use client";
import Countdown from 'react-countdown';

export const EventCountDown = () => {

  const CompletionMessage = () => (<h3 className="bg-primary-800 rounded-md flex text-4xl md:text-6xl">The Summit Has Begun! Join us in the clouds! ☁️</h3>);
  const targetDate = new Date('2025-05-27T12:00:00');
  return (
    <div className="mb-8 flex flex-col items-center justify-start -mt-1">
      <Countdown
        date={targetDate}
        renderer={({ days, hours, minutes, seconds, completed }) => {
          if (completed) {
            return <CompletionMessage />;
          }
          return (
            <article className="bg-primary-800 rounded-md flex">
              <div className="flex flex-col items-center justify-center gap-1 md:gap-3 m-4 md:mx-6 pr-4 border-r border-[#4d4d4d]">
                <h3 className="text-4xl md:text-8xl text-center text-white">
                  {days}
                </h3>
                <p className="text-primary-400 text-sm md:text-md">Days</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 md:gap-3 my-4 mr-4 md:mr-6 pr-4 md:pr-6 border-r border-[#4d4d4d]">
                <h3 className="text-4xl md:text-8xl text-center text-white">
                  {hours}
                </h3>
                <p className="text-primary-400 text-sm md:text-md">Hours</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 md:gap-2 my-4 mr-4 md:mr-6 pr-4 md:pr-6 border-r border-[#4d4d4d]">
                <h3 className="text-4xl md:text-8xl text-center text-white">
                  {minutes}
                </h3>
                <p className="text-primary-400 text-sm md:text-md">Minutes</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 md:gap-2 my-4 mr-4 md:mr-6">
                <h3 className="text-4xl md:text-8xl text-center text-white">
                  {seconds}
                </h3>
                <p className="text-primary-400 text-sm md:text-md">Seconds</p>
              </div>

            </article>
          )
        }}
      />
    </div>
  );
};
