import { useEffect, useRef } from "react";
import styles from "./home.module.scss";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { TiArrowForward } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

export function Home({
  weight,
  height,
  setWeight,
  setHeight,
  calculateBMI,
  weightError,
  heightError,
  setWeightError,
  setHeightError,
}) {
  const navigate = useNavigate();
  const inputRef = useRef();

  const isButtonDisabled = weight.length === 0 || height.length === 0;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleSubmitForm(event) {
    event.preventDefault();
    if (!calculateBMI(weight, height)) {
      return;
    }
    calculateBMI(weight, height);
    navigate("table");
    setWeight("");
    setHeight("");
  }

  function onWeightChange({ target }) {
    if (weight !== 0) {
      setWeightError(null);
    }
    setWeight(target.value);
  }

  function onHeightChange({ target }) {
    if (height !== 0) {
      setHeightError(null);
    }
    setHeight(target.value);
  }

  return (
    <div className={`${styles.homeContainer} ${styles.scaleInCenter}`}>
      <form onSubmit={handleSubmitForm}>
        <div>
          <label htmlFor="weight">
            Peso
            <TiArrowForward size={16} color="#ff5100" />
          </label>
          <input
            ref={inputRef}
            id="weight"
            type="text"
            placeholder="Digite o seu peso"
            value={weight}
            onChange={onWeightChange}
            autoComplete="off"
          />
          {weightError && <span className={styles.error}>{weightError}</span>}
        </div>
        <div>
          <label htmlFor="height">
            Altura
            <TiArrowForward size={16} color="#ff5100" />
          </label>
          <input
            id="height"
            type="text"
            placeholder="Digite a sua altura"
            value={height}
            onChange={onHeightChange}
            autoComplete="off"
          />
          {heightError && <span className={styles.error}>{heightError}</span>}
        </div>

        <button disabled={isButtonDisabled} type="submit">
          <FaBalanceScaleLeft size={30} />
          Calcular
        </button>
      </form>
    </div>
  );
}
