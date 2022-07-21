import { getAxios } from "../../helpers/getAxios"
import { ImagePost } from "./cardPost/ImagePost";
import { TitleCard } from "./cardPost/TitleCard";

const { data } = await getAxios();
const dataUser = data.data;

export const Post = () => {
  return (
    <div className="post">
      <TitleCard />
      <ImagePost />
    </div>

  )
}
