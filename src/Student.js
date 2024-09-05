function Student(props){
    console.log(props.student)

    return(
        <>
            <h1>students</h1>
            <p>{props.student.name}</p>
            <p>{props.student.age}</p>
            <p>{props.student.hobbies}</p>
        </>
        
    )

}
export default Student;