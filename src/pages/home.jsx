import { ArrowRight, Brain, Dumbbell, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Your AI-Powered Health & Fitness Coach
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Personalized workout plans, nutrition advice, and AI-driven insights to help you reach your fitness goals.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                to="/workout"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4">
              <div className="rounded-full bg-gray-100 p-4">
                <Dumbbell className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Personalized Workouts</h3>
              <p className="text-center text-gray-500">
                AI-generated workout plans tailored to your goals and fitness level.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="rounded-full bg-gray-100 p-4">
                <Utensils className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Nutrition Analysis</h3>
              <p className="text-center text-gray-500">
                Get detailed breakdowns of your meals and personalized nutrition advice.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="rounded-full bg-gray-100 p-4">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">AI Insights</h3>
              <p className="text-center text-gray-500">
                Smart recommendations and insights based on your progress.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}