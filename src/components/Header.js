import React,{useState} from 'react'
import ShoppingList from './ShoppingList';
import items from '../data/items';

export const Header = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    function handleDarkModeClick() {
        setIsDarkMode((isDarkMode) => !isDarkMode);
    }
   
  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
        <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
            {isDarkMode ? "Dark" : "Light"} Mode
        </button>
        </header>

        <ShoppingList items={items}/>
    </div>
    
  )
}
