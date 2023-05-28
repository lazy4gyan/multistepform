import { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./state";
import InformationPage from "./steps/informationStep";
import SelectPlanPage from "./steps/selectplanStep";
import AddOnPage from "./steps/addonStep";
import SummaryPage from "./steps/summaryStep";
import { Stepper } from "./steps/stepper";
import AppLayout from "./components/app-layout/AppLayout";
import ThanksPage from "./steps/thanksStep";

const App = () => {
  const buttonRef = useRef();
  const onStepChange = () => {
    buttonRef.current?.click();
  };
  return (
    <main style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
      <AppProvider>
        <Router>
          <AppLayout>
            <Stepper onStepChange={onStepChange} />
            <Routes>
              <Route path="/" element={<InformationPage ref={buttonRef} />} />
              <Route
                path="/selectplan"
                element={<SelectPlanPage ref={buttonRef} />}
              />
              <Route path="/addon" element={<AddOnPage ref={buttonRef} />} />
              <Route path="/summary" element={<SummaryPage />} />
              <Route path="/thanks" element={<ThanksPage />} />
            </Routes>
          </AppLayout>
        </Router>
      </AppProvider>
    </main>
  );
};

export default App;
