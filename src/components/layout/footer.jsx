import HeartIcon from "../../assets/icons/HeartIcon";

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-sm text-gray-500 flex items-center gap-1">
          Built with
          <span className="inline-block">
            <HeartIcon />
          </span>
          by FitCoach AI
        </p>
        <div className="flex gap-4">
          <a
            href="#"
            className="text-sm text-gray-500 transition-colors hover:text-gray-900"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-sm text-gray-500 transition-colors hover:text-gray-900"
          >
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
