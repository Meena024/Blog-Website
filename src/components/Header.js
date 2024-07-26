import { useContext, useState } from "react";
import Card from "./UI/Card";
import Modal from "./UI/Modal";
import Context from "../Store/Context";

const Header = () => {
  const [showForm, setShowForm] = useState(false);
  const { setBlogToEdit } = useContext(Context);

  const HandlerToShowForm = () => {
    setBlogToEdit(null);
    setShowForm(true);
  };
  const HandlerToHideForm = () => setShowForm(false);

  return (
    <Card>
      <h1>Blog Website</h1>
      <button onClick={HandlerToShowForm}>Add New Blog</button>
      {showForm && <Modal onClose={HandlerToHideForm} />}
    </Card>
  );
};

export default Header;
