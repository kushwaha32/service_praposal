

const NoLabelForm = ({ type, placeholder}) => {
    return(
        <div className="form-group">
          <input
            type={type}
            placeholder={placeholder}
            style={{width: "96%"}}
          />
        </div>
    )
}

export default NoLabelForm