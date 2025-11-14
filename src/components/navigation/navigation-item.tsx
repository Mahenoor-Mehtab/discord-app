"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { ActionTooltip } from "@/components/action-tooltip";

interface NavigationItemProps {
  id: string;
  imageUrl: string;
  name: string;
}

export const NavigationItem = ({ id, imageUrl, name }: NavigationItemProps) => {
    const params = useParams();
    const router = useRouter();

    const onClick = ()=>{
        router.push(`servers/${id}`)
    }




  return (
    <ActionTooltip side="right" align="center" label={name}>
     
      <button
     onClick={onClick}
     className="group relative flex items-center"
 >
        <div className={cn(
            "absolute left-0 bg-primary rounded-full transition-all w-[5px]",
            params?.serverId !== id && "group-hover: h-[21px]",
            params?.serverId === id ? "h-[35px]" : "h-[9px]"
        )}/>

        <div className={cn(
            "relative group flex mx-3 h-[49px] w-[49px] rounded-[25px] group-hover:rounded-[17px] transition-all overflow-hidden ",
            params?.serverId === id && "bg-primary/10 text-primary rounded-[17px] ")}>
<Image
fill
src={imageUrl}
alt="Channel"
/>
        </div>

        </button>


    </ActionTooltip>
  )
};
