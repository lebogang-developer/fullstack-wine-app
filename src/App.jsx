import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import WineListPage from './components/WineListPage';
import AddWinePage from './components/AddWinePage';
import EditWinePage from './components/EditWinePage';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './components/LoginPage';

const App = () => {
  const [wines, setWines] = useState([]);
  const [wineToEdit, setWineToEdit] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('user')
  );

  const handleSave = (wine) => {
    if (editIndex !== null) {
      const updatedWines = wines.map((w, index) =>
        index === editIndex ? wine : w
      );
      setWines(updatedWines);
      setEditIndex(null);
      setWineToEdit(null);
    } else {
      setWines([...wines, wine]);
    }
  };

  const handleEdit = (index) => {
    setWineToEdit(wines[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setWines(wines.filter((_, i) => i !== index));
  };

  const handleLogin = (email, password) => {
    setIsAuthenticated(true);
  };

  return (
    <>
      <div className='min-h-screen bg-gray-100'>
        <h1 className='text-3xl font-bold text-center py-6'>My Wines App</h1>
        <Routes>
          <Route path='/login' element={<LoginPage onLogin={handleLogin} />} />
          <Route
            path='/wines'
            element={
              <ProtectedRoute>
                <AddWinePage onSave={handleSave} wineToEdit={wineToEdit} />
                <WineListPage
                  wines={wines}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              </ProtectedRoute>
            }
          />
          <Route path='/' element={<LoginPage onLogin={handleLogin} />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
