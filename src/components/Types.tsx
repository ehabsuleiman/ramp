import React, { useState, useEffect } from "react";
import ReactMomemnt from "react-moment";

const FalsyComponenet: React.FC = () => {
  const [curDate, setCurDate] = useState(Date.now());

  // Rotate Benefit Details
  useEffect(() => {
    const id = setInterval(() => {
      setCurDate(Date.now());
    }, 1000);

    //used here to clean up interval if component used is destroyed
    return () => clearInterval(id);
  }, [curDate]);

  //react moment to pretty display the date and time
  return (
    <div>
      {" "}
      <ReactMomemnt format="dddd, MMMM DD, YYYY hh:mm:ss A" local>
        {curDate}
      </ReactMomemnt>
    </div>
  );
};

interface IArray {
  data: Array<any>;
}

const ArrayComponent: React.FC<IArray> = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
};
const OtherComponent: React.FC<any> = ({ data }) => {
  return <div>{data}</div>;
};

export { FalsyComponenet, OtherComponent, ArrayComponent };
