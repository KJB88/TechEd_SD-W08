export default function Footer () {
  return (
    <footer className="fixed bottom-0 w-screen flex flex-col justify-center">
      <span className="drop-shadow text-center">This website is but a tribute to a great series, by a humble stalker in the Zone.</span>
      <span className="drop-shadow text-center">
        All artwork, imagery and themery are from the 
        <a className="text-blue-300 hover:text-blue-600" 
        href='https://store.steampowered.com/sub/35983/'> S.T.A.L.K.E.R </a>
         games, which are copyright and trademarks of 
        <a className="text-blue-300
         hover:text-blue-600" href='https://www.gsc-game.com/'> GSC Game World</a>.
      </span>
    </footer>
  )
}
