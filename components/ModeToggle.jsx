import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BsMoon, BsSun } from "react-icons/bs";

function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  // THEME HANDLER
  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div>
      <button onClick={handleThemeChange}>
        {mounted && theme === "light" ? (
          <BsMoon
            size={22}
            className="text-black rotate-0 scale-100 transition-all dark:text-white dark:-rotate-90 dark:scale-1"
          />
        ) : (
          <BsSun
            size={22}
            className="text-foreground rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
        )}
      </button>
    </div>
  );
}

export default ModeToggle;
