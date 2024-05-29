
const EditWinePage = ({ wine, onEdit, onDelete }) => {
  return (
    <li className="flex justify-between items-center p-4 border rounded-md shadow-sm bg-white">
      <div>
        <span className="block text-lg font-medium">{wine.name} ({wine.year})</span>
        <span className="block text-sm text-gray-600">Type: {wine.type}</span>
      </div>
      <div>
        <button 
          onClick={onEdit} 
          className="px-3 py-1 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Edit
        </button>
        <button 
          onClick={onDelete} 
          className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default EditWinePage;
