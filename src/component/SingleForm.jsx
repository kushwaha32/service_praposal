
const SingleForm = ({label, placeholder, type, style}) => {
    return(
        <div className="form-group" style={style}>
          <label htmlFor={label}>{label}</label>
          <input
            type={type}
            id={label}
            placeholder={placeholder}
          />
        </div>
    )
}

export default SingleForm