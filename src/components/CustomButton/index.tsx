import { buttonPropsType } from "../../types"



const CustomButton = ({disabled, designs,btnType,title,handleClick}:buttonPropsType) => {
  return (
   
    <button onClick={handleClick} disabled={disabled} type={btnType} className={`${designs} custom-btn bg-primary-blue rounded-full hover:bg-blue-500 text-white`}>
        {title}
    </button>
  )
}

export default CustomButton