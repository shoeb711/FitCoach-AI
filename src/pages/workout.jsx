import { useState } from 'react';
import Chart from 'react-apexcharts';

export function Workout() {
  const [workoutData] = useState({
    options: {
      chart: {
        id: 'workout-progress'
      },
      xaxis: {
        categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4']
      }
    },
    series: [{
      name: 'Workouts Completed',
      data: [3, 4, 3, 5]
    }]
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Your Workout Plan</h1>
        <p className="text-gray-600">Track your progress and get personalized workout recommendations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Progress Tracking</h2>
          <Chart
            options={workoutData.options}
            series={workoutData.series}
            type="line"
            height={300}
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Today's Workout</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-md">
              <h3 className="font-medium">Exercise 1: Push-ups</h3>
              <p className="text-gray-600">3 sets of 10 reps</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-md">
              <h3 className="font-medium">Exercise 2: Squats</h3>
              <p className="text-gray-600">3 sets of 12 reps</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-md">
              <h3 className="font-medium">Exercise 3: Plank</h3>
              <p className="text-gray-600">3 sets of 30 seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}