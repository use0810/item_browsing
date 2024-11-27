import { ImageSourcePropType } from 'react-native';
import AllData, { DataType as AllDataType } from './all_data';

// HomeImagesH2V2Dataで使用する新しいDataType
export interface DataType {
  name: string;
  url: string;
  image: ImageSourcePropType;
}

const filterNames = ["Item1", "Item2", "Item3", "Item4"]; // 抽出したいnameのリスト

const urlMapping: { [key: string]: string } = {
  "Item1": "search/item1",
  "Item2": "search/item2",
  "Item3": "search/item3",
  "Item4": "search/item4",
};

const HomeImagesH2V2Data: DataType[] = AllData
  .filter((item: AllDataType) => filterNames.includes(item.name)) // 完全一致でフィルタリング
  .map((item: AllDataType) => ({
    name: item.name,
    url: urlMapping[item.name], // URLをマッピング
    image: item.image,
  }));

export default HomeImagesH2V2Data;
