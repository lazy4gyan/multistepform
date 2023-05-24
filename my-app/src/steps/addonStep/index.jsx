import { useForm } from "react-hook-form";
import { useAppState } from "../../state";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form } from "../../components";
import { DevTool } from "@hookform/devtools";
import { addOnPlanOptions } from "../../constants";
const AddOnPage = () => {
  const [state, setState] = useAppState();
  const { handleSubmit, register, control } = useForm({
    defaultValues: state,
    mode: "onSubmit",
  });
  const navigate = useNavigate();

  const saveData = (data) => {
    console.log(data);
    setState({ ...state, ...data });
    navigate("/summary");
  };
  

  return (
    <>
      <Form onSubmit={handleSubmit(saveData)}>
        <legend>Pick add-ons</legend>
        <p>Add-ons help enhance your gaming experience.</p>

        {addOnPlanOptions.map((plan) => {
          return (
            <div key={`${plan.label}`}>
              <Checkbox {...register(`${plan.code}`)} id={`${plan.label}`} />
              <div>
                <span>
                  <label htmlFor={`${plan.label}`}>{plan.label}</label>
                  <p>{plan.description}</p>
                </span>
                <span>{plan.value}</span>
              </div>
            </div>
          );
        })}

        <Button>Next</Button>
      </Form>
      <DevTool control={control} />
    </>
  );
};

export default AddOnPage;
