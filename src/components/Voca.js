import axios from "axios";
import { useEffect, useState } from "react";
export default function Voca(props) {
  const [info, setInfo] = useState(props);
  console.log(info);
  const [isVisible, setIsVisible] = useState(true);
  const [isDone, setIsDone] = useState(props.isDone);
  //let isVisible = true;
  console.log(isDone);
  const toggleKor = function () {
    setIsVisible(!isVisible);
  };
  const toggleDone = () => {
    axios
      .put(`https://jjang051-voca.herokuapp.com/voca/${props.id}`, {
        isDone: !isDone,
      })
      .then((res) => {
        if (res.data.update === "ok") {
          console.log("바꼈다");
          setIsDone(!isDone);
        }
      });
  };
  const deleteVoca = () => {
    if (window.confirm("다외웠나요?")) {
      //console.log("delete");
      axios.delete(`https://jjang051-voca.herokuapp.com/voca/${props.id}`).then((res) => {
        if (res.data.delete === "ok") {
          setInfo({ id: -1 });
        }
      });
    }
  };
  if (info.id === -1) {
    return null;
  }
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
        <button className="btn del" onClick={deleteVoca}>
          DEL
        </button>
      </div>
    </li>
  );
}
