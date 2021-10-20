import { Photo } from "../types/Photos.types";
import { storage } from "../libs/firebase";
import { ref, listAll, getDownloadURL, uploadBytes } from "firebase/storage";
import { v4 as createId } from "uuid";

export const getAllPhotos = async () => {
  let list: Photo[] = [];

  const imagesFolder = ref(storage, "albumImages"); //referencia a pasta das imagens
  const photoList = await listAll(imagesFolder); // busca e retorna uma lista de images da pasta passado como referencia

  //iterar o array de fotos, com as fotos de requisição feita no firebase

  for (let i in photoList.items) {
    let photoUrl = await getDownloadURL(photoList.items[i]);
    list.push({
      name: photoList.items[i].name,
      url: photoUrl,
    });
  }
  return list;
};

export const insert = async (file: File) => {
  // verifica se é uma imagem do tipo permitido
  if (["image/jpeg", "image.jpg", "image/png"].includes(file.type)) {
    let randomName = createId();
    let newFile = ref(storage, `albumImages/${randomName}`);

    let upload = await uploadBytes(newFile, file); // faz o upload
    let photoUrl = await getDownloadURL(upload.ref);

    return {
      name: upload.ref.name,
      url: photoUrl,
    } as Photo;
  } else {
    return new Error("Tipo de arquivo não permitido");
  }
};
