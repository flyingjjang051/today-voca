import axios from "axios";
import { useState } from "react";
export default function Voca(props) {
  console.log(props);
  const [isVisible, setIsVisible] = useState(true);
  const [isDone, setIsDone] = useState(props.isDone);
  //let isVisible = true;
  console.log(isDone);
  const toggleKor = function () {
    setIsVisible(!isVisible);
  };
  const toggleDone = function () {
    //console.log("toggleDone");

    // axios.get()   read
    // axios.post()  create

    // axios.put()  update
    // axios.delete()  delete
    //console.log(...props);
    axios
      .put(`http://127.0.0.1:5000/voca/${props.id}`, {
        // eng: props.eng,
        // kor: props.kor,
        // id: props.id,
        // day: props.day,
        ...props,
        isDone: !isDone,
      })
      .then((res) => {
        console.log(res);
        if (res.statusText === "OK") {
          setIsDone(!isDone);
        }
      });
  };
  return (
    <li className={isDone ? "done" : ""} data-idx={props.id}>
      <div className="check">
        <label className="checkBox">
          <input type="checkbox" onChange={toggleDone} />
          <span className="label"></span>
          <span>{props.msg}</span>
        </label>
      </div>
      <div className="eng word">{props.eng}</div>
      <div className="kor word">{isVisible && props.kor}</div>
      <div className="btns">
        <button className="btn hidden" onClick={toggleKor}>
          HIDDEN
        </button>
        <button className="btn del">DEL</button>
      </div>
    </li>
  );
}
