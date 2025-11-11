import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoPlayerProps {
  src: string;
  handle: string;
  instagramUrl: string;
}

export const VideoPlayer = ({ src, handle, instagramUrl }: VideoPlayerProps) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="space-y-3">
      {/* Container principal */}
      <div 
        className="relative w-full h-[500px] flex items-center justify-center"
        style={{ perspective: "2000px" }}
      >

        {/* O "RETÂNGULO BLUR" DECORATIVO DA ESQUERDA */}
        <div 
          className="aspect-[9/16] h-[500px] bg-secondary/50 rounded-xl shadow-2xl 
                     absolute z-10 filter blur-md brightness-75"
          style={{
            transform: "translateX(-60%) translateZ(-100px)",
            opacity: 0.6,
            pointerEvents: "none" // Garante que não é clicável
          }}
        ></div>

        {/* O "RETÂNGULO BLUR" DECORATIVO DA DIREITA */}
        <div 
          className="aspect-[9/16] h-[500px] bg-secondary/50 rounded-xl shadow-2xl 
                     absolute z-10 filter blur-md brightness-75"
          style={{
            transform: "translateX(60%) translateZ(-100px)",
            opacity: 0.6,
            pointerEvents: "none" // Garante que não é clicável
          }}
        ></div>

        {/* Vídeo central nítido */}
        <div className="relative z-20">
          <div className="aspect-[9/16] h-[500px] bg-secondary/50 rounded-xl overflow-hidden shadow-2xl group">
            <video
              ref={videoRef}
              src={src}
              loop
              autoPlay
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover"
            />
            <Button
              onClick={toggleMute}
              size="icon"
              variant="secondary"
              className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Link do Instagram */}
      <Button
        asChild
        variant="link"
        className="text-sm text-muted-foreground hover:text-primary transition-colors w-full"
      >
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
          Edição para {handle}
        </a>
      </Button>
    </div>
  );
};