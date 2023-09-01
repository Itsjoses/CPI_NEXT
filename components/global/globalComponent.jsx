import {
  FontContext,
  IconContext,
  ThemeContext,
} from "@/context/themeComponent";
import { useContext, useEffect } from "react";

export function PrimaryColor({ children, ...attr }) {
  const theme = useContext(ThemeContext);

  return (
    <div style={theme.primaryColor} {...attr}>
      {children}
    </div>
  );
}

export function SecondaryColor({ children, ...attr }) {
  const theme = useContext(ThemeContext);

  return (
    <div style={theme.secondaryColor} {...attr}>
      {children}
    </div>
  );
}

export function ThridColor({ children, ...attr }) {
  const theme = useContext(ThemeContext);

  return (
    <div style={theme.thirdColor} {...attr}>
      {children}
    </div>
  );
}

export function IconColorComponent({ children, ...attr }) {
  const icon = useContext(IconContext);

  return (
    <div style={icon} {...attr}>
      {children}
    </div>
  );
}

export function FontColorComponent({ children, ...attr }) {
  const font = useContext(FontContext);
  return (
    <div style={font} {...attr}>
      {children}
    </div>
  );
}

export function BtnCustom({ title }) {
    return (
        <div>
        <button className="py-2 px-4 text-sm flex items-center rounded-full bg-green-200 w-fit">
          {title}
        </button>
      </div>
    )

}
