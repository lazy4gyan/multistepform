import { useForm } from "react-hook-form";
import { useAppState } from "../../state";
import { useNavigate } from "react-router-dom";
import { Button, Field, Form, Input } from "../../components";
import { DevTool } from "@hookform/devtools";
// import ToggleSwitch from "../../components/toggle-switch";
// import RadioButtonGroup  from "../../components/select-card";
// import Card from "../../components/select-card";
const InformationPage = () => {
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
//   const planOptions = [
//     {
//       value: "9",
//       label: "Arcade",
//       imgSrc: "../../assets/images/icon-arcade.svg",
//     },
//     {
//       value: "12",
//       label: "Advanced",
//       imgSrc: "../../assets/images/icon-advanced.svg",
//     },
//     { value: "15", label: "Pro", imgSrc: "../../assets/images/icon-pro.svg" },
//   ];
  return (
    <>
      <Form onSubmit={handleSubmit(saveData)}>
        <legend>Personal info</legend>
        <p>Please provide your name, email address, and phone number.</p>
        <Field label="Name" error={errors?.name}>
          <Input
            {...register("name", { required: "This field is required" })}
            id="name"
          />
        </Field>

        <Field label="Email" error={errors?.email}>
          <Input
            {...register("email", { required: "This field is required" })}
            type="email"
            id="email"
          />
        </Field>
        <Field label="Phone Number" error={errors?.phoneNumber}>
          <Input
            {...register("phoneNumber", { required: "This field is required" })}
            id="phone-number"
          />
        </Field>

        <Button>Next</Button>
      </Form>
      <DevTool control={control} />
    </>
  );
};

export default InformationPage;
