import { RadioGroupIndicator, RadioGroupItem } from './ui/radio-group'

interface radioGroupItemInterface {
  value: string
  text: string
  emoji: string
}

export function RadioGroupI({ value, text, emoji }: radioGroupItemInterface) {
  return (
    <RadioGroupItem value={value}>
      <RadioGroupIndicator />
      <span className="text-zinc-300 text-sm font-medium leading-none">
        {text}
      </span>
      <span className="text-lg leading-none">{emoji}</span>
    </RadioGroupItem>
  )
}
