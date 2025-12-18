import { Card, CardContent } from "@/components/ui/card";

const StatsCard = ({ bgColor, icon:Icon, iconColor, label, value }) => {
    return(
        <Card className="bg-zinc-800/50 border-zinc-700/50 group hover:bg-zinc-800/80 transition-colors border-2 hover:border-green-500">
            <CardContent className="p-6">
                <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg overflow-hidden ${bgColor}`}>
                        <Icon className={`size-6 group-hover:scale-140 duration-300 ${iconColor}`} />
                    </div>
                    <div>
                        <p className="text-sm text-white/50 group-hover:text-white">
                            {label}
                        </p>
                        <p className="text-2xl font-bold group-hover:text-green-500">
                            {value}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default StatsCard;