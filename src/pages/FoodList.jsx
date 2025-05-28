import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Home, Users, Target, Settings, Power, Plus, Edit3, X } from 'lucide-react';
import '../styles/FoodList.css';

function FoodList() {
  const navigate = useNavigate();
  const [foods, setFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [newFoodData, setNewFoodData] = useState({
    name: '',
    price: '',
    category: 'starters',
    description: '',
    image: null,
    imagePreview: null
  });

  const categories = ['All', '699 THB', '799 THB', '899 THB', '999 THB'];

  useEffect(() => {
    // Mock data with Japanese food items
    const mockFoods = [
      { 
        id: 1, 
        name: 'GYOZA', 
        price: 699, 
        category: 'starters', 
        description: 'Pan-fried pork dumplings', 
        image: '/lovable-uploads/a7b6f574-25c9-49c2-8e74-e0c1d33a8d74.png',
        items: ['GYOZA', 'RICE', 'TEMPURA']
      },
      { 
        id: 2, 
        name: 'YAKITORI', 
        price: 699, 
        category: 'mains', 
        description: 'Grilled chicken skewers', 
        image: '/lovable-uploads/a7b6f574-25c9-49c2-8e74-e0c1d33a8d74.png',
        items: ['YAKITORI', 'CURRY', 'MAKI']
      },
      { 
        id: 3, 
        name: 'KARAAGE', 
        price: 699, 
        category: 'mains', 
        description: 'Japanese fried chicken', 
        image: '/lovable-uploads/a7b6f574-25c9-49c2-8e74-e0c1d33a8d74.png',
        items: ['KARAAGE', 'CHEESECAKE', 'TAIYAKI']
      },
      { 
        id: 4, 
        name: 'NIGIRI', 
        price: 799, 
        category: 'mains', 
        description: 'Fresh sushi nigiri set', 
        image: '/lovable-uploads/a7b6f574-25c9-49c2-8e74-e0c1d33a8d74.png',
        items: ['NIGIRI', 'EDAMAME', 'TEMPURA']
      },
      { 
        id: 5, 
        name: 'RAMEN', 
        price: 799, 
        category: 'mains', 
        description: 'Traditional tonkotsu ramen', 
        image: '/lovable-uploads/a7b6f574-25c9-49c2-8e74-e0c1d33a8d74.png',
        items: ['RAMEN', 'SASHIMI', 'KATSU']
      },
      { 
        id: 6, 
        name: 'DANGO', 
        price: 799, 
        category: 'desserts', 
        description: 'Sweet rice dumplings', 
        image: '/lovable-uploads/a7b6f574-25c9-49c2-8e74-e0c1d33a8d74.png',
        items: ['DANGO', 'MATCHACKE', 'DORAYAKI']
      },
      { 
        id: 7, 
        name: 'TAKO YAKI', 
        price: 899, 
        category: 'starters', 
        description: 'Octopus balls', 
        image: '/lovable-uploads/a7b6f574-25c9-49c2-8e74-e0c1d33a8d74.png',
        items: ['TAKO YAKI', 'SHISHITO', 'TEMPURA']
      },
      { 
        id: 8, 
        name: 'YUDOFU', 
        price: 899, 
        category: 'mains', 
        description: 'Hot tofu in kombu broth', 
        image: '/lovable-uploads/a7b6f574-25c9-49c2-8e74-e0c1d33a8d74.png',
        items: ['YUDOFU', 'SOBA', 'HAMACHI']
      },
      { 
        id: 9, 
        name: 'GYOZA', 
        price: 899, 
        category: 'desserts', 
        description: 'Premium matcha dessert', 
        image: '/lovable-uploads/a7b6f574-25c9-49c2-8e74-e0c1d33a8d74.png',
        items: ['GYOZA', 'CHEESECAKE', 'MONAKA']
      }
    ];
    setFoods(mockFoods);
  }, []);

  const filteredFoods = foods.filter(food => {
    if (selectedCategory === 'All') return true;
    const categoryPrice = selectedCategory.split(' ')[0];
    return food.price.toString() === categoryPrice;
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewFoodData({
        ...newFoodData,
        image: file,
        imagePreview: URL.createObjectURL(file)
      });
    }
  };

  const handleAddFood = () => {
    const newFood = {
      id: foods.length + 1,
      ...newFoodData,
      price: parseInt(newFoodData.price),
      image: newFoodData.imagePreview,
      items: [newFoodData.name.toUpperCase()]
    };
    setFoods([...foods, newFood]);
    setIsAddModalOpen(false);
    setNewFoodData({
      name: '',
      price: '',
      category: 'starters',
      description: '',
      image: null,
      imagePreview: null
    });
  };

  const handleEditFood = () => {
    const updatedFoods = foods.map(food => 
      food.id === selectedFood.id ? {...selectedFood} : food
    );
    setFoods(updatedFoods);
    setIsEditModalOpen(false);
  };

  const handleFoodClick = (food) => {
    setSelectedFood(food);
    setIsViewModalOpen(true);
  };

  return (
    <div className="food-dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="restaurant-profile">
          <div className="avatar">
            <span>IZ</span>
          </div>
          <div className="restaurant-name">Izakaya</div>
        </div>

        <div className="search-section">
          <div className="search-bar">
            <Search className="search-icon" size={20} />
            <input type="text" placeholder="Search for food" />
          </div>
        </div>
        
        <nav className="navigation">
          <div className="nav-item active" onClick={() => navigate('/')}>
            <Home size={20} />
            <span>Home</span>
          </div>
          <div className="nav-item">
            <Users size={20} />
            <span>Manage employees</span>
          </div>
          <div className="nav-item">
            <Target size={20} />
            <span>Promotion</span>
          </div>
          <div className="nav-item">
            <Settings size={20} />
            <span>Setting</span>
          </div>
        </nav>
        
        <div className="logout-section">
          <div className="nav-item logout">
            <Power size={20} />
            <span>Log out</span>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="main-content">
        {/* Category Filters */}
        <div className="category-filters">
          {categories.map((category) => (
            <button 
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category === 'All' ? (
                <>
                  <span className="category-icon">📋</span>
                  All
                </>
              ) : (
                <>
                  <span className="category-icon">🔥</span>
                  {category}
                </>
              )}
            </button>
          ))}
          <div className="view-all">
            <span>view all</span>
            <span className="arrow">→</span>
          </div>
        </div>
        
        {/* Food Grid */}
        <div className="food-grid">
          {filteredFoods.map((food) => (
            <div 
              key={food.id} 
              className="food-card"
              onClick={() => handleFoodClick(food)}
            >
              <div className="food-card-header">
                <h3 className="food-brand">IZAKAYA</h3>
                <div className="food-price">{food.price} <span>THB</span></div>
              </div>
              
              <div className="food-items">
                {food.items && food.items.map((item, index) => (
                  <div key={index} className="food-item-circle">
                    <div className="food-item-image"></div>
                    <span className="food-item-name">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          {/* Add New Food Card */}
          <div className="food-card add-card" onClick={() => setIsAddModalOpen(true)}>
            <div className="add-content">
              <Plus size={48} className="add-icon" />
              <span>Add New Food</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add Food Modal */}
      {isAddModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Add New Food</h2>
              <button className="close-btn" onClick={() => setIsAddModalOpen(false)}>
                <X size={24} />
              </button>
            </div>
            
            <div className="modal-body">
              <div className="form-group">
                <label>Name:</label>
                <input 
                  type="text" 
                  value={newFoodData.name}
                  onChange={(e) => setNewFoodData({...newFoodData, name: e.target.value})}
                  placeholder="Enter food name"
                />
              </div>
              
              <div className="form-group">
                <label>Price (THB):</label>
                <input 
                  type="number" 
                  value={newFoodData.price}
                  onChange={(e) => setNewFoodData({...newFoodData, price: e.target.value})}
                  placeholder="Enter price"
                />
              </div>
              
              <div className="form-group">
                <label>Category:</label>
                <select 
                  value={newFoodData.category}
                  onChange={(e) => setNewFoodData({...newFoodData, category: e.target.value})}
                >
                  <option value="starters">Starters</option>
                  <option value="mains">Main Dishes</option>
                  <option value="desserts">Desserts</option>
                  <option value="drinks">Drinks</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Description:</label>
                <textarea 
                  value={newFoodData.description}
                  onChange={(e) => setNewFoodData({...newFoodData, description: e.target.value})}
                  placeholder="Enter description"
                  rows="3"
                />
              </div>
              
              <div className="form-group">
                <label>Image:</label>
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {newFoodData.imagePreview && (
                  <div className="image-preview">
                    <img src={newFoodData.imagePreview} alt="Preview" />
                  </div>
                )}
              </div>
            </div>
            
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setIsAddModalOpen(false)}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleAddFood}>
                Add Food
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* View Food Modal */}
      {isViewModalOpen && selectedFood && (
        <div className="modal-overlay">
          <div className="modal view-modal">
            <div className="modal-header">
              <h2>{selectedFood.name}</h2>
              <div className="modal-actions">
                <button 
                  className="btn btn-edit"
                  onClick={() => {
                    setIsViewModalOpen(false);
                    setIsEditModalOpen(true);
                  }}
                >
                  <Edit3 size={20} />
                  Edit
                </button>
                <button className="close-btn" onClick={() => setIsViewModalOpen(false)}>
                  <X size={24} />
                </button>
              </div>
            </div>
            
            <div className="modal-body">
              <div className="food-detail-grid">
                <div className="food-image-section">
                  <img src={selectedFood.image} alt={selectedFood.name} />
                </div>
                
                <div className="food-details-section">
                  <table className="details-table">
                    <tbody>
                      <tr>
                        <th>Name</th>
                        <td>{selectedFood.name}</td>
                      </tr>
                      <tr>
                        <th>Price</th>
                        <td>{selectedFood.price} THB</td>
                      </tr>
                      <tr>
                        <th>Category</th>
                        <td>{selectedFood.category}</td>
                      </tr>
                      <tr>
                        <th>Description</th>
                        <td>{selectedFood.description}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setIsViewModalOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Edit Food Modal */}
      {isEditModalOpen && selectedFood && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Edit Food</h2>
              <button className="close-btn" onClick={() => setIsEditModalOpen(false)}>
                <X size={24} />
              </button>
            </div>
            
            <div className="modal-body">
              <div className="form-group">
                <label>Name:</label>
                <input 
                  type="text" 
                  value={selectedFood.name}
                  onChange={(e) => setSelectedFood({...selectedFood, name: e.target.value})}
                />
              </div>
              
              <div className="form-group">
                <label>Price (THB):</label>
                <input 
                  type="number" 
                  value={selectedFood.price}
                  onChange={(e) => setSelectedFood({...selectedFood, price: parseInt(e.target.value)})}
                />
              </div>
              
              <div className="form-group">
                <label>Category:</label>
                <select 
                  value={selectedFood.category}
                  onChange={(e) => setSelectedFood({...selectedFood, category: e.target.value})}
                >
                  <option value="starters">Starters</option>
                  <option value="mains">Main Dishes</option>
                  <option value="desserts">Desserts</option>
                  <option value="drinks">Drinks</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Description:</label>
                <textarea 
                  value={selectedFood.description}
                  onChange={(e) => setSelectedFood({...selectedFood, description: e.target.value})}
                  rows="3"
                />
              </div>
              
              <div className="form-group">
                <label>Image:</label>
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setSelectedFood({
                        ...selectedFood,
                        image: URL.createObjectURL(file)
                      });
                    }
                  }}
                />
                <div className="image-preview">
                  <img src={selectedFood.image} alt={selectedFood.name} />
                </div>
              </div>
            </div>
            
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setIsEditModalOpen(false)}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleEditFood}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FoodList;