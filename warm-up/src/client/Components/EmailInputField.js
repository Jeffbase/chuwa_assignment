const EmailInputField = ({ setEmail, setIsEmailValid }) => {
  const onChange = (e) => {
    setEmail(e.target.value);
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (e.target.value.match(validRegex)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };
  return <input type="email" onChange={onChange}></input>;
};

export default EmailInputField;
