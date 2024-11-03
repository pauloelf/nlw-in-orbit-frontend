import { Dialog } from './components/ui/dialog'
import { EmptyGoals } from './components/empty-goals'
import { CreateGoal } from './components/create-goal'

export function App() {
  return (
    <Dialog>
      <EmptyGoals />
      <CreateGoal />
    </Dialog>
  )
}
