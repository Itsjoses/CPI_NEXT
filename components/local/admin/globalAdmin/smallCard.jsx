import { PrimaryColor } from "@/components/global/globalComponent";

export function SmallCard({value,title,icon}){
    const IconComponent = icon;

    return(
        <PrimaryColor className="w-full h-32 rounded-md p-4 drop-shadow-md flex ">
        <div className="w-1/2 flex justify-center h-full flex-col">
          <h3 className="text-3xl">{value}</h3>
          <p>{title}</p>
        </div>
        <div className="w-1/2 flex h-full justify-center items-center">
          <IconComponent className="w-full h-16"/>
        </div>
      </PrimaryColor>
    )
}