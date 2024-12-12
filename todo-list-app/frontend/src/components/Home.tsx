import { Navbar } from "./Navbar"
import { TodoBoard } from "./todo/TodoBoard"


export const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Home Page Subtitle</p>
        <Navbar />
        <TodoBoard />
    </div>
  )
}
