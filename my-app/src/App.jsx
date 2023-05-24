import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./state";
// import { Contact } from "./Steps/Contact";
// import { Education } from "./Steps/Education";
// import { About } from "./Steps/About";
// import { Confirm } from "./Steps/Confirm";
// import { Stepper } from "./Steps/Stepper";
import InformationPage from "./steps/informationStep";
import SelectPlanPage from "./steps/selectplanStep";
import AddOnPage from "./steps/addonStep";
import SummaryPage from "./steps/summaryStep";
import { Stepper } from "./steps/stepper";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Stepper />
        <Routes>
          <Route path="/" element={<InformationPage />} />
          <Route path="/selectplan" element={<SelectPlanPage />} />
          <Route path="/addon" element={<AddOnPage />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
