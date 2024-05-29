import { useState, useEffect } from 'react';

const AddWinePage = ({ onSave, wineToEdit }) => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState('Red');

  useEffect(() => {
    if (wineToEdit) {
      setName(wineToEdit.name);
      setYear(wineToEdit.year);
      setType(wineToEdit.type);
    } else {
      setName('');
      setYear('');
      setType('Red');
    }
  }, [wineToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, year, type });
    setName('');
    setYear('');
    setType('Red');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-md mx-auto p-4 border rounded-md shadow-md bg-white'
    >
      <div className='mb-4'>
        <label className='block text-sm font-medium text-gray-700'>
          Wine Name:
        </label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-sm font-medium text-gray-700'>Year:</label>
        <input
          type='text'
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
          className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-sm font-medium text-gray-700'>Type:</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
        >
          <option value='Red'>Red</option>
          <option value='White'>White</option>
          <option value='Rose'>Rose</option>
          <option value='Red Blend'>Red Blend</option>
          <option value='White Blend'>White Blend</option>
        </select>
      </div>
      <button
        type='submit'
        className='w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
      >
        Save
      </button>
    </form>
  );
};

export default AddWinePage;
