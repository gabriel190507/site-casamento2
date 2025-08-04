import { useState } from "react";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";

export default function WeddingSite() {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [giftSelected, setGiftSelected] = useState("");

  const handleConfirm = () => {
    if (name.trim()) {
      const data = {
        name,
        guests,
        message,
        giftSelected,
        timestamp: new Date().toISOString()
      };
      console.log("RSVP Data:", data);
      setConfirmed(true);
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Casamento de L&G 💍</h1>

      <Card className="max-w-md w-full mb-8">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-center">Confirme sua presença</h2>
          {!submitted ? (
            <div className="flex flex-col gap-4">
              <Input
                type="text"
                placeholder="Seu nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="number"
                placeholder="Número de acompanhantes"
                value={guests}
                min={1}
                onChange={(e) => setGuests(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Deixe uma mensagem (opcional)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button onClick={handleConfirm}>Confirmar Presença</Button>
            </div>
          ) : (
            <p className="text-green-600 font-medium text-center">
              Obrigado, {name}! Sua presença foi confirmada 💕
            </p>
          )}
        </CardContent>
      </Card>

      <Card className="max-w-md w-full mb-8">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-center">Lista de Presentes 🎁</h2>
          <p className="text-center mb-2">
            Escolha um presente ou contribua com o valor desejado via Pix:
          </p>
          <select
            className="w-full p-2 border rounded mb-4"
            value={giftSelected}
            onChange={(e) => setGiftSelected(e.target.value)}
          >
            <option value="">Selecione um presente</option>
            <option value="Jogo de panelas">Jogo de panelas</option>
            <option value="Vale viagem">Vale viagem</option>
            <option value="Kit cama e banho">Kit cama e banho</option>
            <option value="Contribuição livre">Contribuição livre 💰</option>
          </select>
          <div className="bg-white border rounded p-4 text-center">
            <p className="font-semibold">Chave Pix:</p>
            <p className="text-pink-600 font-mono">seuemail@exemplo.com</p>
          </div>
        </CardContent>
      </Card>

      <Card className="max-w-md w-full mb-8">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-center">Local do Casamento 📍</h2>
          <p className="text-center mb-4">Sítio Encanto das Águas - Sorocaba/SP</p>
          <iframe
            className="w-full h-64 rounded"
            src="https://www.google.com/maps/embed?pb=!1m18..."
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </CardContent>
      </Card>

      <footer className="text-sm text-gray-500 mt-auto pt-6 text-center">
        Com amor, L&G ❤️
      </footer>
    </div>
  );
}
