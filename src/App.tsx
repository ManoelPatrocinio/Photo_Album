import { useState, useEffect, FormEvent, useRef } from "react";
import * as C from "./App.styles";
import HeaderBackground from "./assets/img/headerImg2.jpg";
import * as Photos from "./services/photos";
import { Photo } from "./types/Photos.types";
import { PhotoItem } from "./components/PhotoItem";

function App() {
  const [loading, setLoading] = useState(false);
  const [onUploading, setOnUploading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);
  //const dropDwonRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  //const onClick = () => setIsActive(!isActive);
  console.log(isActive);

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      setPhotos(await Photos.getAllPhotos());
      setLoading(false);
    };
    getPhotos();
  }, []);

  const hendleFormSumit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //previne o comportamento normal de envio do formulario

    // verificar se tem arquivo sellecionado
    const formData = new FormData(e.currentTarget); // get form
    const file = formData.get("inputImg") as File;

    if (file && file.size > 0) {
      setOnUploading(true);
      let UploadResult = await Photos.insert(file);
      setOnUploading(false);
      if (UploadResult instanceof Error) {
        alert(`${UploadResult.name} - ${UploadResult.message}`);
      } else {
        let newPhotoList = [...photos];
        newPhotoList.push(UploadResult);
        setPhotos(newPhotoList);
      }
    }
  };

  return (
    <C.Container>
      <C.HeaderShow>
        <C.HeaderImgSecondary src={HeaderBackground} alt="fotos album" />
        <C.Field>
          <C.IconScroll className="icon-scroll"></C.IconScroll>
        </C.Field>
      </C.HeaderShow>

      <C.Main>
        <C.Header>
          <C.HeaderItem>?</C.HeaderItem>
          <C.HeaderTitle>My album</C.HeaderTitle>
          <C.HeaderBtnUpContent>
            <C.UploadForm method="POST" onSubmit={hendleFormSumit}>
              <div className="wrapperInputs">
                <span className="label">Add Imagem</span>
                <input type="file" name="inputImg" id="inputImg" />
                <input type="submit" value="Enviar" className="btnSumit" />
              </div>
              {onUploading && "Enviando..."}
            </C.UploadForm>
          </C.HeaderBtnUpContent>
        </C.Header>
        {loading && (
          <C.ScreenLoading>
            <div className="loading"></div>
            <p>loading...</p>
          </C.ScreenLoading>
        )}

        {!loading && photos.length > 0 && (
          <C.PhotosContent>
            {photos.map((item, index) => (
              <PhotoItem key={index} url={item.url} name={item.name} />
            ))}
          </C.PhotosContent>
        )}

        {!loading && photos.length === 0 && (
          <C.ScreenLoading>
            <p>Não há fotos cadastradas</p>
          </C.ScreenLoading>
        )}
      </C.Main>
    </C.Container>
  );
}

export default App;
