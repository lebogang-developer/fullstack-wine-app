import { useState, useEffect } from 'react';

const AddWinePage = ({ onSave, wineToEdit }) => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    if (wineToEdit) {
      setName(wineToEdit.name);
      setYear(wineToEdit.year);
    } else {
      setName('');
      setYear('');
    }
  }, [wineToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, year });
    setName('');
    setYear('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Wine Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Year:</label>
        <input 
          type="text" 
          value={year} 
          onChange={(e) => setYear(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default AddWinePage;
