import { useDispatch, useSelector } from "react-redux";
import Modal from "../../Ui/Modal";
import styles from "../../Ui/Modal.module.scss";
import { toogleSubtractAmount } from "@/src/store/ui-slice";
import { useState } from "react";
import useUpdateDoc from "@/src/hooks/useUpdatedoc";

const SubtractAmount = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);

  const { isVisible, category } = useSelector(
    (state) => state.ui.subtractAmount
  );
  const dispatch = useDispatch();

  const subTtactAmountHadler = useUpdateDoc();

  const subTractAmount = (e) => {
    e.preventDefault();

    if (!title || !amount) return;

    subTtactAmountHadler("categoria", category.id, {
      amount: category.amount - Number(amount),
    });
    dispatch(toogleSubtractAmount(null));
    setTitle("");
    setAmount(0);
  };

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toogleSubtractAmount(null))}
      title="Descontar"
    >
      <div>
        <form onSubmit={subTractAmount}>
          <div className={styles["label-input"]}>
            <label htmlFor="title" className="p">
              Título
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Ex: Pagar Energia"
              onChange={(e) => setTitle(e.target.value)}
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
              onChange={(e) => setAmount(e.target.value)}
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
