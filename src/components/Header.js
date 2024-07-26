import { useState } from "react";
import Card from "./UI/Card";
import Modal from "./UI/Modal";

const Header = () => {
  const [showForm, setShowForm] = useState(false);

  const HandlerToShowForm = () => setShowForm(true);
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
