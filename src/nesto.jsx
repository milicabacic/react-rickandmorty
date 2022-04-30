import { useState, useEffect, useMemo} from "react";

const Dugme = (props) => {
  const [counter, setCounter] = useState(0);
  const [age, setAge] = useState(27);


  const a = useMemo(()=>{
      return "p"
  }, [])

  useEffect(() => {
    console.log("Cao");
    return () => {}
  });

  return (
    <div>
      {counter}
      <button onClick={(e) => setCounter((c) => c + 1)}>Change name</button>
    </div>
  );
};

export default Dugme;
