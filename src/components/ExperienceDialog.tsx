"use client";

import * as AlertDialog from "@radix-ui/react-alert-dialog";
import {useEffect, useState} from "react";
import {Star} from "lucide-react";
import toast, {Toaster} from "react-hot-toast";

export default function ExperienceDialog() {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState<number | null>(null);

  useEffect(() => {
    const hasSeenDialog = localStorage.getItem("experience-dialog-shown");

    if (!hasSeenDialog) {
      const timer = setTimeout(() => {
        setOpen(true);
        localStorage.setItem("experience-dialog-shown", "true");
      }, 120000); // 2 minutos después de entrar

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = () => {
    if (rating) {
      fetch("/api/feedback", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({starts: rating}),
      }).catch((error) => {
        console.error("Error submitting feedback:", error);
      });
    }
    toast.success("¡Gracias por tu feedback!");
    setOpen(false);
  };

  return (
    <AlertDialog.Root open={open} onOpenChange={setOpen}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 z-[999999] bg-black/50" />
        <AlertDialog.Content className="fixed top-1/2 left-1/2 z-[9999999] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-lg">
          <AlertDialog.Title className="text-xl font-semibold">
            ¿Cómo está siendo tu experiencia?
          </AlertDialog.Title>
          <AlertDialog.Description className="mt-2 text-gray-600">
            Ayudame calificando tu experiencia hasta ahora:
          </AlertDialog.Description>

          <div className="mt-4 flex justify-center space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-8 w-8 cursor-pointer ${
                  rating && star <= rating ? "fill-yellow-400 stroke-yellow-400" : "stroke-gray-400"
                }`}
                onClick={() => setRating(star)}
              />
            ))}
          </div>

          <div className="mt-6 flex justify-end space-x-2">
            <AlertDialog.Cancel asChild>
              <button
                className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                Cancelar
              </button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button
                className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
                disabled={!rating}
                onClick={handleSubmit}
              >
                Enviar
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            boxShadow: "none",
            borderRadius: "0.7rem",
            border: "1px solid #e0e0e0",
            background: "#ffff",
            color: "#0b0f23",
            fontWeight: "600",
          },
        }}
      />
    </AlertDialog.Root>
  );
}
