import Favourite from "./favourites"
import Laura from "./laura"
import Todo from './todo'


export default function Home(){
  return(
    <div>
        <h1>Wow!! my first react project</h1>
        <h2>why i love react</h2>
        <ul>
          <li>it is reusabel</li>
          <li>it is Easy to use</li>
          <li>it is Easy to learn and the community is wide</li>

        <Favourite name='obed'/>

        <Laura 
          FavPlayer='Declan Rice' 
          name="Laura"
          />
        <h1>My to do</h1>
        <Todo todo='learn usestate '/>
        <Todo todo='learn conditional '/>
        <Todo todo='learn list '/>
   
    

          {/* create a component called Tools, 
          
          the Tools shouls=d return
          My name is yourname
          My skillsets involes
          .Html
          .Css
          .Bootstrap
          .any other you have

          All data (name and skillset must be passed as a props)
  .       */}
    
        </ul>
    </div>
  
  )
}


