import type React from "react";

interface SelectInputProps {
    label: string;
    name: string;
    value: string;
    onChange: (e:React.ChangeEvent<HTMLSelectElement>) => void;
    options:{label:string,value:string}[];
}

const SelectInput:React.FC<SelectInputProps> = ({label,name,value,onChange,options}) => {
  return (
    <div>
         <label className="block mb-1 font-semibold">{label}</label>
      <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-2 border rounded"
      >
        <option value="">Select an option</option>
        {
            options.map((opt,index)=>(
                 <option key={index} value={opt.value}>{opt.label}</option>
            ))
        }
      </select>
    </div>
  )
}

export default SelectInput