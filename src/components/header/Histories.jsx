
export const Histories = ({ first_name, avatar }) => {    



  return (
        <div className="histories">
          
           <div className="border_history">
           <img src={avatar} alt={first_name} />
           </div>
           <h4>{first_name}</h4>
        </div>
  )
}
