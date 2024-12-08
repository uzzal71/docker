import { Navbar } from "./Navbar"
import { TodoBoard } from "./todo/TodoBoard"


export const Home = () => {
  return (
    <div>
        <Navbar />
        <TodoBoard />
    </div>
  )
}
