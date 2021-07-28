import React from "react";

function CategoryFilter({categories, selected, selectedSetter}) {

  function categoryButtonHandler(e) {
        console.log('categoryButtonHandler fired')
        let cat = e.target.textContent
        console.log(cat + ' category selected')
        selectedSetter(cat)
}

  const buttonsToDisplay = categories.map(category => {
    return (
      //give each button an onClick eListener
      //give each button a class that renders conditionally with state connected to the eListener
      //className below is determined by the value of each button's category in selected state object. 
      <button onClick = {categoryButtonHandler} 
              className = {(selected === "All" || selected === category)? "selected" : ""} 
              key = {category}
              >{category}
      </button>
    )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttonsToDisplay}
    </div>
  );
}

export default CategoryFilter;
