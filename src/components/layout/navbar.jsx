import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <Dumbbell className="h-6 w-6" />
          <span>FitCoach AI</span>
        </Link>

        <div className="ml-auto flex items-center gap-4">
          <Link
            to="/workout"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Workouts
          </Link>
          <Link
            to="/nutrition"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Nutrition
          </Link>
          <Link
            to="/profile"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}
