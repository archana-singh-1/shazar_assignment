import Principle from "./Principle";
import Student from "./Student";
import Teacher from "./Teacher";

function App(){
  const principle={
    name:"Rohit",
    age:"28",
    hobbies:"Reading Book"
  }

  const teacher={
    name:"Roham",
    age:"36",
    hobbies:"Listening Music"

  }
  const student={
    name: "Rohan",
    age: "19",
    hobbies:"Playing Cricket"
   
  }

  return(
    <>
      <Principle name={principle.name} age={principle.age} hobbies={principle.hobbies}/>
      <Teacher {...teacher}/>
      <Student student={student}/>
    </>
  )

}
export default App;