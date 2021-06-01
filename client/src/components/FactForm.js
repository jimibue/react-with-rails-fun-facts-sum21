const FactForm = (props) => {
    const { id } = props
    
    return id ? 'EditFORM' : 'NEW Form'
}

export default FactForm