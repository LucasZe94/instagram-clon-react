import { getAxios } from "../../helpers/getAxios";
import { Histories } from "./Histories";
import { Navbar } from "./Navbar";

const { data } = await getAxios();
const dataUser = data.data;

export const Header = () => {

  const hadleScrollButton = (val) => {
    const storyCircle = document.querySelector('.story-content');
    const storyContent = document.querySelector('.story');
    const btnScrollRight = document.querySelector('#btn-scroll-right');
    const btnScrollLeft = document.querySelector('#btn-scroll-left');

    let scrollPosition = 0;
    let scrollAmount = 300;

    const maxScroll = -storyContent.clientWidth - storyCircle.clientWidth;

    scrollPosition = (val * scrollAmount);
    
    if(scrollPosition >= 0){
      scrollPosition = 0
      btnScrollLeft.style.opacity = "0"
    }else{
      btnScrollLeft.style.opacity = "1"
    }

    if(scrollPosition <= maxScroll ){
       scrollPosition = maxScroll
      btnScrollRight.style.opacity = "0"
    }else{
      btnScrollRight.style.opacity = "1"
    }

  
    storyCircle.style.left = `${scrollPosition}px`
  }

  return (
    <div className="header">
      <Navbar />
      <div className="story">
       <button 
          onClick={() =>hadleScrollButton(1)}
          className="btn-scroll" 
          id="btn-scroll-left">
            <span className="material-symbols-outlined">chevron_left</span></button>
       <button 
       onClick={()=> hadleScrollButton(-1)}
          className="btn-scroll btn-left" 
          id="btn-scroll-right">
            <span className="material-symbols-outlined">chevron_right</span></button>
         <div className="story-content">
         {
          dataUser.map((item) =>(
            <Histories key={item.id} {...item} />
          ))
         }
         </div>
      </div>
    </div>
  )
}
