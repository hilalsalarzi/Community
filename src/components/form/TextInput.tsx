interface TextInputProps {
  label: string,
  name: string,
  value:string,
  onChange:(e:React.ChangeEvent<HTMLInputElement> )=> void;
  type?: string,
  placeholder:string,
  className?: string,
}




const TextInput:React.FC<TextInputProps> = ({label,name,value,onChange,type="text",placeholder,className}) => {
  return (
    <div className="mb-4">
    <label className="block mb-1 font-semibold">{label}</label>
    <input 
    type={type} 
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`w-full p-2 rounded ${className}`}
    />

    </div>
  )
}

export default TextInput