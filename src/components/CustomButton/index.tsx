
type buttonPropsType = {
  disabled?:boolean,
  designs:string,
  btnType?:"submit"|"button"|"reset",
  title:string

}

const CustomButton = ({disabled, designs,btnType,title}:buttonPropsType) => {
  return (
   
    <button disabled={disabled} type={btnType} className={`${designs} custom-btn bg-primary-blue rounded-full hover:bg-blue-500 text-white`}>
        {title}
    </button>
  )
}

export default CustomButton