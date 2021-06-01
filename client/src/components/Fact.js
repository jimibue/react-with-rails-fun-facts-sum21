import FactForm from "./FactForm"

const Fact = (props) => {
  
    // these are given to use when we did the {...fact}
    // in our map method in Fact.js
    const { text, username, stars, source } = props
    
    return (
      <>
        <h1>{text}</h1>
        <p>User: {username} stars:{stars} source:{source}</p>
        <FactForm {...props}/>
        <hr />
    
      </>
    )
  }
  
  export default Fact