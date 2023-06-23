import { useDispatch } from "react-redux";
import CardMenu from "../Ui/CardMenu";
import useCloseMenu from "@/src/hooks/useCloseMenu";
import { toogleAddAmount } from "@/src/store/ui-slice";

const CategoryMenu = ({ toogleMenuHandler }) => {
  const menuRef = useCloseMenu(toogleMenuHandler);
  const dispatch = useDispatch();

  return (
    <CardMenu ref={menuRef}>
      <li>Editar</li>
      <li onClick={() => dispatch(toogleAddAmount(null))}>Adicionar</li>
      <li>Descontar</li>
      <li>Transferir</li>
    </CardMenu>
  );
};

export default CategoryMenu;
