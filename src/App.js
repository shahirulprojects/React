//nota ni macam panjang sebab kita copy code2 sebelum ni jadikan comment sebab Adrian nak tunjuk contoh lain so dia delete code2 tu.bear with me wkwkw

//TERMS USED

//1.COMPONENT
//component is a piece of code that returns or renders some jsx
//jsx ni macam javascript gabung ngan html ha lebih kurang gitu ah

//2.PROPS
//props is a shortform for properties
//props allow you to pass dynamic data through react components
//props are just arguments that you pass into react components
//they are pass via attributes

//3.HOOK
//hook pulak is function that starts with the word "use"
//for example,useState()
//useEffect allows us to do something on some kind of an effect/event
//useState  allows functional components to remember and manage data that can change over time, like a to-do list that can add or remove tasks.

//4.STATE
//state in react is a plain javascript object used by react to represent a piece of information about the components' current situation
//it is completely managed by the component itself
//kalau nak guna dia kena import {useState} from 'react';
//dia guna bracket[] which use the concept of array destructuring
//bracket tu accept dua benda which is name of that state and a setter function
//orang selalu namakan setter function tu with "set" + nama state tu sebab dia adalah setter function untuk state tu
//contoh: 
//nama State:counter
//name setter function:setCounter
//it is VERY important to note that we should NEVER modify/mutate the state
//contoh cam kita set value state tu kepada benda lain at our other part of code
//value state hanya boleh diubah oleh setter function dia je

//5.EVENT
//an event is an action that can be triggered as a result of the user action or some kind of a system generated event
//for example,a mouse click or a button press is an event

//6.FRAGMENT
//Yang rupa dia camni tu <> </> namanya fragment.benda ni function dia untuk kasi kita tulis headings ke apa ke banyak2.kalau tak letak benda ni,kita hanya boleh letak satu headings je gitu

//CODE2 SEBELUM NI

// import './App.css';
// const Person=(props)=>{ 
//   return(               
//     <> 
//       <h1>Name:{props.name}</h1>
//       <h2>Last Name:{props.lastName}</h2>
//       <h2>Age:{props.age}</h2>
//     </>
//   )
// }
// const App=()=> {
// //untuk props,kita boleh je tulis name="Dahyun"
// //yang curly braces tu sebenarnya untuk benda yang dynamic cam age={10+15} ha gitu.tapi kalau nak tetap pakai curly braces pun takpe
//   return (
//     <div className="App">
//       <Person name={"Kim"} lastName={"Dahyun"} age={25}/>
//       <Person name={"Minatozaki"} lastName={"Sana"} age={26}/>
      
//     </div>
//   );
// }
// export default App;

import {useState,useEffect} from 'react';
import './App.css';

const App=()=> {
  const [counter,setCounter]=useState(0); //0 tu initial value

  useEffect(()=>{
    setCounter(100) //the counter is initially set to 0 dalam useState but because of the setCounter(100) in the useEffect function,the counter is now set to 100
  },[]) //dependency array ni untuk kita set bila kita nak useEffect ni run.
        //kalau kita biar kosong,dia akan just run time initial load je (maksudnya sekali je dia run)
        //kalau kita letak something like [counter],dia akan run everytime variable counter tu change


  //prevCount tu kita guna untuk jadikan button minus and button plus tu tolak or tambah 1 each time button tu kena click.saja bubuh nama prevCount,boleh je bubuh nama apa2
  return (
    <div className="App">
      <button onClick={()=>setCounter((prevCount)=>prevCount-1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter((prevCount)=>prevCount+1)}>+</button>
      
    </div>
  );
}

export default App;

