import { BLUE_1 } from "../../consts/colors";
import Button from "../../core/form/Button";
import TextInput from "../../core/form/TextInput";
import Separator from "../../core/layout/Separator";
import useForm from "../../hooks/useForm";
import isEmail from "../../validators/isEmail";
import isRequired from "../../validators/isRequired";

export default function LoginForm() {
  const { getValue, setValue, isSubmitted, getError, submit } = useForm({
    initialValues: {},
    validations: {
      email: [isRequired, isEmail],
      password: [isRequired],
    },
    onSubmit: () => {
      console.log("logged in!");
    },
  });

  console.log(isSubmitted, getError("password"));

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
        value={getValue("password")}
        placeholder="Type your password"
        onChange={(event) => setValue("password", event.target.value)}
        errorText={isSubmitted && getError("password")}
      />
      <Separator size="lg" />
      <Button label="Login" backgroundColor={BLUE_1} htmlType="submit" />
    </form>
  );
}
