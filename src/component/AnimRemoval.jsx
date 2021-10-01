
const AnimRemoval = ({heading, style}) => {
    return(
        <div className="animal-removal">
          <h4 style={style}>{heading}</h4>
          <p>
        <span>
          Included,
          <input type="radio" name={heading} style={{ marginRight: ".8rem" }}/>
        </span>
        <span>
          Not Included,
          <input type="radio" name={heading} style={{ marginRight: ".8rem" }}/>
        </span>
      </p>
      </div>
    )
}

export default AnimRemoval