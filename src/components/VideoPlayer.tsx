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
      {/* Container principal com perspectiva 3D */}
      <div className="relative w-full h-[500px] flex items-center justify-center video-3d-container">
        
        {/* Camada 1: Fundo ampliado com blur forte */}
        <div className="absolute inset-0 video-3d-background">
          <video
            src={src}
            loop
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover scale-150 blur-xl opacity-30 grayscale-[30%]"
          />
        </div>

        {/* Camada 2: Lateral esquerda inclinada */}
        <div className="absolute video-3d-left">
          <div className="aspect-[9/16] h-[450px] bg-secondary/50 rounded-lg overflow-hidden shadow-2xl">
            <video
              src={src}
              loop
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover blur-sm"
            />
          </div>
        </div>

        {/* Camada 3: Lateral direita inclinada */}
        <div className="absolute video-3d-right">
          <div className="aspect-[9/16] h-[450px] bg-secondary/50 rounded-lg overflow-hidden shadow-2xl">
            <video
              src={src}
              loop
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover blur-sm"
            />
          </div>
        </div>

        {/* Camada 4: Vídeo central nítido */}
        <div className="relative video-3d-center z-10">
          <div className="aspect-[9/16] h-[500px] bg-secondary/50 rounded-xl overflow-hidden shadow-2xl group">
            <video
              ref={videoRef}
              src={src}
              loop
              autoPlay
              muted
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
