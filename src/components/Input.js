const Input = ({ inputLabel, inputId, inputType, inputValue, inputPlaceholder, onChange }) => {
    
    return (
        <div>
            <label 
                className="block text-sm mb-2"
                htmlFor={inputId}>
                {inputLabel}
            </label>
            <input 
                className="border rounded-md text-sm p-2" 
                id={inputId}
                type={inputType} 
                value={inputValue}
                placeholder={inputPlaceholder}
                onChange={onChange}
            />
        </div>
    )
};

export default Input;