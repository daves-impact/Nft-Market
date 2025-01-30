// import { FaSearch } from 'react-icons/fa';
import '../styles/searchbar.css';

export default function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Items, collections and creators" />
      <select>
        <option>Category</option>
      </select>
      {/* <FaSearch className="search-icon" /> */}
    </div>
  );
}
