interface TextInputProps {
  label: string,
  name: string,
  value:string,
  onChange:(e:React.ChangeEvent<HTMLTextAreaElement> )=> void;
  placeholder:string,
  rows?: number,
}

const TextArea:React.FC<TextInputProps> = ({ label,name, value, onChange, placeholder, rows = 4,}) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-semibold">{label}</label>
      <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={rows}
      placeholder={placeholder}
      className="w-full p-2 border rounded"
    />

    </div>
  )
}

export default TextArea