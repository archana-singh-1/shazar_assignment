function Teacher(props){
    console.log(props)
    return(
        <>
            <h1>Teacher</h1>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.hobbies}</p>

        </>
    )

}
export default Teacher;