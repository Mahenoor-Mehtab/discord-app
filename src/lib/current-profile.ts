import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/db";

export const currentProfile = async () => {
    const { userId } = await auth(); 
    console.log("auth result", userId);
    
    if (!userId) return null; 
    const profile = await prisma.profile.findUnique({
        where: {
            userId: userId  
        }
    });
    
    return profile;
};

// in this used to check all the user and server compoent to check the current profile 
