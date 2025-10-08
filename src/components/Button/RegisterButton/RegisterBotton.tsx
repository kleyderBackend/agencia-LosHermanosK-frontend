
import './RegisterButton.css';

interface RegisterButtonProps {
    HandlerFunction: () => void;
}
export const RegisterButton = ({ HandlerFunction }: RegisterButtonProps) => {
    return (
        <>
            <button className='register-btn' onClick={HandlerFunction} type='button'>
                RegisterMe
            </button>
        </>
    );
};

