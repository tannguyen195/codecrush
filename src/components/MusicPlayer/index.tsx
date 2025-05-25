import { useEffect, useRef, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import {  Volume2, VolumeOff } from "lucide-react";

function MusicPlayer() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const { start } = useAppContext();
    const togglePlayback = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
            audioRef.current.volume = 0.1; // Set volume to 10%
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        const playAudio = async () => {
            try {
                await audioRef.current?.play();
                setIsPlaying(true);
            } catch (err) {
                console.warn("Autoplay blocked:", err);
                setIsPlaying(false);
            }
        };
        if (!start) return; // Only play audio if the game has started
        playAudio();
    }, [start]);

    return (
        <div className="z-30 ">
            <audio

                ref={audioRef}
                hidden
                loop
                src="/sounds/main.mp3"
                onEnded={() => setIsPlaying(false)}
            />
            <div className="flex items-center justify-center">
                <button onClick={togglePlayback}>
                    {
                        !isPlaying ? (
                            <VolumeOff className={`w-6 h-6 text-yellow-400`} />
                        ) : (
                            <Volume2 className={`w-6 h-6 text-yellow-400`} />
                        )
                    }

                </button>
            </div>
        </div>
    );
}

export default MusicPlayer;
