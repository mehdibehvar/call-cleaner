
import Input from "@/components/input/input";
import { useActionState, useEffect } from "react";
import SubmitButton from "@/components/button/submit-button";
import { signUpUser } from "@/lib/_services/account-services/login-actions"; // Assuming this returns { ok: boolean, data: { values?: Record<string, any> }, errors?: Record<string, string>, error?: string }
import { LOGIN_VIEW } from "modules/account/templates/Login-template";
import Button from "@/components/button/button";
import ErrorMessageDisply from "@/components/error-display";
import { getFieldError, getInputValue } from "@/utils/helpers";

interface IProps {
  setCurrentView: (view: LOGIN_VIEW) => void;
}

const Register = ({ setCurrentView }: IProps) => {
  // Initialize state with a default structure 
  const initialState = {
    ok: false,
    data: null,
    errors: undefined,
    error: undefined,
    defaultValue: undefined,
  };
  const [state, action, pending] = useActionState(signUpUser, initialState);

///here we have got to use useEffect hook to handle side effects.here the state of 
/// comp has changed and as useEffect can handle mounting and updating and unmounting of a component 
  useEffect(() => {
    if (state.ok) {
      alert(state.data.message);
      setCurrentView(LOGIN_VIEW.SIGN_IN);
      return;
    }
  }, [state.ok, setCurrentView]);

  return (
    <div className="space-y-2">
      <form action={action} className="space-y-3">
        <Input
          type="text"
          name="name"
          // Use the helper to get the value
          defaultValue={getInputValue("name",state)}
          placeholder="Name"
          error={getFieldError("name",state)}
          variant="outline"
        />
        <Input
          type="tel"
          name="mobile"
          defaultValue={getInputValue("mobile",state)}
          placeholder="Mobile"
          error={getFieldError("mobile",state)}
          variant="outline"
          autoComplete="tel"
        />
        <Input
          type="email"
          name="email"
          defaultValue={getInputValue("email",state)}
          placeholder="Email"
          error={getFieldError("email",state)}
          variant="outline"
          autoComplete="email"
        />
        {/* Checkbox handling needs care - they submit an array of values */}
        <div className="flex  gap-1">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-100">
            admin
          </label>
          <input
            type="checkbox"
            name="roles"
            value="admin"
            defaultChecked={state?.data?.values?.roles?.includes("admin")}
          />
          <label className="text-sm font-medium text-gray-700 dark:text-gray-100">
            client
          </label>
          <input
            type="checkbox"
            name="roles"
            value="client"
            defaultChecked={state?.data?.values?.roles?.includes("client")}
          />
          <label className="text-sm font-medium text-gray-700 dark:text-gray-100">
            company
          </label>
          <input
            type="checkbox"
            name="roles"
            value="company"
            defaultChecked={state?.data?.values?.roles?.includes("company")}
          />
        </div>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          error={getFieldError("password",state)}
          variant="outline"
          autoComplete="new-password"
        />
        <SubmitButton pendingText="Signing up..." disabled={pending}>
          Sign Up
        </SubmitButton>
      </form>
      <div className="flex gap-4 items-center">
        <span>already is a member?</span>
        <Button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          size={"xs"}
          variant={"ghost"}
          className="text-primary-600"
        >
          login
        </Button>
      </div>
      {/* Display general error if no specific field errors */}
      {!state.ok && state.error && !state.errors ? (
        <ErrorMessageDisply errorMessage={state.error} />
      ) : null}
    </div>
  );
};

export default Register;
// ```

// ### Key Changes and Considerations:

// 1.  **`initialState`**: I've added an `initialState` object to `useActionState`. This helps define the expected structure of `state` right from the start, making it clearer how to access `values`.
// 2.  **`getInputValue` Helper**: This function centralizes the logic for retrieving the previous input value for a given field name. It looks for the value in `state.data.values`.
// 3.  **`getFieldError` Helper**: Similar to `getInputValue`, this cleans up how you access field-specific errors.
// 4.  **`defaultValue` and `error` Props**: You're already using these correctly. The `defaultValue` prop is key for repopulating inputs.
// 5.  **Checkbox Handling**: Checkboxes are a bit trickier. When they're unchecked, they don't submit a value. When checked, they submit their `value`. For multiple checkboxes with the same `name` (like your `roles`), the browser typically sends an array of the checked values. You'll need to use the `defaultChecked` prop instead of `defaultValue` for checkboxes and check if the submitted value (`state.data.values?.roles`) includes the checkbox's specific value.
// 6.  **`signUpUser` Action Return Value**: **This is the most crucial part.** Your `signUpUser` function (which is called by the `action` prop) **must return the submitted values** in the `state` object when an error occurs. If it only returns `errors: { name: '...' }` and doesn't include `values: { name: '...' }`, then there's nothing for `defaultValue` to grab onto.

//     A typical successful return from `signUpUser` might look like:
//     ```javascript
//     // On success
//     { ok: true, data: { values: { name: '...', mobile: '...', ... }, user: { ... } }, errors: undefined, error: undefined }
//     ```
//     And on failure, it should ideally return something like:
//     ```javascript
//     // On validation error
//     { ok: false, data: { values: { name: '...', mobile: '...', ... } }, errors: { name: 'Name is required', mobile: 'Invalid mobile number' }, error: undefined }
//     ```
//     Or if it's a general server error:
//     ```javascript
//     // On server error
//     { ok: false, data: { values: { name: '...', mobile: '...', ... } }, errors: undefined, error: 'An unexpected error occurred.' }
//     ```
//     If your `signUpUser` doesn't return the `values` when there's an error, you'll need to modify it to do so.

// Try implementing these changes, and pay close attention to what your `signUpUser` function actually returns in the `state` object when errors occur. That's usually where the problem lies!


