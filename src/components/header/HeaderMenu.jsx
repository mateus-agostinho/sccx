import useCloseMenu from "@/src/hooks/useCloseMenu";
import CardMenu from "../Ui/CardMenu";
import { toogleAddSalary } from "@/src/store/ui-slice";
import { useDispatch } from "react-redux";

const HeaderMenu = ({toogleMenuHandler}) => {
    const cardRef = useCloseMenu(toogleMenuHandler);
    const dispatch = useDispatch();

  return (
    <CardMenu ref={cardRef}>
      <li onClick={() => dispatch(toogleAddSalary(null))}>Adicionar Salario</li>
    </CardMenu>
  );
};

export default HeaderMenu;
