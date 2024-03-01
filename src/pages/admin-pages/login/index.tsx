import React, {useState, useEffect} from "react";
import GlobalStyles from "../../../styles/GlobalStyles";

import {Container} from "./style"

import ModalLogin from "../../../components/admin-components/modal-login";

const Login: React.FC = () => {
  return (
    <Container>
      <GlobalStyles/>
      <div className="login-area">
          <ModalLogin/>
      </div>
    </Container>
  )
}
export default Login;