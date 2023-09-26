import { useRef, useState } from 'react'
import { useMovies } from './hooks/useMovies.jsx'
import  { Movies } from './components/Movies.jsx'
import './App.css'



function App() {
  const { movies } = useMovies()
  //forma controlada
  const [query, setQuery] = useState('')

  const handleSubmit = (event) =>{
   event.preventDefault()
   //forma no controlada
  //  const {query} = Object.fromEntries(
  //     new window.FormData(event.target)
  //   )
   
   console.log(query)
  }

  const handleChange = (event) =>{
    setQuery(event.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} name='query' type="text" placeholder='Harry Potter, avengers, the matrix' />
          <button  type="submit">Searchs</button>
        </form>
      </header>
      <main> 
        <Movies movies={movies}/>
      </main>         
    </div>
  )
}

export default App
