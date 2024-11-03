import { X } from 'lucide-react'
import { Button } from '../components/ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '../components/ui/dialog'
import { Input } from '../components/ui/input'
import { RadioGroup } from '../components/ui/radio-group'
import { RadioGroupI } from '../components/radio-group-item'

export function CreateGoal() {
  return (
    <DialogContent>
      <div className="flex flex-col gap-6 h-full">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <DialogTitle>Cadastrar meta</DialogTitle>
            <DialogClose>
              <X className="size-5 text-zinc-600" />
            </DialogClose>
          </div>

          <DialogDescription>
            Adicione atividades que te fazem bem e que você quer continuar
            praticando toda semana.
          </DialogDescription>
        </div>

        <form action="" className="flex flex-col flex-1 justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="title">Qual a atividade?</label>
              <Input
                id="title"
                placeholder="Praticar exercícios, meditar, etc..."
                autoFocus
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="title">Quantas vezes na semana?</label>
              <RadioGroup>
                <RadioGroupI value="1" text="1x na semana" emoji="🥱" />
                <RadioGroupI value="2" text="2x na semana" emoji="🙂" />
                <RadioGroupI value="3" text="3x na semana" emoji="😎" />
                <RadioGroupI value="4" text="4x na semana" emoji="😜" />
                <RadioGroupI value="5" text="5x na semana" emoji="🤨" />
                <RadioGroupI value="6" text="6x na semana" emoji="🤯" />
                <RadioGroupI value="7" text="Todos dias da semana" emoji="🔥" />
              </RadioGroup>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <DialogClose asChild>
              <Button className="flex-1" variant="secondary">
                Fechar
              </Button>
            </DialogClose>
            <Button className="flex-1">Salvar</Button>
          </div>
        </form>
      </div>
    </DialogContent>
  )
}
