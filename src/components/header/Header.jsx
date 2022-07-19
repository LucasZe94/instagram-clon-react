import { getAxios } from "../../helpers/getAxios";
import { Histories } from "./Histories"
import { Navbar } from "./Navbar"

const { data } = await getAxios()
const dataUser = data.data

console.log(data);

export const Header = () => {



  return (
    <div className="header">
      <Navbar />
      <div className="history">
        {
          dataUser.map((item) => (
            <Histories {...item} />
          ))
        }
      </div>
    </div>
  )
}
