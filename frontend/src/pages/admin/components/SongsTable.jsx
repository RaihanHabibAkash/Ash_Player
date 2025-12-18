import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useMusicStore } from "@/stores/useMusicStore";
import { Calendar, Trash2 } from "lucide-react";

const SongsTable = () => {
    const { songs, isLoading, error, deleteSong } = useMusicStore();

    if(isLoading){
        return(
            <div className="flex items-center justify-center py-8">
                <div className="text-zinc-400">
                    Loading songs...
                </div>
            </div>
        );
    }
    if(error){
        return(
            <div className="flex items-center justify-center py-8">
                <div className="text-red-400">
                    {error}
                </div>
            </div>
        );  
    }

    return(
        <Table>
            <TableHeader>
                <TableRow className="hover:bg-zinc-800/50">
                    <TableHead className="w-[50px]"></TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Artist</TableHead>
                    <TableHead>Release Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {songs.map((song) => (
                    <TableRow key={song._id} className="hover:bg-zinc-800/50 border-b-3 hover:border-green-500 group">
                        <TableCell>
                            <img src={song.imageUrl} alt={song.title} className="size-10 rounded object-cover group-hover:scale-110 duration-300" />
                        </TableCell>
                        <TableCell className="font-medium text-white/80 group-hover:text-green-500">{song.title}</TableCell>
                        <TableCell className="font-medium text-white/50 group-hover:text-white">{song.artist}</TableCell>
                        <TableCell>
                            <span className="inline-flex items-center gap-1 text-white/50 group-hover:text-white">
                                <Calendar className="size-4 group-hover:text-green-500" />
                                {song.createdAt.split("T")[0]}
                            </span>
                        </TableCell>
                        <TableCell className="text-right">
                            <div className="flex gap-2 justify-end">
                                <Button variant="ghost" size="sm" onClick={() => deleteSong(song._id)}
                                className="text-red-400 hover:text-red-300 group-hover:text-green-500 hover:bg-red-400/10 cursor-pointer">
                                    <Trash2 className="size-4 cursor-pointer" />
                                </Button>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default SongsTable;