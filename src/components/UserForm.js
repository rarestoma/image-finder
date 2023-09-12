import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Input from "./Input";
import Select from "./Select";
import { useNavigate } from 'react-router-dom';
import { useActions } from '../hooks/useActions';

const UserForm = () => {

    const { userName, userSurname } = useSelector((state) => state.userForm);
    const navigate = useNavigate();

    const { updateUserName, updateUserSurname, searchImage } = useActions();

    const [selectedTopic, setSelectedTopic] = useState('');
    const [otherOption, setOtherOption] = useState(false);
    const [otherOptionValue, setOtherOptionValue] = useState('');

    const handleUserNameChange = (event) => {
        
        updateUserName(event.target.value);

    };

    const handleUserSurnameChange = (event) => {
        
        updateUserSurname(event.target.value);

    };

    const handleSelectChange = async (event) => {

        setSelectedTopic(event.target.value);

        if(event.target.value !== '' && event.target.value !== 'Other'){

            const userTopic = event.target.value;

            searchImage(userTopic);

            navigate("/image");
        }

        if(event.target.value === 'Other'){
           setOtherOption(true);
        } else {
           setOtherOption(false);
        }
    };

    
    useEffect(() => {

        if(otherOptionValue !== '') {
            const delayDebounce = setTimeout(() => {
                
                const userTopic = otherOptionValue;
    
                searchImage(userTopic);
    
                navigate("/image");
    
            }, 500);
    
            return () => clearTimeout(delayDebounce);
        
        }

    }, [otherOptionValue, navigate, searchImage]);

    return (
        <form>
            <div className="flex gap-5 mb-5">
                <Input 
                    inputLabel="Enter name" 
                    inputId="name" 
                    inputType="text"
                    inputPlaceholder="Enter name"
                    inputValue={userName}
                    onChange={handleUserNameChange}
                />

                <Input 
                    inputLabel="Enter surname" 
                    inputId="surname" 
                    inputType="text" 
                    inputPlaceholder="Enter surname"
                    inputValue={userSurname}
                    onChange={handleUserSurnameChange}
                />
            </div>

            <div className="block mb-5">
                <Select
                    selectLabel="Preferred Topic"
                    selectId="topic"
                    selectValue={selectedTopic}
                    selectOptions={['Travel', 'Cars', 'Wildlife', 'Technology', 'Other']}
                    selectOnChange={handleSelectChange}
                />
            </div>

            {otherOption ? (
                <div className="block">
                     <Input 
                        inputLabel="Enter your topic" 
                        inputId="other" 
                        inputType="text" 
                        inputPlaceholder="Enter your topic"
                        value={otherOptionValue}
                        onChange={(event) => setOtherOptionValue(event.target.value)}
                    />
                </div>
            ) : ''}
        </form>
    )
};

export default UserForm;
