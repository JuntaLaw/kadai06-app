import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface iAppProps {
    title: string;
    overview: string;
    youtubeUrl: string;
    state: boolean;
    changestate: any;

}

export default function PlayVideoModal({
    changestate,
    overview,
    state,
    title,
    youtubeUrl,
}: iAppProps) {
    return (
        <Dialog open={state} onOpenChange={() => changestate(!state)}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription className="line-clamp-3">{overview}</DialogDescription>
                </DialogHeader>

            </DialogContent>

        </Dialog>
    )

}