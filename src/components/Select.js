const Select = ({ selectLabel, selectId, selectValue, selectOptions, selectOnChange }) => {
    return (
        <div>
            <label
                className="block text-sm mb-2"
                htmlFor={selectId}>
                {selectLabel}
            </label>
            <select
                className="border rounded-md text-sm p-2"
                id={selectId}
                value={selectValue}
                onChange={selectOnChange}>
                {selectOptions.map((option, index) => {
                    return <option key={index} value={option}>
                        {option}
                    </option>
                })}
            </select>
        </div>
    )
};

export default Select;