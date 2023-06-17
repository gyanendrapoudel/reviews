import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa'
const App = () => {
 const [index, setIndex] = useState(0)
 const {name, job, image, text}= people[index];

 const prevPerson = ()=>{
  
   const newIndex = index-1;
   if(newIndex<0){
    setIndex(people.length-1);
    return
   }
   setIndex(newIndex);
 }
 const nextPerson = () => {
  const newIndex = index + 1;
  if (newIndex > people.length - 1) {
    setIndex(0)
    return
  }
  setIndex(newIndex)
 }
 const surpriseMe = ()=>{
  let randomNumber = Math.floor(Math.random()*people.length);
  console.log(randomNumber);
  if (randomNumber===index){
    randomNumber=index+1;
  }
  if(randomNumber>people.length-1){
    randomNumber=0;
  }
 
  setIndex(randomNumber);
 }
 return (
   <main>
     <article className="review">
       <div className="img-container">
         <img src={image} alt={name} className="person-img" />
         <span className="quote-icon">
           <FaQuoteRight />
         </span>
       </div>

       <h4 className="author">{name}</h4>
       <p className="job">{job}</p>
       <p className="info">{text}</p>

       <div className="btn-container">
         <button className="prev-btn" onClick={prevPerson}>
           <FaChevronLeft />
         </button>
         <button className="next-btn" onClick={nextPerson}>
           <FaChevronRight />
         </button>
       </div>
       <div>
        <button type="button" className="btn " onClick={surpriseMe}>Surprise Me</button>
       </div>
     </article>
   </main>
 )
};
export default App;
