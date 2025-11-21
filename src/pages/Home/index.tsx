import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
import { Link } from "react-router";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MarsIcon, Menu, VenusIcon } from "lucide-react";
import { useState } from "react";

import ImgDogs from "@/utils/imageDogs";
import { doguinhos } from "@/data/doguinhos";

export default function AdocaoPage() {
  const [open, setOpen] = useState(false);
  const numeroWhatsApp = "5592992646326";

  const gerarLinkWhatsApp = (nome: string) => {
    const mensagem = encodeURIComponent(
      `Olá! Tenho interesse em adotar o ${nome}.`
    );
    return `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-linear-to-b from-yellow-50 to-white text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center p-5 shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-yellow-700">
          Filhotes do Tyrion & Sansa
        </h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#inicio" className="hover:text-yellow-700">
            Início
          </a>
          <a href="#filhotes" className="hover:text-yellow-700">
            Filhotes
          </a>
          <a href="#pais" className="hover:text-yellow-700">
            Sobre os Pais
          </a>
          <a href="#adotar" className="hover:text-yellow-700">
            Como Adotar
          </a>
          <a href="#contato" className="hover:text-yellow-700">
            Contato
          </a>
        </nav>

        {/* Menu mobile */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen} modal={false}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-yellow-700">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white w-64 p-6">
              <nav className="flex flex-col space-y-4 text-lg">
                <a href="#inicio" onClick={() => setOpen(false)}>
                  Início
                </a>
                <a href="#filhotes" onClick={() => setOpen(false)}>
                  Filhotes
                </a>
                <a href="#pais" onClick={() => setOpen(false)}>
                  Sobre os Pais
                </a>
                <a href="#adotar" onClick={() => setOpen(false)}>
                  Como Adotar
                </a>
                <a href="#contato" onClick={() => setOpen(false)}>
                  Contato
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="flex flex-col items-center justify-center text-center py-20 px-6 bg-yellow-100"
      >
        <h2 className="text-4xl font-bold mb-4">
          🐾 Encontre seu novo melhor amigo!
        </h2>
        <p className="max-w-2xl text-lg text-gray-600">
          Conheça os filhotes do Tyrion e da Sansa — uma turma cheia de energia,
          carinho e personalidades únicas, prontos para fazer parte da sua
          família.
        </p>
      </section>

      {/* Carousel */}
      {/*
      <section id="filhotes" className="py-10 bg-yellow-100">
        <div className="max-w-4xl mx-auto relative">
          {" "}
          <Carousel className="w-full">
            <CarouselContent>
              {Object.entries(doguinhos).map(([nome, dados]) => (
                <CarouselItem key={nome} className="flex flex-col items-center">
                  <img
                    src={dados.imagem}
                    alt={nome}
                    className="w-64 h-64 object-cover rounded-2xl shadow-md mb-4"
                  />
                  <h3 className="text-xl font-semibold text-yellow-800">
                    {nome.replace("_", " ")}
                  </h3>
                  <p className="text-gray-600">{dados.descricao}</p>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow rounded-full" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow rounded-full" />
          </Carousel>
        </div>
      </section>
      */}

      {/* Cards Individuais */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-yellow-700 mb-8">
          Conheça Todos os Filhotes
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {Object.entries(doguinhos).map(([nome, dados]) => (
            <Card
              key={nome}
              className="shadow-md hover:shadow-lg transition rounded-2xl"
            >
              <CardContent className="p-4 flex flex-col items-center">
                <img
                  src={dados.imagem}
                  alt={nome}
                  className="w-48 h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-semibold text-yellow-800 mb-2">
                  {nome.replace("_", " ")}
                </h3>
                <p className="text-gray-600 mb-2">{dados.descricao}</p>
                {dados.sexo === 1 ? (
                  <MarsIcon
                    color="#42a7f5"
                    strokeWidth="3"
                    size={40}
                    className="mb-2"
                  />
                ) : (
                  <VenusIcon
                    color="pink"
                    strokeWidth="3"
                    size={40}
                    className="mb-2"
                  />
                )}

                {dados.adotado ? (
                  <Button
                    disabled
                    className="bg-gray-300 text-gray-600 cursor-not-allowed rounded-xl"
                  >
                    🏡 Já Adotado
                  </Button>
                ) : (
                  <a
                    href={gerarLinkWhatsApp(nome)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-xl">
                      Quero Adotar
                    </Button>
                  </a>
                )}

                <Link to={`/detalhe/${nome}`}>
                  <Button variant="link" className="rounded-xl mt-2">
                    Detalhes
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Sobre os Pais */}
      <section id="pais" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-yellow-700 mb-6">
          Sobre os Pais
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          <strong>Tyrion</strong> é um companheiro brincalhão e protetor, sempre
          atento e muito carinhoso. <br />
          <strong>Sansa</strong> é doce, inteligente e adora cuidar dos pequenos
          — uma verdadeira mãezona! Juntos, eles tiveram uma ninhada linda e
          saudável.
        </p>
        <div className="flex justify-center">
          <img
            src={ImgDogs.imgTyrionSansa}
            alt="Tyrion e Sansa"
            className="w-72 h-72 object-cover rounded-2xl shadow-md mt-4"
          />
        </div>
      </section>

      {/* Como Adotar */}
      <section id="adotar" className="bg-yellow-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-yellow-700 mb-6">Como Adotar</h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-4">
          Quer adotar um dos nossos filhotes? 💕 Siga os passos abaixo:
        </p>
        <ol className="text-gray-700 list-decimal list-inside space-y-2 max-w-md mx-auto text-left">
          <li>Veja as fotos e conheça um pouco sobre cada um.</li>
          <li>
            Clique em <strong>“Quero Adotar”</strong> para nos enviar uma
            mensagem.
          </li>
          <li>
            Combinamos uma conversa rápida para conhecer melhor o futuro lar.
          </li>
        </ol>
        <p className="mt-4 text-gray-600">
          Nosso objetivo é garantir que cada filhote tenha um lar cheio de amor
          e cuidado.
        </p>
      </section>

      {/* Contato */}
      <section id="contato" className="py-16 bg-yellow-100 text-center">
        <h2 className="text-3xl font-bold text-yellow-700 mb-4">
          Entre em Contato
        </h2>
        <p className="text-gray-700 mb-4">
          📞 WhatsApp:{" "}
          <a
            href={`https://wa.me/${numeroWhatsApp}`}
            className="text-yellow-800 underline"
          >
            (92) 99264-6326
          </a>
        </p>
        {/* <p className="text-gray-700">
          📷 Instagram:{" "}
          <a
            href="https://instagram.com/seuPerfil"
            className="text-yellow-800 underline"
          >
            @seuPerfil
          </a>
        </p> */}
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 border-t">
        Feito com carinho por quem ama cães 🐶💚
      </footer>
    </div>
  );
}
