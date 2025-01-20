import { ImageSourcePropType } from 'react-native';
import AllData, { DataType as AllDataType } from './all_data';

// HomeImagesH2V2Dataで使用する新しいDataType
export interface DataType {
  id: number;
  name: string;
  url: string;
  image: ImageSourcePropType;
  price: number;
  desc: string;
}

const filterNames = ["Golden Maple", "Pumpkin Elegance", "Autumn Bloom", "Scarlet Ribbon"]; // 抽出したいnameのリスト

const urlMapping: { [key: string]: string } = {
  "Golden Maple": "search/Golden Maple",
  "Pumpkin Elegance": "search/Pumpkin Elegance",
  "Autumn Bloom": "search/Autumn Bloom",
  "Scarlet Ribbon": "search/Scarlet Ribbon",
};

const HomeImagesH2V2Data: DataType[] = AllData
  .filter((item: AllDataType) => filterNames.includes(item.name)) // 完全一致でフィルタリング
  .map((item: AllDataType) => ({
    id: item.id,
    name: item.name,
    url: urlMapping[item.name], // URLをマッピング
    image: item.image,
    price: item.price,
    desc: item.desc
  }));

export default HomeImagesH2V2Data;
