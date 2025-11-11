import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { VideoPlayer } from "@/components/VideoPlayer";
import viniciusHero from "@/assets/vinicius-hero.jpg";
import { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);
  const whatsappLink = "https://wa.me/5521965544965";
  const whatsappWithText = "https://wa.me/5521965544965?text=Olá%20Vinícius,%20quero%20elevar%20minha%20comunicação%20digital.";

  const whyCards = [
    {
      title: "Visão Estratégica",
      description: "Entendo de marketing e posicionamento, não apenas edição.",
    },
    {
      title: "Estilo Próprio",
      description: "Edição moderna, limpa e adaptada ao DNA de cada cliente.",
    },
    {
      title: "Experiência Real",
      description: "Já editei para especialistas e negócios digitais de referência.",
    },
    {
      title: "Entrega Completa",
      description: "Você recebe conteúdo pronto para publicar. Sem trabalho adicional.",
    },
  ];

  const portfolioVideos = [
    { 
      handle: "@phcardoso.oficial",
      src: "https://pub-9e61558332574649abc05e141adb3d10.r2.dev/comprimido-phcardoso.mp4",
      instagramUrl: "https://www.instagram.com/phcardoso.oficial"
    },
    { 
      handle: "@ovendedorempresario.ofc",
      src: "https://pub-9e61558332574649abc05e141adb3d10.r2.dev/comprimido-ovendedor.mp4",
      instagramUrl: "https://www.instagram.com/ovendedorempresario.ofc"
    },
    { 
      handle: "@phellipe_oliveira",
      src: "https://pub-9e61558332574649abc05e141adb3d10.r2.dev/comprimido-phellipe.mp4",
      instagramUrl: "https://www.instagram.com/phellipe_oliveira"
    },
    { 
      handle: "@cristina.ruffatto",
      src: "https://pub-9e61558332574649abc05e141adb3d10.r2.dev/comprimido-cristina.mp4",
      instagramUrl: "https://www.instagram.com/cristina.ruffatto"
    },
    { 
      handle: "@riveodonto",
      src: "https://pub-9e61558332574649abc05e141adb3d10.r2.dev/comprimido-riveodonto.mp4",
      instagramUrl: "https://www.instagram.com/riveodonto"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 glass-effect">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="animate-fade-in">
            <h1 className="text-xl font-bold text-foreground">Vinícius Medeiros</h1>
            <p className="text-sm text-muted-foreground">Editor e Estrategista Visual</p>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button asChild className="rounded-lg transition-smooth hover:scale-105 hover:shadow-lg">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Falar com Vinícius
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 animate-on-scroll">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                Eu construo autoridade em vídeo.
              </h2>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Não edito vídeos. Transformo conhecimento em percepção de valor.
              </p>
            </div>
            <Button asChild size="lg" className="rounded-lg text-base transition-smooth hover:scale-105 premium-shadow">
              <a href={whatsappWithText} target="_blank" rel="noopener noreferrer">
                Quero elevar minha comunicação
              </a>
            </Button>
          </div>
          <div className="relative animate-on-scroll">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl opacity-50"></div>
            <div className="relative rounded-2xl overflow-hidden premium-shadow aspect-[3/4] transition-smooth hover:scale-[1.02]">
              <img
                src={viniciusHero}
                alt="Vinícius Medeiros"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quem Sou Eu */}
      <section className="bg-secondary/30 py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8 animate-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Quem sou eu</h2>
            <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
              <p>
                Sou Vinícius, editor e estrategista visual.
                <br />
                Transformo conteúdos comuns em material de autoridade.
              </p>
              <p>
                Com olhar técnico, precisão narrativa e compromisso com resultado, desenvolvi o conceito de{" "}
                <strong>Edição de Autoridade Profissional</strong>: um modelo que une técnica, narrativa e propósito para construir percepção de valor em cada frame.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-xl space-y-2">
                <p>Eu não edito vídeos.</p>
                <p>Eu construo autoridade.</p>
              </blockquote>
              <p>
                Não é um serviço.
                <br />
                É uma experiência estratégica de posicionamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O Conceito */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8 animate-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Edição de Autoridade Profissional
            </h2>
            <div className="space-y-6 text-lg text-foreground/90">
              <p>
                Minha entrega não é "um vídeo bonito".
                <br />
                Minha entrega é <strong>posicionamento</strong>.
              </p>
              <ul className="space-y-4 ml-6">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Edição estratégica com narrativa clara</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Identidade visual consistente</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Comunicação alinhada à marca pessoal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Conteúdo pronto para publicar</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Por Que Funciona */}
      <section className="bg-secondary/30 py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center animate-on-scroll">
              Por que funciona
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyCards.map((card, index) => (
                <Card 
                  key={index} 
                  className="border-border/40 card-shadow transition-smooth hover:scale-105 hover:shadow-xl animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-foreground">{card.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 lg:py-32 overflow-x-hidden overflow-y-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4 animate-on-scroll">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Portfólio</h2>
              <p className="text-lg text-muted-foreground">
                Alguns vídeos que construí com intenção de gerar autoridade.
              </p>
            </div>

            <Carousel
              opts={{
                align: "center",
                loop: true,
                containScroll: false,
              }}
              className="w-full max-w-7xl mx-auto carousel-stacked"
            >
              <CarouselContent className="items-center">
                {portfolioVideos.map((video, index)  => (
                  <CarouselItem
                    key={index}
                    className="basis-full"
                    style={{
                      '--background-video': `url(${video.src})`
                    } as React.CSSProperties}
                  >
                    <div className="overflow-hidden rounded-xl"> 
                      <VideoPlayer
                        src={video.src}
                        handle={video.handle}
                        instagramUrl={video.instagramUrl}
                      />
                    </div>
                    
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <CarouselPrevious className="left-8 h-20 w-20 shadow-lg transition-all hover:scale-110" />
              <CarouselNext className="right-8 h-20 w-20 shadow-lg transition-all hover:scale-110" />

            </Carousel>
          </div>
        </div>
      </section>


      {/* CTA Final */}
      <section className="bg-primary text-primary-foreground py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent opacity-90"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-on-scroll">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              Pronto para elevar sua comunicação em outro nível?
            </h2>
            <p className="text-lg lg:text-xl opacity-95 leading-relaxed">
              Vamos conversar e entender o que faz sentido para o seu posicionamento.
              <br />
              Sem pacotes. Sem preço fixo. Cada entrega é personalizada.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="rounded-lg text-base px-8 py-6 text-lg font-semibold transition-smooth hover:scale-110 premium-shadow"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Falar com Vinícius agora
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Vinícius Medeiros. Edição de Autoridade Profissional.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;