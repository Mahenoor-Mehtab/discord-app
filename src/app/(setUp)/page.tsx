import InitialModal from "@/components/modals/initial-modal";
import { ModeToggle } from "@/components/mode-toggle";
import { prisma } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";

const SetupPage = async () => {
    // this profile is member of a server
    const profile = await initialProfile();

// basically yaha us user jiski profile login usko check kiya ja raha initially kis server me h 
// Member table batata hai ki kaunsa Profile kaunsa Server join kiya hua hai.
    const server = await prisma.server.findFirst({
        where:{
            members:{
                some:{
                    profileId:profile.id
                }
            }
        }
    })
    if(server) return redirect( `/servers/${server.id}`);


    return ( 
    <>
    <div>
       <InitialModal/>
             <ModeToggle/>
    </div>
    
    </> );
}
 
export default SetupPage;


