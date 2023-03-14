import * as css from "./style/style";
import React, { useState } from "react";
import { FormOutlined } from "@ant-design/icons";
import {
  CallBacksFireBaseType,
  CallBacksType,
  StatesType,
} from "./AppContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./pages/Todo";
import NotFound from "./pages/NotFound";
import TodoEdit from "./pages/TodoEdit";
import Login from "./pages/Login";
import Join from "./pages/Join";
type propsType = {
  states: StatesType;
  callBacks: CallBacksType;
  callBacksFireBase: CallBacksFireBaseType;
  userLogin: Boolean;
};

function App({ states, callBacks, callBacksFireBase, userLogin }: propsType) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    callBacksFireBase.fbDeleteUser();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <BrowserRouter>
      <css.Wrapper className="wrap">
        <css.Inner className="inner">
          <css.AppTitle>
            <FormOutlined />
            TodoList App
          </css.AppTitle>
        </css.Inner>
        {/* 라우팅 영역 */}
        <Routes>
          {/* 로그인 화면 */}
          <Route
            path="/login"
            element={
              <Login
                userLogin={userLogin}
                callBacksFireBase={callBacksFireBase}
              />
            }
          />
          {/* 회원가입 */}
          <Route
            path="/join"
            element={
              <Join
                callBacksFireBase={callBacksFireBase}
                userLogin={userLogin}
              />
            }
          />
          {/* 첫화면 : 입력창, 목록창 */}
          <Route
            path="/"
            element={
              <Todo
                states={states}
                callBacks={callBacks}
                userLogin={userLogin}
              />
            }
          />
          {/* 수정화면 : 편집창 */}
          <Route
            path="/edit/:uid"
            element={<TodoEdit states={states} callBacks={callBacks} />}
          />
          {/* 주소오류 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </css.Wrapper>
    </BrowserRouter>
  );
}

export default App;
