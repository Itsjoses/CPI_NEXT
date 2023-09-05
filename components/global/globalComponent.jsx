import {
  FontContext,
  IconContext,
  ThemeContext,
} from "@/context/themeComponent";
import Link from "next/link";
import { useRouter } from "next/router";
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

export function BtnCustom({ title, setFunction }) {
  return (
    <div>
      <ThridColor
        className="text-white cursor-pointer py-2 px-4 text-sm flex items-center rounded-full bg-green-200 w-fit"
        onMouseDown={setFunction}
      >
        {title}
      </ThridColor>
    </div>
  );
}

export function BigBtn({ title, setFunction, ...tailwind }) {
  return (
    <div {...tailwind} onMouseDown={setFunction}>
      <ThridColor className="text-white flex justify-center p-2 rounded-md font-semibold cursor-pointer">
        {title}
      </ThridColor>
    </div>
  );
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

export function Modal({ title, subTitle }) {
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box bg-white">
        <h3 className="modal-title font-bold text-lg text-black"></h3>
        <p className="modal-subtitle py-4 text-black"></p>
        <div className="modal-action bg-white">
          <Link href={"/participant/"} className="btn text-white">
            Close
          </Link>
        </div>
      </div>
    </dialog>
  );
}

export function ModalOutsideClose({ title, subTitle }) {
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box  bg-white ">
        <h3 className="modal-title font-bold text-lg text-red-500">Hello!</h3>
        <p className="modal-subtitle py-4 text-black">
          Press ESC key or click outside to close
        </p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
