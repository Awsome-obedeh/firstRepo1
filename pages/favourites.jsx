export default function Favourite(props){

    // props(properties) 
    // We use props in React to 
    // pass data from one component to another 
    // (from a parent component to a child component(s)).
    //  Props is just a shorter way of saying properties. 
    //  They are useful when you want the flow of data in your 
    //  app to be dynamic.
    let myName='henry'
    return(
        <>

       <p>my name is { myName  }</p>
            <h1>My name is {props.name} , my favourite palyer is T.silva</h1>
        </>
        
    )
}