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

const initialState = {
  ok: false,
  error: "",
  errors: undefined as Record<string, string> | undefined,
} as const;

const Login = ({ setCurrentView }: IProps) => {
  const [state, action, pending] = useActionState(signInUser, initialState);
  const [mobile, setMobile] = useState("");

  return (
    <div className="space-y-6">
      <form className="space-y-4" action={action}>
        <Input
          label="Mobile number"
          name="mobile"
          type="tel"
          autoComplete="tel"
          error={!state.ok ? state.errors?.mobile : undefined}
          placeholder="09927163352"
          variant="outline"
          size="lg"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="Enter your password"
          error={!state.ok ? state.errors?.password : undefined}
          variant="outline"
          size="lg"
        />
        <SubmitButton
          pendingText="Signing in..."
          disabled={pending}
          size="lg"
          className="mt-2 w-full"
        >
          sign in
        </SubmitButton>
      </form>
      {!state.ok && state.error && !state.errors ? (
        <ErrorMessageDisply errorMessage={state.error} />
      ) : null}
      <div className="flex items-center justify-center gap-2 border-t border-gray-200 pt-5 text-sm text-gray-500">
        <span>New here?</span>
        <Button
          type="button"
          variant="ghost"
          size="xs"
          className="h-auto px-1 text-primary-600 hover:bg-transparent"
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
        >
          Create an account
        </Button>
      </div>
    </div>
  );
};

export default Login;
