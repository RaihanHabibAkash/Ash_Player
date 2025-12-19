import SectionGridSkeleton from "@/components/skeletons/SectionGridSkeleton";
import { Button } from "@/components/ui/button";
import PlayButton from "./PlayButton.jsx";
import { useEffect, useState } from "react";
import FeaturedGridSkeleton from "@/components/skeletons/FeaturedGridSkeleton.jsx";

const SectionGrid = ({ title, songs, isLoading }) => {
    const [isMobile , setIsMobile] = useState(false);
    
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();

        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    },[]);

    if(!isMobile) {
        if(isLoading){ 
        return <SectionGridSkeleton />
        } else {
            return(
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl sm:text-2xl font-bold">
                        {title}
                    </h2>
                    <Button variant="link" className="text-sm text-white/50 hover:text-white cursor-pointer">
                        Show all
                    </Button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {songs.map((song) => (
                            <div key={song._id} className="bg-zinc-800/40 p-4 rounded-md hover:bg-zinc-700/40 
                            transition-all group cursor-pointer border-b-3 hover:border-green-500">
                                <div className="relative mb-4">
                                    <div className="aspect-square rounded-md shadow-lg overflow-hidden">
                                        <img src={song.imageUrl} alt={song.title} className="w-full h-full object-cover 
                                        transition-transform duration-300 group-hover:scale-110" />
                                    </div>
                                    <PlayButton song={song} />
                                </div>
                                <h3 className="font-medium mb-2 truncate text-white/80 group-hover:text-green-500">
                                    {song.title}
                                </h3>
                                <p className="text-sm text-white/50 truncate group-hover:text-white">
                                    {song.artist}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            );
    }

    } else {
        if(isLoading){ 
            return <FeaturedGridSkeleton />
        } else {
            return( 
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                { songs.map((song) => (
                    <div key={song._id} className="flex items-center bg-zinc-800/50 rounded-md border-b-3 hover:border-green-500 overflow-hidden hover:bg-zinc-700/50 
                    transition-colors group cursor-pointer relative group">
                        <img src={song.imageUrl} alt={song.title} className="w-16 sm:w-20 group-hover:scale-110 duration-300 h-16 sm:h-20 object-cover flex-shrink-0" />
                        <div className="flex-1 p-4">
                            <p className="font-medium truncate text-white/80 group-hover:text-white">
                                {song.title}
                            </p>
                            <p className="text-sm text-zinc-400 truncate group-hover:text-green-500">
                                {song.artist}
                            </p>
                        </div>
                        <PlayButton song={song} />
                    </div>
                ))}
            </div>
        );
        }
    }
    

    
};

export default SectionGrid;