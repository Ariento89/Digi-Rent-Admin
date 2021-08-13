import { BLUE_1 } from "../../consts/colors";
import Button from "../../core/form/Button";
import TextInput from "../../core/form/TextInput";
import Card from "../../core/layout/Card";
import Separator from "../../core/layout/Separator";
import useForm from "../../hooks/useForm";
import useService from "../../hooks/useService";
import { createAmenity } from "../../services/amenitiesService";
import isRequired from "../../validators/isRequired";

export default function NewAmenityForm() {
  const [isFetching, addAmenity] = useService(createAmenity, {
    onData: (data) => {
      console.log("amenity", data);
    },
    onError: (error) => {
      console.log("error", error);
    },
  });

  const { getValue, setValue, isSubmitted, getError, submit } = useForm({
    initialValues: {},
    validations: {
      title: [isRequired],
    },
    onSubmit: () => {
      addAmenity({ title: getValue("title") });
    },
  });

  return (
    <Card>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submit();
        }}
      >
        <TextInput
          label="Title"
          required={true}
          isDisabled={isFetching}
          value={getValue("title")}
          placeholder="Amenity title"
          onChange={(event) => setValue("title", event.target.value)}
          errorText={isSubmitted && getError("title")}
        />
        <Separator size="md" />
        <div style={{ marginLeft: "auto", width: "200px" }}>
          <Button
            label="Add Amenity"
            backgroundColor={BLUE_1}
            htmlType="submit"
            isDisabled={isFetching}
            isLoading={isFetching}
            isFullWidth={true}
          />
        </div>
      </form>
    </Card>
  );
}
