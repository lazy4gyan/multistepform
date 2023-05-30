import { useForm } from "react-hook-form";
import { useAppState } from "../../components/state";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Field,
  Form,
  Input,
  TitelDescription,
  Title,
} from "../../components";

const InformationPage = () => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });
  const navigate = useNavigate();

  const saveData = (data) => {
    console.log(data);
    setState({ ...state, ...data });
    navigate("/selectplan");
  };

  return (
    <section className="form__container">
      <Form onSubmit={handleSubmit(saveData)}>
        <Title>Personal info</Title>
        <TitelDescription>
          Please provide your name, email address, and phone number.
        </TitelDescription>
        <Field label="Name" error={errors?.name}>
          <Input
            {...register("name", { required: "This field is required." })}
            id="name"
          />
        </Field>

        <Field label="Email" error={errors?.email}>
          <Input
            {...register("email", {
              required: "This field is required.",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format.",
              },
            })}
            type="email"
            id="email"
          />
        </Field>
        <Field label="Phone Number" error={errors?.phoneNumber}>
          <Input
            {...register("phoneNumber", {
              required: "This field is required.",
              pattern: {
                value: /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/,
                message: "Invalid phone number.",
              },
            })}
            id="phone-number"
          />
        </Field>
        <section className={`button__wrapper align__right`}>
          <Button>Next Step</Button>
        </section>
      </Form>
    </section>
  );
};

export default InformationPage;
