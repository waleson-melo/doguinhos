import { useParams, Link } from "react-router";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import { doguinhos } from "@/data/doguinhos";

export default function FilhoteDetalhes() {
  const { nome } = useParams();
  const numeroWhatsApp = "5592992646326";

  const dados = nome ? doguinhos[nome as keyof typeof doguinhos] : undefined;
  if (!dados) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center text-gray-600">
        <h2 className="text-2xl font-semibold mb-4">
          Filhote não encontrado 🐾
        </h2>
        <Link to="/">
          <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
            Voltar para a página inicial
          </Button>
        </Link>
      </div>
    );
  }

  const mensagem = encodeURIComponent(
    `Olá! Tenho interesse em adotar ${nome ? `o ${nome}` : "este filhote"}.`
  );

  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

  return (
    <div className="min-h-screen bg-linear-to-b from-yellow-50 to-white py-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-yellow-700 mb-6">
          {nome?.replace("_", " ")}
        </h1>
        <p className="text-lg text-gray-700 mb-4">{dados.descricao}</p>

        {/* Carrossel de fotos */}
        <div className="mb-8">
          <Carousel>
            <CarouselContent>
              {dados.fotos.map((foto, i) => (
                <CarouselItem key={i} className="flex justify-center">
                  <img
                    src={foto}
                    alt={`${nome} ${i + 1}`}
                    className="w-80 h-80 object-cover rounded-2xl shadow-md"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <p className="text-gray-700 italic mb-2">🐶 {dados.curiosidade}</p>
        <p className="text-gray-700 italic mb-8">⭐ 17/10/2025</p>

        <div className="flex justify-center space-x-4">
          {dados.adotado ? (
            <Button
              disabled
              className="bg-gray-300 text-gray-600 cursor-not-allowed rounded-xl"
            >
              🏡 Já Adotado
            </Button>
          ) : (
            <a href={linkWhatsApp} target="_blank" rel="noopener noreferrer">
              <Button className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-xl">
                Quero Adotar
              </Button>
            </a>
          )}
          <Link to="/">
            <Button variant="outline" className="rounded-xl">
              Voltar
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
