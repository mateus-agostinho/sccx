import { useDispatch, useSelector } from "react-redux";
import Modal from "../../Ui/Modal";
import styles from "../../Ui/Modal.module.scss";
import { toogleSubtractAmount } from "@/src/store/ui-slice";

const SubtractAmount = () => {
  const { isVisible, category } = useSelector((state) => state.ui.subtractAmount);
  const dispatch = useDispatch();


  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toogleSubtractAmount(null))}
      title="Descontar"
    >
      <div>
        <form>
          <div className={styles["label-input"]}>
            <label htmlFor="title" className="p">
              Título
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Ex: Pagar Energia"
            />
          </div>
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
              Descontar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default SubtractAmount;
