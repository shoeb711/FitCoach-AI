import axios from "axios";
import { useState } from "react";
import Chart from "react-apexcharts";
import { generateMealPrompt } from "../helper";

export function Nutrition() {
  const [nutritionData, setNutritionData] = useState({
    options: {
      chart: { type: "donut" },
      labels: [],
      colors: ["#10B981", "#3B82F6", "#F59E0B"],
    },
    series: [], // Default values
    otherNutrients: "",
  });

  const [loading, setLoading] = useState(false);

  const fetchNutritionData = async (mealDescription) => {
    setLoading(true);
    try {
      const prompt = generateMealPrompt(mealDescription);
      const res = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${
          import.meta.env.VITE_GEMINI_API_KEY
        }`,
        { contents: [{ parts: [{ text: prompt }] }] }
      );

      const responseText =
        res?.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No data available.";

      try {
        const cleanedResponse = responseText.replace(/```json|```/g, "").trim();

        const jsonData = JSON.parse(cleanedResponse);

        const labels = [];
        const series = [];
        let otherNut = "";

        Object.entries(jsonData).forEach(([key, value]) => {
          if (key === "OtherNutrients") {
            otherNut = value;
          } else {
            const numericValue = Number(value.replace(/\D/g, ""));
            if (!isNaN(numericValue)) {
              labels.push(key);
              series.push(numericValue);
            }
          }
        });

        setNutritionData({
          options: {
            labels: labels,
          },
          series: series,
          otherNutrients: otherNut,
        });
      } catch (parseError) {
        console.error("JSON Parsing Error:", parseError);
      }
    } catch (error) {
      console.error("Error fetching nutrition data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const mealDescription = event.target.elements.mealDescription.value.trim();
    if (mealDescription) {
      await fetchNutritionData(mealDescription);
    } else {
      alert("Please enter a meal description.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Meal Nutrition Analyzer</h1>
        <p className="text-gray-600">
          Track your nutrition and get personalized meal recommendations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Meal Input Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Add Meal</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Meal Description
              </label>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm pl-1"
                rows={4}
                name="mealDescription"
                placeholder="Enter your meal details (e.g., 1 cup rice, 100g chicken breast)"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              disabled={loading}
            >
              {loading ? "Analyzing..." : "Analyze Meal"}
            </button>
          </form>
        </div>

        {/* Nutrition Breakdown Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          {loading ? (
            <div className="h-full flex items-center justify-center">
              Loading...
            </div>
          ) : (
            <>
              <h2 className="text-xl font-semibold mb-4">
                Nutrition Breakdown
              </h2>
              <Chart
                options={nutritionData.options}
                series={nutritionData.series}
                type="donut"
                height={300}
              />

              <div className="mt-4 space-y-2">
                {nutritionData?.options?.labels?.map((label, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{label}:</span>
                    <span className="font-medium">
                      {nutritionData.series[index]}
                      {label === "Calories" ? " kcal" : "g"}
                    </span>
                  </div>
                ))}

                <div>
                  {nutritionData.otherNutrients && (
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold">Other Nutrients</h3>
                      <p>{nutritionData.otherNutrients}</p>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
