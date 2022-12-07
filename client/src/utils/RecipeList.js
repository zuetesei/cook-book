import React from "react";

import NavLinks from "./components/LoggedInNav";

export default class RecipeList extends React.Component {
    render() {
        let style = {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            padding: "1rem",
            gridGap: "1rem 1rem"
        };

        return (
            <div>
                <NavLinks />
                <ul style={style}>
                    {this.props.list.map(recipe => {
                        return (
                            <li key={recipe.id}>
                                <div>
                                    <img className="thumb" alt="" src={recipe._links.avatar.href} />
                                </div>

                                <div className="userInfo">
                                    <p>
                                        {recipe.name}
                                    </p>
                                </div>
                                <button onClick={() => this.props.saveRecipe(recipe)}>
                                    Add Recipe to Favorites
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
};
