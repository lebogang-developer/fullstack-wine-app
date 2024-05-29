
const EditWinePage = ({ wine, onEdit, onDelete }) => {
  return (
    <li>
      {wine.name} ({wine.year})
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default EditWinePage;
