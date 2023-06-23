import { useDispatch, useSelector } from "react-redux";
import Modal from "../../Ui/Modal";
import styles from "../../Ui/Modal.module.scss";
import { toogleEditCategory } from "@/src/store/ui-slice";

const EditCategory = () => {
  const { isVisible, category } = useSelector((state) => state.ui.editCategory);
  const dispatch = useDispatch();


  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toogleEditCategory(null))}
      title="Editar"
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
            />
          </div>
          <div className={styles["label-input"]}>
            <label htmlFor="porcentagem" className="p">
              Porcentagem Alocada
            </label>
            <input
              type="text"
              id="porcentagem"
              name="porcentagem"
              placeholder="%"
              className="max-width"
            />
          </div>
          <div className={styles.buttons}>
            <button type="submit" className="btn btn-primary">
              Salvar
            </button>
            <button type="button" className="btn btn-secondary">
              Excluir
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditCategory;
