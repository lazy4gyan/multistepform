/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useAppState } from "../../state";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, TitelDescription, Title } from "../../components";
import { DevTool } from "@hookform/devtools";
import { addOnPlanOptions } from "../../constants";
import { forwardRef } from "react";
import styles from "./style.module.scss"
// eslint-disable-next-line react/display-name
const AddOnPage = forwardRef((props, ref) => {
  const [state, setState] = useAppState();
  const { handleSubmit, register, control,watch } = useForm({
    defaultValues: state,
    mode: "onSubmit",
  });
  const navigate = useNavigate();

  const saveData = (data) => {
    console.log(data);
    setState({ ...state, ...data });
    navigate("/summary");
  };
  const isYearly = watch("planType");

  return (
    <section className="form__container">
      <Form onSubmit={handleSubmit(saveData)}>
        <Title>Pick add-ons</Title>
        <TitelDescription>Add-ons help enhance your gaming experience.</TitelDescription>
        <section className={styles.box}>
        {addOnPlanOptions.map((plan) => {
          return (
            <div className={styles.checkbox__container} key={`${plan.label}`}>
              <Checkbox {...register(`${plan.code}`)} id={`${plan.label}`} />
              <div className={styles.checkbox__body}>
                <span>
                  <label htmlFor={`${plan.label}`}>{plan.label}</label>
                  <p>{plan.description}</p>
                </span>
                <span>{isYearly ? `$${plan.value*10}/yr`:`$${plan.value}/mo`}</span>
              </div>
            </div>
          );
        })}
        </section>
        

        <Button>Next</Button>
      </Form>
      <DevTool control={control} />
    </section>
  );
});

export default AddOnPage;
