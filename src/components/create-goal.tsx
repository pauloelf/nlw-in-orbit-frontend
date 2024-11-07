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
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createGoal } from '../http/create-goal'
import { useQueryClient } from '@tanstack/react-query'

const createGoalForm = z.object({
  title: z.string().min(1, 'Informe a atividade que deseja realizar'),
  desiredWeeklyFrequency: z.coerce.number().min(1).max(7),
})

interface CreateGoalInterface extends z.infer<typeof createGoalForm> {}

export function CreateGoal() {
  const queryClient = useQueryClient()
  const { register, control, handleSubmit, formState, reset } =
    useForm<CreateGoalInterface>({
      resolver: zodResolver(createGoalForm),
    })

  const handleCreateGoal = async (data: CreateGoalInterface) => {
    await createGoal(data)

    queryClient.invalidateQueries({ queryKey: ['summary'] })
    queryClient.invalidateQueries({ queryKey: ['pending-goals'] })

    reset()
  }

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

        <form
          onSubmit={handleSubmit(handleCreateGoal)}
          className="flex flex-col flex-1 justify-between"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="title">Qual a atividade?</label>
              <Input
                id="title"
                placeholder="Praticar exercícios, meditar, etc..."
                autoFocus
                {...register('title')}
              />
              {formState.errors.title && (
                <p className="text-red-400 text-sm">
                  {formState.errors.title.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="title">Quantas vezes na semana?</label>
              <Controller
                control={control}
                name="desiredWeeklyFrequency"
                defaultValue={3}
                render={({ field }) => {
                  return (
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={String(field.value)}
                    >
                      <RadioGroupI value="1" text="1x na semana" emoji="🥱" />
                      <RadioGroupI value="2" text="2x na semana" emoji="🙂" />
                      <RadioGroupI value="3" text="3x na semana" emoji="😎" />
                      <RadioGroupI value="4" text="4x na semana" emoji="😜" />
                      <RadioGroupI value="5" text="5x na semana" emoji="🤨" />
                      <RadioGroupI value="6" text="6x na semana" emoji="🤯" />
                      <RadioGroupI
                        value="7"
                        text="Todos dias da semana"
                        emoji="🔥"
                      />
                    </RadioGroup>
                  )
                }}
              />
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
