import { useForm } from "react-hook-form";
import { useAppState } from "../../state";
import { useNavigate } from "react-router-dom";
import { Button, Field, Form, Input, Section, SectionRow } from "../../components";
import { DevTool } from "@hookform/devtools";
import Card from "../../components/select-card";
import ToggleSwitch from "../../components/toggle-switch";
import { planOptions } from "../../constants";
// import RadioButtonGroup  from "../../components/select-card";
// import Card from "../../components/select-card";
const SelectPlanPage = () => {
    const [state, setState] = useAppState();
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = useForm({ defaultValues: state, mode: "onSubmit" });
    const navigate = useNavigate();

    const saveData = (data) => {
        console.log(data)
        setState({ ...state, ...data });
        navigate("/addon");
    };
    

    return (
        <>
            <Form onSubmit={handleSubmit(saveData)}>
                <legend>Select your plan</legend>
                <p>You have the option of monthly or yearly billing.</p>
                <div className="row">
                {
                    planOptions.map(plan => {
                        return (
                                <div key={plan.label} className="col-md-4">
                                <Card
                                    {...register(`${plan.name}`)}
                                    value={plan.value}
                                    image={plan.imgSrc}
                                    title={plan.label}
                                    description="It's windy outside."
                                    price={plan.value}
                                />
                                </div>
                                
                        )
                    })
                }
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                <label htmlFor="planType">Monthly</label>
                    <ToggleSwitch {...register("planType")}
            id="planType"/>
                <label htmlFor="planType">Yearly</label>
                </div>
                <Button>Next</Button>
            </Form>
            <DevTool control={control} />
        </>
    );
};

export default SelectPlanPage;
