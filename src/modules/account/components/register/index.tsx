import Button from "@/components/button/button";
import SubmitButton from "@/components/button/submit-button";
import ErrorMessageDisply from "@/components/error-display";
import Input from "@/components/input/input";
import {
  type ActionResponse,
  signUpUser,
} from "@/lib/_services/account-services/login-actions";
import { getFieldError, getInputValue } from "@/utils/helpers";
import { LOGIN_VIEW } from "modules/account/templates/Login-template";
import { useActionState, useEffect } from "react";

interface IProps {
  setCurrentView: (view: LOGIN_VIEW) => void;
}

const initialState: ActionResponse = {
  ok: false,
  data: null,
  errors: undefined,
  error: "",
  defaultValues: undefined,
};

const roles = [
  {
    label: "Client",
    value: "client",
    description: "Book and manage cleaning requests.",
  },
  {
    label: "Company",
    value: "company",
    description: "Receive and manage service requests.",
  },
  {
    label: "Admin",
    value: "admin",
    description: "Manage users and platform settings.",
  },
];

const Register = ({ setCurrentView }: IProps) => {
  const [state, action, pending] = useActionState(signUpUser, initialState);

  useEffect(() => {
    if (state.ok) {
      const message =
        state.data && typeof state.data === "object" && "message" in state.data
          ? String(state.data.message)
          : "Account created. Please sign in.";

      alert(message);
      setCurrentView(LOGIN_VIEW.SIGN_IN);
    }
  }, [state.ok, state.data, setCurrentView]);

  return (
    <div className="space-y-6">
      <form action={action} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            type="text"
            name="name"
            label="Full name"
            defaultValue={getInputValue("name", state)}
            placeholder="Your name"
            error={getFieldError("name", state)}
            variant="outline"
            size="lg"
            autoComplete="name"
          />
          <Input
            type="tel"
            name="mobile"
            label="Mobile number"
            defaultValue={getInputValue("mobile", state)}
            placeholder="09927163352"
            error={getFieldError("mobile", state)}
            variant="outline"
            size="lg"
            autoComplete="tel"
          />
        </div>

        <Input
          type="email"
          name="email"
          label="Email"
          defaultValue={getInputValue("email", state)}
          placeholder="name@example.com"
          error={getFieldError("email", state)}
          variant="outline"
          size="lg"
          autoComplete="email"
        />

        <fieldset className="space-y-2">
          <legend className="text-sm font-medium text-gray-700">
            Account type
          </legend>
          <div className="grid gap-2 sm:grid-cols-3">
            {roles.map((role) => (
              <label
                key={role.value}
                className="flex min-h-24 cursor-pointer flex-col rounded-md border border-gray-200 bg-gray-50 p-3 text-sm transition hover:border-primary-300 hover:bg-primary-50"
              >
                <span className="flex items-center gap-2 font-medium text-gray-900">
                  <input
                    type="checkbox"
                    name="roles"
                    value={role.value}
                    defaultChecked={state?.defaultValues?.roles?.includes(
                      role.value,
                    )}
                    className="size-4 accent-primary"
                  />
                  {role.label}
                </span>
                <span className="mt-2 text-xs leading-5 text-gray-500">
                  {role.description}
                </span>
              </label>
            ))}
          </div>
          {getFieldError("roles", state) ? (
            <p className="text-sm text-red-600">
              {getFieldError("roles", state)}
            </p>
          ) : null}
        </fieldset>

        <Input
          type="password"
          name="password"
          label="Password"
          placeholder="Create a password"
          error={getFieldError("password", state)}
          variant="outline"
          size="lg"
          autoComplete="new-password"
        />

        <SubmitButton
          pendingText="Creating account..."
          disabled={pending}
          size="lg"
          className="w-full"
        >
          Create account
        </SubmitButton>
      </form>

      {!state.ok && state.error && !state.errors ? (
        <ErrorMessageDisply errorMessage={state.error} />
      ) : null}

      <div className="flex items-center justify-center gap-2 border-t border-gray-200 pt-5 text-sm text-gray-500">
        <span>Already have an account?</span>
        <Button
          type="button"
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          size="xs"
          variant="ghost"
          className="h-auto px-1 text-primary-600 hover:bg-transparent"
        >
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default Register;
