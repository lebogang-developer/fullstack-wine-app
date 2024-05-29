
import EditWinePage from './EditWinePage';

const WineListPage = ({ wines, onEdit, onDelete }) => {
  return (
    <div>
      <h2>My Wines</h2>
      <ul>
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
