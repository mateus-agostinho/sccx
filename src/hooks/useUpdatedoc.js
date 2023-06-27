import { collection, doc, updateDoc } from "@firebase/firestore";
import db from "../Firebase";

const useUpdateDoc = () => {
  const updateDocHandler = async (collection, id, upDateFields) => {
    const categoryDoc = doc(db, collection, id);
    await updateDoc(categoryDoc, upDateFields);
  };
  return updateDocHandler;
};

export default useUpdateDoc;
 