import { Link, useLocation } from "react-router-dom";
import DumbellIcon from "../../assets/icons/DumbellIcon";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Workouts", href: "/workout" },
  { name: "Nutrition", href: "/nutrition" },
  { name: "Profile", href: "/profile" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Navbar() {
  const location = useLocation();

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center justify-between px-4 container mx-auto">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <DumbellIcon className="h-6 w-6" />
          <span>FitCoach AI</span>
        </Link>

        <div className="flex items-baseline space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => {
            const current = item.href === location.pathname;
            return (
              <NavLink
                key={item.name}
                as="a"
                to={item.href}
                aria-current={current ? "page" : undefined}
                className={classNames(
                  current
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
