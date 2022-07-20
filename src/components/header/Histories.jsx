
export const Histories = ({ first_name, avatar }) => {    



  return (
        <div className="story-container">
          
           <div className="story-circle">
           <img src={avatar} alt={first_name} />
           </div>
           <h4 className="story-name">{first_name}</h4>
        </div>
  )
}
