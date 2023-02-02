
const Ejemplo = ({number, name}) => {
  return (
    <div className="ejemplo">
        {number + ' ' + name}
        {number} {name}
        {`${number} asdawad ${name}`}
    </div>
  )
}

export default Ejemplo