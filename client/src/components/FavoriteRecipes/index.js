import React from 'react';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';

function FavoriteRecipes() {
    return (
        <div className='favRecipes'>
            <h1> <SavedSearchIcon /> Favorite Recipes </h1>
            <ul>
                <li> Recipe 1 </li>
                <li> Recipe 2 </li>
                <li> Recipe 3 </li>
                <li> Recipe 4 </li>
            </ul>
        </div>
    )
}

export default FavoriteRecipes;