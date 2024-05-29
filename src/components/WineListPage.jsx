
import EditWinePage from './EditWinePage';

const WineListPage = ({ wines, onEdit, onDelete }) => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Wines</h2>
      <ul className="space-y-4">
        {wines.map((wine, index) => (
          <EditWinePage
            key={index} 
            wine={wine} 
            onEdit={() => onEdit(index)} 
            onDelete={() => onDelete(index)} 
          />
        ))}
      </ul>
    </div>
  );
};

export default WineListPage;
