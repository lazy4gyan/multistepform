// Steps/SummaryPage.js

import { useForm } from "react-hook-form";
import { useAppState } from "../../state";
import { Button, Form } from "../../components";
import { addOnPlanOptions, planOptions } from "../../constants";
import { useNavigate } from "react-router-dom";

const SummaryPage = () => {
  const [state] = useAppState();
  // const state = {
  //   custom:true,
  //   email:"m@m.com",
  //   large:false,
  //   name:"Red",
  //   online:true,
  //   phoneNumber: "987654443432",
  //   planType: true,
  //   selectPlan: "15"
  // }
  const { handleSubmit, getValues } = useForm({ defaultValues: state });
  const navigate = useNavigate();

  const submitData = (data) => {
    console.info(data);
    // Submit data to the server
  };
  // console.log(get("planType"))
  // console.log(state);

  const subscription = state ? planOptions.find(
    (plan) => plan.value === state.selectPlan
  ):null;

  const addOns = addOnPlanOptions.filter(plan => state[plan.code] === true);
  const addOnPrice = addOns.reduce((total,plan)=>{
    return total + Number(plan.value);
  },0)
  console.log(addOnPrice)
  const total = Number(state.selectPlan) + addOnPrice;


  return (
    <Form onSubmit={handleSubmit(submitData)}>
      <h1 className="mb-4">Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <article>
        <section>
          <section>
            <label>
              {subscription ? `${subscription.label}(${state.planType ? "Yearly" : "Monthly"})` : "Select Plan"}
            </label>
            <button onClick={()=> navigate("/selectplan")}>Change</button>
          </section>
          <p>
            {subscription && (state.planType
              ? `$${subscription.value * 10}/yr`
              : `$${subscription.value}/mo`)}
          </p>
        </section>
        <hr />
        {
          state !== undefined && state !== null &&
          addOns.map(plan =>{
            return(
              <section key={plan.label}>
                <h5>{plan.label}</h5>
                <p>{state.planType
              ? `+$${plan.value * 10}/yr`
              : `+$${plan.value}/mo`}</p>
              </section>
            )
          })
        }
      </article>
      {subscription &&(
        <section>
        <p>Total(per {state.planType ? "year":"month"})</p>
        <p>+${state.planType? String(total*10):String(total)}</p>
      </section>
      )}
      
      <div className="d-flex justify-content-start">
        <Button>Confirm</Button>
      </div>
    </Form>
  );
};

export default SummaryPage;
