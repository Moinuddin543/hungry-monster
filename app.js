// const searchBtn = document.getElementById('search-btn');
// searchBtn.addEventListener('click', function(){
//     const mealInput = document.getElementById('meal-input').value;

//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInput}`
//     fetch(url)
//     .then(res => res.json())
//     .then(data => mealMenu(data.meals));

//     const mealMenu = (meals) => {
//         console.log(meals)

//         if(meals == null){
//             document.getElementById(meal-info).innerText = "Sorry, Results Not found !"
//         }
//         else{
//             const mealsDiv = document.getElementById(meal-info);
//             meals.forEach(meal => {
//                 const mealDiv = document.createElement("div");
//                 mealDiv.className = "col-md-3 meal mt-4";
//             const mealInfo = `
//             <h3>'${meal.strMeal}'</h3>
//             `;
//             mealDiv.innerHTML = mealInfo;
//             mealInfo.appendChild(mealDiv);
//             });

//         }
//     }
// })



const searchMeals = () => {
    const mealInput = document.getElementById('meal-input').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInput}`
    // load data
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    const mealInfo = document.getElementById('meal-info');

    meals.forEach(meal => {
        // console.log(meal)
        const  mealDiv = document.createElement('div');
        mealDiv.className = "col-md-3 meal mt-4";
        mealDiv.innerHTML = `
        <div onclick="displayMealDetail(
        '${meal.strMeal}')" class="card">
          <img src= ${meal.strMealThumb} alt="" />        
        <div class="card-body text-center">
         <h3>${meal.strMeal}</h3>
        </div>
        </div>

        `;
        mealInfo.appendChild(mealDiv);
    })
    
}

const displayMealDetail = ( strMeal) => {
    const url= `https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`
    fetch(url)
    .then(res => res.json())
    .then(data => mealInfo(data.meals[0]));
   
}


const mealInfo = (meal) => {
    const inputArea = document.getElementById('input-area');
    inputArea.style.display = 'none';
    const mealInfo = document.getElementById('meal-info');
    mealInfo.style.display = 'none';
       const mealDetail = document.getElementById('meal-detail');
       mealDetail.innerHTML = `
         <div class="col-lg-6 card m-auto meal-detail">
         <img class="img-fluid" src="${meal.strMealThumb}" />
         <h1 class="mt-4 p-3">${meal.strMeal}</h1>
         <h3 class="mt-3 p-3">Ingredients</h3>
         <p class="p-3">
         <i class="fas fa-check-square"></i>
          ${meal.strIngredient1} </br> 
          <i class="fas fa-check-square"></i>
          ${meal.strIngredient2} </br> 
          <i class="fas fa-check-square"></i>
          ${meal.strIngredient3} </br> 
          <i class="fas fa-check-square"></i>
          ${meal.strIngredient4} </br> 
          <i class="fas fa-check-square"></i>
          ${meal.strIngredient5} </br> 
          <i class="fas fa-check-square"></i>
          ${meal.strIngredient6} </br> 
          
         </p>
         </div>
       `
}
