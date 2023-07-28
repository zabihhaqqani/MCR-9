import { useDataContext } from "../context/DataContext"

const Home = () => {
    const {habit} = useDataContext()
    console.log(habit);
  return (
    <div>{habit.name}</div>
  )
}

export default Home