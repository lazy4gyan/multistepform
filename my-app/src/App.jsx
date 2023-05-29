import { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./components/state";
import { Stepper } from "./steps/stepper";
import InformationPage from "./steps/informationStep";
import SelectPlanPage from "./steps/selectplanStep";
import AddOnPage from "./steps/addonStep";
import SummaryPage from "./steps/summaryStep";
import AppLayout from "./components/app-layout/AppLayout";
import ThanksPage from "./steps/thanksStep";

const App = () => {
  const buttonRef = useRef();
  const onStepChange = () => {
    buttonRef.current?.click();
  };
  return (
    <main>
      <AppProvider>
        <Router>
          <AppLayout>
            <Stepper onStepChange={onStepChange} />
            <Routes>
              <Route path="/" element={<InformationPage />} />
              <Route path="/selectplan" element={<SelectPlanPage />} />
              <Route path="/addon" element={<AddOnPage />} />
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
