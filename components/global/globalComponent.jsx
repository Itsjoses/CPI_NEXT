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

export function BtnCustom({ title,setFunction }) {
    return (
        <div>
        <button className="py-2 px-4 text-sm flex items-center rounded-full bg-green-200 w-fit" onMouseDown={setFunction}>
          {title}
        </button>
      </div>
    )

}

export function BallBounce({ Type }) {
  var state = "animate-bounce";
  if (Type == "login") state = "animate-bounce";
  else state = "animate-spin";
  return (
    <PrimaryColor className="hidden lg:flex h-screen w-1/2 flex items-center justify-center h-full relative">
      <div
        className={
          "w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full flex items-center justify-center " +
          state
        }
      >
        <div className="text-white text-4xl font-bold">CPI</div>
      </div>
      <div className="w-full h-[45%] backdrop-blur-lg absolute bottom-0"></div>
    </PrimaryColor>
  );
}
