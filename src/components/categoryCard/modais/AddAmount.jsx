import { useDispatch, useSelector } from "react-redux";
import Modal from "../../Ui/Modal";
import styles from "../../Ui/Modal.module.scss";
import { toogleAddAmount } from "@/src/store/ui-slice";

const AddAmount = () => {
  const { isVisible } = useSelector((state) => state.ui.addAmount);
  const dispatch = useDispatch();

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toogleAddAmount(null))}
      title="Adicionar"
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
              placeholder="Ex: Venda de um objeto"
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
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddAmount;
