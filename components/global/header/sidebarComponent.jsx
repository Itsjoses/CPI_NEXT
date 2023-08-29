import { FontColorComponent, IconColorComponent } from "../globalComponent";

export function NavbarButton({icon,text}){
    return(
        <div className='nav-content flex items-center items-center hover:bg-hoverPurple py-3 rounded-md'>
        <IconColorComponent className='icon min-w-16 flex justify-center'>
            {icon}
        </IconColorComponent>
        <div className='flex items-center'>
          <FontColorComponent className='box-border text-white ml-2 font-bold'>{text}</FontColorComponent>
        </div>
      </div>
    )
}