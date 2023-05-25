/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useAppState } from "../../state";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Field,
  Form,
  Input,
  Section,
  SectionRow,
  TitelDescription,
  Title,
} from "../../components";
import { DevTool } from "@hookform/devtools";
import Card from "../../components/select-card";
import ToggleSwitch from "../../components/toggle-switch";
import { planOptions } from "../../constants";
import { forwardRef } from "react";
import styles from "./style.module.scss";

// eslint-disable-next-line react/display-name
const SelectPlanPage = forwardRef((props, ref) => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    control,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });
  const navigate = useNavigate();

  const saveData = (data) => {
    console.log(data);
    setState({ ...state, ...data });
    navigate("/addon");
  };

  return (
    <section className="form__container">
      <Form onSubmit={handleSubmit(saveData)}>
        <Title>Select your plan</Title>
        <TitelDescription>
          You have the option of monthly or yearly billing.
        </TitelDescription>
        <div className={styles.cards__container}>
          {planOptions.map((plan) => {
            return (
              <Card
                key={plan.label}
                {...register(`${plan.name}`)}
                value={plan.value}
                image={plan.imgSrc}
                title={plan.label}
                description="2 months free"
                price={plan.value}
                isYearly={watch("planType")}
              />
            );
          })}
        </div>
        <div className={styles.form__plantype}>
          <label
            htmlFor="planType"
            className={
              watch("planType") ?styles.blur__text:styles.highlight__text
            }
          >
            Monthly
          </label>
          <ToggleSwitch {...register("planType")} id="planType" />
          <label
            htmlFor="planType"
            className={
              watch("planType") ? styles.highlight__text : styles.blur__text
            }
          >
            Yearly
          </label>
        </div>
        <Button>Next</Button>
      </Form>
      <DevTool control={control} />
    </section>
  );
});

export default SelectPlanPage;
