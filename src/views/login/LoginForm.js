import { BLUE_1 } from "../../consts/colors";
import Button from "../../core/form/Button";
import TextInput from "../../core/form/TextInput";
import Separator from "../../core/layout/Separator";
import useForm from "../../hooks/useForm";
import useService from "../../hooks/useService";
import isEmail from "../../validators/isEmail";
import isRequired from "../../validators/isRequired";
import { login } from "../../services/authService";
import { useHistory } from "react-router-dom";
import useNotification from "../../hooks/useNotification";

export default function LoginForm() {
  const notify = useNotification();
  const history = useHistory();
  const [isSubmitting, startLogin] = useService(login, {
    onData: () => {
      notify("Logged in!", "info");
      history.push("/");
    },
    onError: (error) => {
      if (error.status === 401) {
        notify("Wrong credentials. Try again.", "error");
      }
    },
  });

  const { getValue, setValue, isSubmitted, getError, submit } = useForm({
    initialValues: {},
    validations: {
      email: [isRequired, isEmail],
      password: [isRequired],
    },
    onSubmit: () => {
      startLogin({
        email: getValue("email"),
        password: getValue("password"),
      });
    },
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        submit();
      }}
    >
      <TextInput
        label="E-mail"
        required={true}
        isDisabled={isSubmitting}
        value={getValue("email")}
        placeholder="Type your e-mail"
        onChange={(event) => setValue("email", event.target.value)}
        errorText={isSubmitted && getError("email")}
      />
      <Separator size="md" />
      <TextInput
        label="Password"
        type="password"
        required={true}
        isDisabled={isSubmitting}
        value={getValue("password")}
        placeholder="Type your password"
        onChange={(event) => setValue("password", event.target.value)}
        errorText={isSubmitted && getError("password")}
      />
      <Separator size="lg" />
      <Button
        label="Login"
        backgroundColor={BLUE_1}
        htmlType="submit"
        isDisabled={isSubmitting}
        isLoading={isSubmitting}
        isFullWidth={true}
      />
    </form>
  );
}
