import { useForm } from "react-hook-form";
import { useAppState } from "../../state";
import { Button, Form, TitelDescription, Title } from "../../components";
import { addOnPlanOptions, planOptions } from "../../constants";
import { Link, useNavigate } from "react-router-dom";
import styles from "./style.module.scss";

const SummaryPage = () => {
  const [state] = useAppState();

  const { handleSubmit } = useForm({ defaultValues: state });
  const navigate = useNavigate();

  const subscription = state
    ? planOptions.find((plan) => plan.value === state.selectPlan)
    : null;
  const addOns = addOnPlanOptions.filter((plan) => state[plan.code] === true);
  const addOnPrice = addOns.reduce((total, plan) => {
    return total + Number(plan.value);
  }, 0);
  const total = Number(state.selectPlan) + addOnPrice;

  const submitData = (data) => {
    console.info(data);
    // Submit data to the server
  };

  const data = [
    {
      title: "Personal info",
      url: "/",
      items: [
        { name: "name", value: state.name, required: true },
        { name: "email", value: state.email, required: true },
        { name: "phoneNumber", value: state.phoneNumber, required: true },
      ],
    },
    {
      title: "Select Plan",
      url: "/selectplan",
      items: [
        { name: "selectPlan", value: state.selectPlan, required: true },
        { name: "planType", value: state.planType },
      ],
    },
    {
      title: "Add-on's",
      url: "/addon",
      items: [
        { name: "online", value: state.online },
        { name: "large", value: state.large },
        { name: "custom", value: state.custom },
      ],
    },
  ];

  const disableSubmit = data.some((section) =>
    section.items.some((item) => item.required && !item.value)
  );

  return (
    <section className="form__container">
      <Form onSubmit={handleSubmit(submitData)}>
        <Title>Finishing up</Title>
        <TitelDescription>
          Double-check everything looks OK before confirming.
        </TitelDescription>
        <article className={styles.summary__conatiner}>
          <section className={styles.plan__section}>
            <section>
              <label>
                {subscription
                  ? `${subscription.label}(${
                      state.planType ? "Yearly" : "Monthly"
                    })`
                  : "Select Plan"}
              </label>
              <Button variant={"tertiary"} onClick={() => navigate("/selectplan")}>Change</Button>
            </section>
            <p>
              {subscription &&
                (state.planType
                  ? `$${subscription.value * 10}/yr`
                  : `$${subscription.value}/mo`)}
            </p>
          </section>
          <hr />
          {state !== undefined &&
            state !== null &&
            addOns.map((plan) => {
              return (
                <section className={styles.addon__section} key={plan.label}>
                  <h5>{plan.label}</h5>
                  <p>
                    {state.planType
                      ? `+$${plan.value * 10}/yr`
                      : `+$${plan.value}/mo`}
                  </p>
                </section>
              );
            })}
        </article>
        {subscription && (
          <section className={styles.total__section}>
            <p className={styles.total__label}>
              Total(per {state.planType ? "year" : "month"})
            </p>
            <p className={styles.total__price}>
              +$
              {state.planType
                ? `${String(total * 10)}/yr`
                : `${String(total)}/mo`}
            </p>
          </section>
        )}
        <section className="button__wrapper">
        <Link to="/addon">
            Go Back
          </Link>
          {/* <Button variant={"tertiary"}></Button> */}
          <Button variant={"secondary"} disabled={disableSubmit}>
            Confirm
          </Button>
        </section>
      </Form>
    </section>
  );
};

export default SummaryPage;
