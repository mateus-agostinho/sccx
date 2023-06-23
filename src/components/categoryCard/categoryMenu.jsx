import { useDispatch } from "react-redux";
import CardMenu from "../Ui/CardMenu";
import useCloseMenu from "@/src/hooks/useCloseMenu";
import { toogleAddAmount, toogleEditCategory, toogleSubtractAmount, toogleTransferAmount } from "@/src/store/ui-slice";

const CategoryMenu = ({ toogleMenuHandler, data }) => {
  const menuRef = useCloseMenu(toogleMenuHandler);
  const dispatch = useDispatch();

  return (
    <CardMenu ref={menuRef}>
      <li onClick={() => dispatch(toogleEditCategory(data))}>Editar</li>
      <li onClick={() => dispatch(toogleAddAmount(data))}>Adicionar</li>
      <li onClick={() => dispatch(toogleSubtractAmount(data))}>Descontar</li>
      <li onClick={() => dispatch(toogleTransferAmount(data))}>Transferir</li>
    </CardMenu>
  );
};

export default CategoryMenu;
