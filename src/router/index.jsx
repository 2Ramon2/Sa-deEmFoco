import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { Layout } from "../layout";
import { Home } from "../pages/Home";
import { IMCResultTable } from "../pages/IMCResultTable";

import { IMCDesc } from "../utils/IMCDesc";

const regexWeight = /^\d+(?:\.\d+)?$/;
const regexHeight = /^\d{2,3}(?:\.\d{1,2})?$/;

export function Router() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [BMIInfo, setBMIInfo] = useState(null);
  const [heightError, setHeightError] = useState(null);
  const [weightError, setWeightError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setBMIInfo(null);
    }
  }, [location]);

  function calculateBMI(weight, height) {
    setHeightError(null);
    setWeightError(null);
    if (!regexWeight.test(weight)) {
      setWeightError("Insira um peso válido");
      return false;
    }
    if (!regexHeight.test(height)) {
      setHeightError("Insira uma altura válida");
      return false;
    }
    if (height > 100) {
      const BMI =
        Number(weight) / (Number(height / 100) * Number(height / 100));
      setBMIInfo(classifiesBMI(BMI.toFixed(2)));
    } else {
      const BMI = Number(weight) / (Number(height) * Number(height));
      setBMIInfo(classifiesBMI(BMI.toFixed(2)));
    }
    return true;
  }

  function classifiesBMI(BMI) {
    if (BMI < 18.5) {
      return { bmi: BMI, desc: IMCDesc.firstDesc };
    } else if (BMI >= 18.5 && BMI <= 24.9) {
      return { bmi: BMI, desc: IMCDesc.secondDesc };
    } else if (BMI >= 25 && BMI <= 29.9) {
      return { bmi: BMI, desc: IMCDesc.thirdDesc };
    } else if (BMI >= 30 && BMI <= 34.9) {
      return { bmi: BMI, desc: IMCDesc.fourthDesc };
    } else if (BMI >= 35 && BMI <= 39.9) {
      return { bmi: BMI, desc: IMCDesc.fifthDesc };
    } else {
      return { bmi: BMI, desc: IMCDesc.fifthDesc };
    }
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={
            <Home
              weight={weight}
              height={height}
              weightError={weightError}
              heightError={heightError}
              setWeightError={setWeightError}
              setHeightError={setHeightError}
              calculateBMI={calculateBMI}
              setWeight={setWeight}
              setHeight={setHeight}
            />
          }
        />
        <Route path="/table" element={<IMCResultTable BMIInfo={BMIInfo} />} />
      </Route>
    </Routes>
  );
}
