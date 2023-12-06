interface InputProps {
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <>
      <fieldset className="textfield textfield--light">
        <input
          className="w-full outline-none px-5 py-3 border border-[#CAC6DA] textfield__input"
          type="text"
          required
        />
        <label className="textfield__label textfield__label--required">
          {placeholder}
        </label>
      </fieldset>
    </>
  );
};

export default Input;
