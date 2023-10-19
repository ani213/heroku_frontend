import * as React from "react";
import LoginPage from "../../components/pages/LoginPage";
import { useLogin } from "../../store/user/hooks";
import { useRememberMe } from "../../store/theme/hooks";

export interface ConnectedLoginPageProps { }
const ConnectedLoginPage: React.FC<ConnectedLoginPageProps> = (props) => {
  const [login] = useLogin();
  const [rememberMe, setRememberMe] = useRememberMe();
  const [state, setState] = React.useState<RememberMe>(rememberMe);
  const onSubmit = (data: LoginFormValues) => {
    login(data);
  }
  React.useEffect(() => {
    if (rememberMe.rememberMe) {
      setState({
        username: rememberMe.username,
        password: (rememberMe.password),
        rememberMe: rememberMe.rememberMe,
      })
    } else {
      setState({
        username: "",
        password: "",
        rememberMe: rememberMe.rememberMe,
      })
    }
  }, [])
  return (
    <>
      <LoginPage onSubmit={onSubmit} InitialLoginValue={state} />
    </>
  );
};
export default ConnectedLoginPage;
