import { useDispatch, useSelector } from "react-redux";
import Modal from "../../Ui/Modal";
import styles from "../../Ui/Modal.module.scss";
import { toogleAddSalary } from "@/src/store/ui-slice";

const AddSalary = () => {
  const { isVisible, category } = useSelector((state) => state.ui.addSalary);
  const dispatch = useDispatch();

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toogleAddSalary(null))}
      title="Adicionar Salario"
    >
      <div>
        <form>
          <div className={styles["label-input"]}>
            <label htmlFor="amount" className="p">
              Valor
            </label>
            <input
              type="text"
              id="amount"
              name="amount"
              placeholder="R$"
              className="max-width"
            />
          </div>
          <div className={styles.buttons}>
            <button type="submit" className="btn btn-primary">
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddSalary;
