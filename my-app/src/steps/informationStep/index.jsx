/* eslint-disable react/display-name */
import { useForm } from "react-hook-form";
import { useAppState } from "../../state";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Field,
  Form,
  Input,
  TitelDescription,
  Title,
} from "../../components";
import { DevTool } from "@hookform/devtools";
import { forwardRef } from "react";
import styles from "./style.module.scss";

const InformationPage = forwardRef((props, ref) => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });
  const navigate = useNavigate();

  const saveData = (data) => {
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
            {...register("name", { required: "This field is required" })}
            id="name"
          />
        </Field>

        <Field label="Email" error={errors?.email}>
          <Input
            {...register("email", {
              required: "This field is required",
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
              required: "This field is required",
              pattern: {
                value: /^\+[1-9]{1}[0-9]{3,14}$/,
                message: "Invalid phone number.",
              },
            })}
            id="phone-number"
          />
        </Field>
        <section className="button__wrapper align__right">
          <Button>Next Step</Button>
        </section>
      </Form>
      <DevTool control={control} />
    </section>
  );
});

export default InformationPage;
