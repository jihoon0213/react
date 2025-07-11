import React from "react";

function App19(props) {
  // on... prop: event prop
  // 함수를 값으로 받아서 이벤트가 발생하면 함수를 실행

  function action1() {
    console.log("제목에 마우스 들어감");
  }

  function action2() {
    console.log("제목에서 마우스 나감");
  }

  const action3 = function () {
    console.log("문단에 더블 클릭됨");
  };

  const action4 = () => {
    console.log("버튼 클릭됨");
  };

  // on... 에 들어가는 함수 이름은 handle...
  function handleButton1Click() {
    console.log("버튼1 클릭됨");
  }

  function handleButton2DoubleClick() {
    console.log("두번째 버튼 더블 클릭됨");
  }

  return (
    <div>
      {/*연습 : 버튼1 클릭하면 콘솔에 메세지 출력*/}
      {/*연습 : 버튼2 더블클릭하면 콘솔에 메세지 출력*/}
      {/*연습 : 버튼3 마우스커서가 들어가면 콘솔에 메세지 출력*/}
      <button onClick={handleButton1Click}>버튼1</button>
      <button onDoubleClick={handleButton2DoubleClick}>버튼2</button>
      <button
        onMouseEnter={function () {
          console.log("버튼3에 마우스 들어감");
        }}
        onMouseLeave={() => console.log("버튼3에서 마우스 나감")}
      >
        버튼3
      </button>

      <hr />
      <button onClick={action4} style={{ padding: "10px" }}>
        버튼
      </button>
      <p onDoubleClick={action3} className="bg-dark text-success">
        문단
      </p>
      <h3
        onMouseEnter={action1}
        onMouseLeave={action2}
        className="text-bg-danger"
      >
        제목
      </h3>
    </div>
  );
}

export default App19;
