import Link from 'next/link'
import Heading from './heading'
/* HOME */
export function generateMetadata () {
  return {
    title: 'ZonePDA: Home',
    description: 'The home page of the ZonePDA.'
  }
}

export default async function Home () {
  //await dbInit();
  return (
    <>
    <Heading data={{name: "Home"}}/>
      <p className='drop-shadow text-center'>
        Pryvit! Welcome to The Zone, stalker! <br />
        Here we have deadly anomalies, dangerous mutants, anarchists and
        bandits... and eachother!
      </p>
      <p className='drop-shadow text-center'>
        The PDA network lets all of us keep in touch with each other no matter
        where in The Zone we travel. Because its always better to have a friend
        at your side in the thick of it!
      </p>
      <div className='grid grid-cols-2 grid-rows-3 gap-4 font-bold text-center mt-20 text-2xl'>
        <Link
          className='col-start-1 col-end-3 row-start-1 row-end-2'
          href='/posts'
        >
          To Posts
        </Link>
      </div>
    </>
  )
}

/*
        <Link
          className='col-start-2 col-end-3 row-start-1 row-end-2'
          href='/users'
        >
          To Users
        </Link>

        <Link
          className='col-start-1 col-end-2 row-start-2 row-end-3'
          href='/tags'
        >
          To Tags
        </Link>

        <Link
          className='col-start-2 col-end-3 row-start-2 row-end-3'
          href='/locations'
        >
          To Locations
        </Link>

        <Link
          className='col-start-1 col-end-3 row-start-3 row-end-4'
          href='/factions'
        >
          To Factions
        </Link>
*/