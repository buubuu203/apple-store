import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { postSignUpInfo } from '../../api/signup';

const SignUp = () => {
    const navigate = useNavigate();

    // State hooks for form fields
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    // Handle input changes for all fields
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        switch (id) {
            case 'fullName':
                setFullName(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password1':
                setPassword1(value);
                break;
            case 'password2':
                setPassword2(value);
                break;
            default:
                break;
        }
    };

    // Form submission handling
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate phone number and email
        const isPhoneValid = checkPhoneNumber(phone);
        const isEmailValid = checkEmail(email);

        // Check if passwords match
        const doPasswordsMatch = password1 === password2;

        if (!isPhoneValid) {
            alert('Số điện thoại không hợp lệ.');
            return;
        }

        if (!isEmailValid) {
            alert('Địa chỉ email không hợp lệ.');
            return;
        }

        if (!doPasswordsMatch) {
            alert('Mật khẩu không trùng khớp.');
            return;
        }

        // If all validations pass, submit the form data
        try {
            await postSignUpInfo({ fullName, phone, email, password: password1 });
            // Handle success response
            navigate('/success'); // Redirect to a success page or home page
        } catch (error) {
            // Handle errors, such as showing a message to the user
            console.error(error);
        }
    };

    // ... (The rest of your component here, including the JSX)

    return (
        <form onSubmit={handleSubmit}>
            {/* ... (Your form fields here) */}
            <Button title="Đăng ký" type="submit" />
        </form>
    );
};

export default SignUp;
