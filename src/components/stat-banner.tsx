import React, { useEffect } from "react";

const StatBanner = () => {
  const [attendeesNum, setAttendeesNum] = React.useState(0);
  const [workshopNum, setWorkshopNum] = React.useState(0);
  const [charityNum, setCharityNum] = React.useState(0);

  const animateNumberIncrement = (
    num: number,
    setNumFn: React.Dispatch<React.SetStateAction<number>>
  ) => {
    const intervalId = setInterval(() => {
      setNumFn((prev) => {
        if (prev < num) {
          return prev + num / 100;
        } else {
          clearInterval(intervalId);
          return num;
        }
      });
    }, 30);
    return intervalId;
  };

  useEffect(() => {
    const intervalId1 = animateNumberIncrement(780, setAttendeesNum);
    const intervalId2 = animateNumberIncrement(21, setWorkshopNum);
    const intervalId3 = animateNumberIncrement(10000, setCharityNum);

    return () => {
      clearInterval(intervalId1);
      clearInterval(intervalId2);
      clearInterval(intervalId3);
    };
  }, []);

  return (
    <div
      className={`w-full flex justify-center md:gap-10 gap-5 max-md:py-5 ${
        !attendeesNum || !workshopNum || !charityNum ? "opacity-0" : ""
      }`}
    >
      <NumberBox title="In-Person Attendees">
        {attendeesNum.toFixed(0).toLocaleString()}
      </NumberBox>
      <NumberBox title="Talks & Workshops">
        {workshopNum.toFixed(0).toLocaleString()}
      </NumberBox>
      <NumberBox title="Charity Donation Goal">
        ${Number(charityNum.toFixed(0)).toLocaleString()}
      </NumberBox>
    </div>
  );
};

export default StatBanner;

const NumberBox: React.FC<{ children: React.ReactNode; title: string }> = ({
  children,
  title
}) => {
  return (
    <div className={`flex flex-col flex-1 items-center`}>
      <span className="md:text-3xl text-2xl font-bold bg-clip-text text-transparent text-white">
        {children}+
      </span>
      <span className="md:text-md text-sm text-center">{title}</span>
    </div>
  );
};
