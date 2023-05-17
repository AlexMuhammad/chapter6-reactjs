/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SearchPage from "./pages/SearchPage"
import useFetch from "./hooks/useFetch"
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  const { data, error } = useFetch(`https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json`)
  console.log("tessssssss", data)
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/sewa" element={<SearchPage data={data} />} />
      </Routes>
    </>
  )
}

export default App
