export const generateMealPrompt = (mealDescription) => {
  return `Analyze the following meal: ${mealDescription}
  
  Provide the nutritional breakdown in **this strict JSON format only**:

  {
    "Protein": "XXg",
    "Calories": "XXX kcal",
    "Carbohydrates": "XXg",
    "Fats": "XXg",
    "Fiber": "Xg",
    "OtherNutrients": "Vitamins & Minerals (if applicable)"
  }

  **Do not include any explanations outside this JSON structure.** If ingredient details are unclear, make reasonable assumptions, but ensure the output remains strictly in JSON format.

  Example input:  
  100g Chicken, 150g Rice  

  Example output:  
  {
    "Protein": "30g",
    "Calories": "450 kcal",
    "Carbohydrates": "100g",
    "Fats": "5g",
    "Fiber": "2g",
    "OtherNutrients": "Vitamin B6, Iron"
  }`;
};
