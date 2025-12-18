import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useMusicStore } from "@/stores/useMusicStore";
import { Calendar, Music, Trash } from "lucide-react";
import { useEffect } from "react";

const AlbumsTable = () => {
    const { albums, deleteAlbum, fetchAlbums } = useMusicStore();

    useEffect(() => {
        fetchAlbums();
    }, [fetchAlbums]);

    return(
        <Table>
            <TableHeader>
                <TableRow className="hover:bg-zinc-800/50">
                    <TableHead className="w-[50px]"></TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Artist</TableHead>
                    <TableHead>Release Year</TableHead>
                    <TableHead>Songs</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {albums.map((album) => (
                    <TableRow key={album._id} className="group hover:bg-zinc-800/50 border-b-3 hover:border-green-500" >
                        <TableCell>
                            <img src={album.imageUrl} alt={album.title} className="size-10 rounded object-cover group-hover:scale-110 duration-300" />
                        </TableCell>
                        <TableCell className="font-medium text-white/80 group-hover:text-green-500">{album.title}</TableCell>
                        <TableCell className="text-white/50 group-hover:text-white">{album.artist}</TableCell>
                        <TableCell>
                            <span className="inline-flex items-center gap-1 text-white/50 group-hover:text-white">
                                <Calendar className="size-4 group-hover:text-green-500" />
                                {album.releaseYear}
                            </span>
                        </TableCell>
                        <TableCell>
                            <span className="inline-flex items-center gap-1 text-white/80 group-hover:text-white">
                                <Music className="size-4 group-hover:text-green-500" />
                                {album.songs.length} songs
                            </span>
                        </TableCell>
                        <TableCell className="text-right">
                            <div className="flex gap-2 justify-end">
                                <Button variant="ghost" size="sm" onClick={ () => deleteAlbum(album._id) } 
                                className="text-red-400 hover:text-red-300 group-hover:text-green-500 hover:bg-red-400/10 cursor-pointer">
                                    <Trash className="size-4" />
                                </Button>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default AlbumsTable;