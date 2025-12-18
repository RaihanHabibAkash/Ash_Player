import FeaturedGridSkeleton from "@/components/skeletons/FeaturedGridSkeleton";
import { useMusicStore } from "@/stores/useMusicStore";
import PlayButton from "./PlayButton.jsx";

const FeaturedSection = () => {
    const { featuredSongs, isLoading, error } = useMusicStore();
    if(isLoading){
        return <FeaturedGridSkeleton />
    };
    if(error){
        return <p className="text-red-500 mb-4 text-lg">{ error }</p>
    };

    return( 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            { featuredSongs.map((song) => (
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
};

export default FeaturedSection;