import { useParams } from "react-router-dom";

export default function Day() {
  const { day } = useParams(); // useParam() hook은 상단 네이게이션의 params값을 받을 때 쓴다.
  console.log(day);
  return (
    <>
      <div className="container dayBox">
        <h2 className="title">Day-{day}</h2>

        <div className="btns">
          {/* 
            <button className="btn">BACK</button> 
            여기에 뒤로 돌아가기 버튼 만들기...
          */}
        </div>
      </div>
    </>
  );
}
