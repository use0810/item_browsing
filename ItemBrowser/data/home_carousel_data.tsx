import { ImageSourcePropType } from 'react-native';
import AllData, { DataType as AllDataType } from './all_data';

//  HomeCarouselDataで使用する新しいDataType
export interface DataType {
  name: string;
  url: string;
  image: ImageSourcePropType;
}

const filterNames = ["Item1", "Item2","Item3","Item4","Item5"]; // 抽出したいnameのリスト

const urlMapping: { [key: string]: string } = {
  "Item1": "search/item1",
  "Item2": "search/item2",
  "Item3": "search/item3",
  "Item4": "search/item4",
  "Item5": "search/item5",
};

const  HomeCarouselData: DataType[] = AllData
  .filter((item: AllDataType) => filterNames.includes(item.name)) // 完全一致でフィルタリング
  .map((item: AllDataType) => ({
    name: item.name,
    url: urlMapping[item.name], // URLをマッピング
    image: item.image,
  }));

export default HomeCarouselData;