import { ImageSourcePropType } from 'react-native';

export interface DataType {
  id: number;
  name: string;
  image: ImageSourcePropType;
  category: string;
  tags: string[];
  desc: string;
}

const AllData: DataType[] = [
  {
    id: 1,
    name: "Item1",
    image: require('../assets/images/sampleImage.png'),
    category: 'Category1',
    tags: ['tag1', 'tag2'],
    desc: 'アイテム1の説明です',  
  },
  {
    id: 2,
    name: "Item2",
    image: require('../assets/images/sampleImage.png'),
    category: 'Category1',
    tags: ['tag1', 'tag3'],
    desc: 'アイテム2の説明です',  
  },
  {
    id: 3,
    name: "Item3",
    image: require('../assets/images/sampleImage.png'),
    category: 'Category4',
    tags: ['tag2', 'tag3'],
    desc: 'アイテム3の説明です',  
  },
  {
    id: 4,
    name: "Item4",
    image: require('../assets/images/sampleImage.png'),
    category: 'Category2',
    tags: ['tag1', 'tag4'],
    desc: 'アイテム4の説明です',  
  },
  {
    id: 5,
    name: "Item5",
    image: require('../assets/images/sampleImage.png'),
    category: 'Category4',
    tags: ['tag2', 'tag5'],
    desc: 'アイテム5の説明です',  
  },
  {
    id: 6,
    name: "Item6",
    image: require('../assets/images/sampleImage.png'),
    category: 'Category3',
    tags: ['tag3', 'tag4'],
    desc: 'アイテム6の説明です',  
  },
  {
    id: 7,
    name: "Item7",
    image: require('../assets/images/sampleImage.png'),
    category: 'Category1',
    tags: ['tag1', 'tag5'],
    desc: 'アイテム7の説明です',  
  },
  {
    id: 8,
    name: "Item8",
    image: require('../assets/images/sampleImage.png'),
    category: 'Category2',
    tags: ['tag2', 'tag6'],
    desc: 'アイテム8の説明です',  
  },
  {
    id: 9,
    name: "Item9",
    image: require('../assets/images/sampleImage.png'),
    category: 'Category1',
    tags: ['tag3', 'tag7'],
    desc: 'アイテム9の説明です',  
  },
  {
    id: 10,
    name: "Item10",
    image: require('../assets/images/sampleImage.png'),
    category: 'Category3',
    tags: ['tag4', 'tag8'],
    desc: 'アイテム10の説明です',  
  },
  {
    id: 11,
    name: "Item11",
    image: require('../assets/images/sampleImage.png'),
    category: 'Category2',
    tags: ['tag1', 'tag9'],
    desc: 'アイテム11の説明です',  
  },
  {
    id: 12,
    name: "Item12",
    image: require('../assets/images/sampleImage.png'),
    category: 'Category5',
    tags: ['tag2', 'tag10'],
    desc: 'アイテム12の説明です',  
  },
  {
    id: 13,
    name: "Item13",
    image: require('../assets/images/sampleImage.png'),
    category: 'Category3',
    tags: ['tag3', 'tag11'],
    desc: 'アイテム13の説明です',  
  },
  {
    id: 14,
    name: "Item14",
    image: require('../assets/images/sampleImage.png'),
    category: 'Category1',
    tags: ['tag4', 'tag12'],
    desc: 'アイテム14の説明です',  
  },
  {
    id: 15,
    name: "Item15",
    image: require('../assets/images/sampleImage.png'),
    category: 'Category6',
    tags: ['tag5', 'tag13'],
    desc: 'アイテム15の説明です',  
  },
];

export default AllData;
