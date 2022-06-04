const RoundButton = ({onClick,rcolor,color,colorFocus,children, form}) => {

  return (
    <button onClick={onClick} type={(form ? 'submit' : null) || 'button'} form={form}  className={`rounded-full m-1 p-1 hover:bg-${colorFocus || color}-700 bg-${color}-400 ring-1 ring-${rcolor} focus:ring-1 focus:ring-blue-500 hover:scale-[1.05] transition-all`}>{children}</button>
  )
}

export default RoundButton




