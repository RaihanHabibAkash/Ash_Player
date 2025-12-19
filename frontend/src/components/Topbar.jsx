import { SignedOut, UserButton } from "@clerk/clerk-react";
import SingnInAuthButtons from "./SingnInAuthButtons.jsx";
import { useAuthStore } from "@/stores/useAuthStore.js";
import { Link } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils.js";
import { buttonVariants } from "./ui/button.jsx";

const Topbar = () => {
    const { isAdmin } = useAuthStore();

    return (
        <div className="flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75
         backdrop-blur-md z-10">
             <div className="flex items-center gap-2">
                <a href="https://github.com/RaihanHabibAkash" target="_blank">
                    <img src="/extra/spotify.png" alt="Ash Music Player Logo" className="h-8" />
                </a>
                    <p className="text-bold hidden sm:inline">Music Player</p>
            </div>
            <div className="flex items-center gap-4">
                {
                isAdmin && (
                    <Link to={"/admin"} className={cn(
                        buttonVariants({ variant: "outline" })
                    )} >
                        <LayoutDashboard className="size-4 mr-2" />
                        <p className="hidden sm:inline-flex">
                            Admin Dashboard
                        </p>
                        
                    </Link>
                    )
                }

                <SignedOut>
                    <SingnInAuthButtons />
                </SignedOut>
                
                {/* Will be shown if we are SignIn */}
                <UserButton />
            </div>
        </div>
    );
}

export default Topbar;