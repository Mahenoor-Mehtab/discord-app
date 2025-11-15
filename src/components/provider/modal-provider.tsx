"use client"

import { useEffect, useState } from "react";
import CreateServerModal from '@/components/modals/create-server-modal';

export const ModalProvider =() => {
    const [isMounted, setIsMounted] = useState(false);

    // Hydration error se bachne ke liye
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
         {/* {children}  */}
            <CreateServerModal />
        </>
    )
}

// ```

// // ---

// // ## Kya Hua Tha? 🤔

// // ### Before (Galat Flow):
// ```
// Layout → ThemeProvider → ModalProvider → ❌ (children missing)
//                                         ↓
//                                   Sidebar render nahi hua!
// ```

// ### After (Sahi Flow):
// ```
// Layout → ThemeProvider → ModalProvider → {children} ✅
//                                         ↓
//                             Sidebar + Pages render hue!
//                                         ↓
//                             CreateServerModal (overlay)