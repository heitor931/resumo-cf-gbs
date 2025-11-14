import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="min-w-[270px] text-white">
        <SelectValue placeholder="Seleciona uma disciplina" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Disciplinas</SelectLabel>
          <SelectItem value="Matemática I">Matemática I</SelectItem>
          <SelectItem value="Inglês">Inglês</SelectItem>
          <SelectItem value="C.P.E">C.P.E</SelectItem>
          <SelectItem value="grapes">M.I.C</SelectItem>
          <SelectItem value="pineapple">Informática</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
