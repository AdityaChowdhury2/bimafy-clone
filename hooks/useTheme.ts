import { ThemeContext } from "@/providers/ThemeContext";
import { useContext } from "react";

export const useTheme = () => useContext(ThemeContext);
