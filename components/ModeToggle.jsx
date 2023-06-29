import { useTheme } from "next-themes";
import { BsSun, BsMoon } from "react-icons/bs";

function ModeToggle() {
  const { theme, setTheme } = useTheme();

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
        {theme === "light" ? (
          <>
            <BsSun
              size={22}
              className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground"
            />
          </>
        ) : (
          <>
            <BsMoon
              size={22}
              className="rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground"
            />
          </>
        )}
      </button>
    </div>
  );
}

export default ModeToggle;
