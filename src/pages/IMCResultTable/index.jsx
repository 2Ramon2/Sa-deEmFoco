import styles from "./IMCResultTable.module.scss";
import { MdHealthAndSafety } from "react-icons/md";

export function IMCResultTable({ BMIInfo }) {
  return (
    <div className={`${styles.tableContainer} ${styles.scaleInCenter}`}>
      <div>
        <table>
          <thead>
            <tr>
              <th>IMC</th>
              <th>Classificação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>IMC abaixo de 18,5</td>
              <td>Abaixo do peso</td>
            </tr>
            <tr>
              <td>IMC entre 18,5 e 24,9</td>
              <td>Peso normal</td>
            </tr>
            <tr>
              <td>IMC entre 25 e 29,9</td>
              <td>Sobrepeso</td>
            </tr>
            <tr>
              <td>IMC entre 30 e 34,9</td>
              <td>Obesidade de Grau I</td>
            </tr>
            <tr>
              <td>IMC entre 35 e 39,9</td>
              <td>Obesidade de Grau II</td>
            </tr>
            <tr>
              <td>IMC igual ou acima de 40</td>
              <td>
                Obesidade de Grau III <br /> (obesidade mórbida)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {BMIInfo ? (
        <div className={styles.resultIMC}>
          <div>
            <p>
              O seu IMC é: <span>{BMIInfo.bmi}</span>
            </p>
          </div>
          <div>
            <p>{BMIInfo.desc}</p>
          </div>
        </div>
      ) : (
        <div className={styles.logo}>
          <MdHealthAndSafety size={60} color="#ff5100"/>
          <span>Saúde em foco</span>
        </div>
      )}
    </div>
  );
}
