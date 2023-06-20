import { useEffect, useRef } from "react";
import CardMenu from "../Ui/CardMenu";
import useCloseMenu from "@/src/hooks/useCloseMenu";

const CategoryMenu = ({ toogleMenuHandler }) => {
  const menuRef = useCloseMenu(toogleMenuHandler);

  return (
    <CardMenu ref={menuRef}>
      <li>Editar</li>
      <li>Adicionar</li>
      <li>Descontar</li>
      <li>Transferir</li>
    </CardMenu>
  );
};

export default CategoryMenu;
