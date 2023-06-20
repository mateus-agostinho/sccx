import useCloseMenu from "@/src/hooks/useCloseMenu";
import CardMenu from "../Ui/CardMenu";

const HeaderMenu = ({toogleMenuHandler}) => {
    const cardRef = useCloseMenu(toogleMenuHandler);

  return (
    <CardMenu ref={cardRef}>
      <li>Adicionar Salario</li>
    </CardMenu>
  );
};

export default HeaderMenu;
