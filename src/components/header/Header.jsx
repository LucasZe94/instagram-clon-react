import { getAxios } from "../../helpers/getAxios";
import { Histories } from "./Histories"
import { Navbar } from "./Navbar"

const { data } = await getAxios()
const dataUser = data.data

console.log(dataUser);

export const Header = () => {



  return (
    <div className="header">
      <Navbar />
      <div className="history">
        {
          dataUser.map((item, { id, first_name, avatar }) => (
            <Histories key={id} {...item} />
          ))
        }
      </div>
    </div>
  )
}
