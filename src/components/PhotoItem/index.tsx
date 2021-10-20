import * as C from "./styler";

type Props = {
  url: string;
  name: string;
};

export const PhotoItem = ({ url, name }: Props) => {
  return (
    <C.ImgCard>
      <img src={url} alt={name} />
      <label>{name}</label>
    </C.ImgCard>
  );
};
