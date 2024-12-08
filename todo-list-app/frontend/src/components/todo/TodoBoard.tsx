import { Card } from "@mui/material"
import { TodoList } from "./TodoList"

export const TodoBoard = () => {
  return (
    <Card sx={{ padding: "1rem 2rem" }}>
        <TodoList />
    </Card>
  )
}
