import { BLUE_1 } from "../../consts/colors";
import Button from "../../core/form/Button";
import TextInput from "../../core/form/TextInput";
import Separator from "../../core/layout/Separator";

export default function LoginForm() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <TextInput label="E-mail" type="email" required={true} placeholder="Type your e-mail" />
      <Separator size="md" />
      <TextInput label="Password" type="password" required={true} placeholder="Type your password" />
      <Separator size="lg" />
      <Button label="Login" backgroundColor={BLUE_1} htmlType="submit" />
    </form>
  );
}
