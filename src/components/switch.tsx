import { useTheme } from '@/theme/theme-provider';
import { Switch } from "@/components/ui/switch"; // ShadCN Switch
import { Sun, Moon } from "lucide-react";

interface ThemeSwitcherProps {
  theme: "light" | "dark" | "system";
}

export default function ThemeSwitcher({ theme }: ThemeSwitcherProps) {
  const { setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">



      <Switch
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        className="bg-gray-300 dark:bg-gray-700 relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >

      </Switch>

    </div>
  );
}
