export const generateHobbiesList = (hobbiesList: (string)[]): string => {

    let hobbiesString: string = '';
  
    for(let i:number = 0; i < hobbiesList.length; i++ ){

      hobbiesString += `<li> ${hobbiesList[i]} </li>`
    }
  
    return hobbiesString;
  
  }

export const generateFavoriteFoods = (foodList: string[]): string => {

    let foodString: string;
    foodString = '';

    for (let i: number = 0; i < foodList.length; i++){

        foodString += `<li> ${foodList[i]} </li>`
    }

    return foodString;

}