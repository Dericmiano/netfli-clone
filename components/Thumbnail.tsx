import React from 'react'
import Image from 'next/image'
import { Movie } from '../typings'
import { useRecoilState, useRecoilValue } from 'recoil'
import {modalState, movieState} from '../atoms/ModalAtom'
interface Props {
    // movie:Movie | DocumentDATA
    movie:Movie
}

const Thumbnail = ({movie}:Props) => {
  const [showModel, setShowModel] = useRecoilState(modalState)
    const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  return (
    <div
      className={`relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
      onClick={() => {
        setCurrentMovie(movie)
        setShowModel(true)
      }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  )
}

export default Thumbnail