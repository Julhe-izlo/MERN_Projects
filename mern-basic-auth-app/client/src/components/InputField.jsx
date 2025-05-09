import './InputField.css';

const InputField = ({ label, type, register, name, error, validationRules, onBlur, onFocus }) => (
    <div className="input-field">
        <label className="input-label">{label}</label>
        <input type={type}
            {...register(name, validationRules)}
            className="input-element" 
            onFocus={onFocus}
            onBlur={onBlur} />
        {error && <p className="input-error">{error.message}</p>}
    </div>
);

export default InputField;