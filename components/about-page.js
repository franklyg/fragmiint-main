export default function About({
  copy,
  portrait
}){
  return(
    <div className="center-pagelayout z-10 relative">
      <div className="about">
        <img src={ portrait }/>
        <p className="text-sm">{copy}</p>
      </div>
    </div>
  )
}
