import { useForm } from "react-hook-form";
import { useAppState } from "../../components/state";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Checkbox,
  Form,
  TitelDescription,
  Title,
} from "../../components";
import { addOnPlanOptions } from "../../utils/constants";
import styles from "./style.module.scss";
const AddOnPage = () => {
  const [state, setState] = useAppState();
  const { handleSubmit, register, watch } = useForm({
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
        <TitelDescription>
          Add-ons help enhance your gaming experience.
        </TitelDescription>
        <section className={styles.box}>
          {addOnPlanOptions.map((plan) => {
            return (
              <div
                className={`${styles.checkbox__container} ${
                  watch(`${plan.code}`) ? styles.selected : ""
                }`}
                key={`${plan.label}`}
              >
                <Checkbox {...register(`${plan.code}`)} id={`${plan.label}`} />
                <div className={styles.checkbox__body}>
                  <span>
                    <label htmlFor={`${plan.label}`}>{plan.label}</label>
                    <p>{plan.description}</p>
                  </span>
                  <span>
                    {isYearly
                      ? `+$${plan.value * 10}/yr`
                      : `+$${plan.value}/mo`}
                  </span>
                </div>
              </div>
            );
          })}
        </section>
        <section className="button__wrapper">
          <Link to="/selectplan">Go Back</Link>
          <Button>Next Step</Button>
        </section>
      </Form>
    </section>
  );
};

export default AddOnPage;
