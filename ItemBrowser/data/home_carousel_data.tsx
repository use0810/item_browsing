import { ImageSourcePropType } from 'react-native';
import AllData, { DataType as AllDataType } from './all_data';

//  HomeCarouselDataで使用する新しいDataType
export interface DataType {
  id: number;
  name: string;
  url: string;
  image: ImageSourcePropType;
  price: number;
  desc: string;
}

const filterNames = ["Pors Nuel", "Soln Rose","Percume Sifline","Eduard Classic","Sif Prains"]; // 抽出したいnameのリスト

const urlMapping: { [key: string]: string } = {
  "Pors Nuel": "search/Pors Nuel",
  "Soln Rose": "search/Soln Rose",
  "Percume Sifline": "search/Percume Sifline",
  "Eduard Classic": "search/Eduard Classic",
  "Sif Prains": "search/Sif Prains",
};

const  HomeCarouselData: DataType[] = AllData
  .filter((item: AllDataType) => filterNames.includes(item.name)) // 完全一致でフィルタリング
  .map((item: AllDataType) => ({
    id: item.id,
    name: item.name,
    url: urlMapping[item.name], // URLをマッピング
    image: item.image,
    price: item.price,
    desc: item.desc
  }));

export default HomeCarouselData;