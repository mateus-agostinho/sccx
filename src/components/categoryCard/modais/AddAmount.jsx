import { useDispatch, useSelector } from "react-redux";
import Modal from "../../Ui/Modal";
import styles from "../../Ui/Modal.module.scss";
import { toogleAddAmount } from "@/src/store/ui-slice";
import { useState } from "react";
import useUpdateDoc from "@/src/hooks/useUpdatedoc";

const AddAmount = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);

  const { isVisible, category } = useSelector((state) => state.ui.addAmount);
  const dispatch = useDispatch();

  const addAmountHandler = useUpdateDoc();

  const addAmount = (e) => {
    e.preventDefault();

    if (!title || !amount) return;

    addAmountHandler("categoria", category.id, {
      amount: category.amount + Number(amount),
    });

    setTitle("");
    setAmount(0);
    dispatch(toogleAddAmount(null));
  };

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toogleAddAmount(null))}
      title="Adicionar"
    >
      <div>
        <form onSubmit={addAmount}>
          <div className={styles["label-input"]}>
            <label htmlFor="title" className="p">
              Título
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Ex: Venda de um objeto"
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
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddAmount;
