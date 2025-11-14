"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import TextareaAutosize from 'react-textarea-autosize'

export function TextareaWithButton() {
  return (
    <div className="grid min-w-full min-h-full gap-2 text-white">
          <TextareaAutosize className="border rounded-md" minRows={12} minLength={12} />
      <Textarea  placeholder="Escreve aqui o resumo.🙂" />
      <Button className="bg-white text-black cursor-pointer">Enviar</Button>
    </div>
  )
}


