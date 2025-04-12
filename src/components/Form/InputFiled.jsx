import React from 'react'

const InputFiled = ({label,id,value,type,name,onChange,error,touched}) => {
  return (
    <div>
         <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="userName"
            >{label}</label>
            <input className="w-full px-3 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500" name={name} id={id} type={type} value={value} onChange={onChange} />

            {touched && error ? <div className='text-red-500 text-sm'>{error}</div>:null}
    </div>
  )
}

export default InputFiled