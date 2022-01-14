
interface InputField {
  labelText: string;
  inputName: string;
  inputValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface Props {
  isButtonDisabled?: boolean; // Optional prop
  formTitle: string;
  inputFields: InputField[];
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<Props> = ({ 
  isButtonDisabled, 
  formTitle, 
  inputFields, 
  onSubmit 
}): JSX.Element => {
  return (
    <form onSubmit={onSubmit}>
      <h1>{formTitle}</h1>
      <div>
        {inputFields.map((inputField: InputField) => (
          <span key={inputField.inputName}>
            <label htmlFor={inputField.inputName}>
              {inputField.labelText}
            </label>
            <input name={inputField.inputName} value={inputField.inputValue} onChange={inputField.onChange} />
          </span>
        )
        )}
      </div>
      <button type="submit" disabled={isButtonDisabled || false}>Submit</button>
    </form>
  );
}

export default Form;

