import Button from "@/components/button/button";
import SubmitButton from "@/components/button/submit-button";
import ErrorMessageDisply from "@/components/error-display";
import Input from "@/components/input/input";
import { signInUser } from "@/lib/_services/account-services/login-actions";
import { LOGIN_VIEW } from "modules/account/templates/Login-template";
import { useActionState, useState } from "react";

interface IProps {
  setCurrentView: (view: LOGIN_VIEW) => void;
}
const Login = ({ setCurrentView }: IProps) => {
  const [state, action, pending] = useActionState(signInUser, {});
  const [mobile, setMobile] = useState("");
  return (
    <div className="space-y-2">
      <form className="space-y-2" action={action}>
        <Input
          name="mobile"
          type="tel"
          autoComplete="tel"
          error={!state.ok ? state.errors?.mobile : undefined}
          placeholder="09927163352"
          variant="outline"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <Input
          name="password"
          type="password"
          error={!state.ok ? state.errors?.password : undefined}
        />
        <SubmitButton pendingText="login..." disabled={pending}>
          sign in
        </SubmitButton>
      </form>
      <div className="flex gap-4 items-center">
        <span>not a member?</span>
        <Button
          variant="ghost"
          size="xs"
          className="text-primary-600"
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
        >
          register
        </Button>
      </div>
      {!state.ok && state.error && !state.errors ? (
        <ErrorMessageDisply errorMessage={state.error} />
      ) : null}
    </div>
  );
};

export default Login;
