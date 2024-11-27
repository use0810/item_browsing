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
    name: "Pors Nuel",
    image: require('../assets/images/kousui_y1.jpg'),
    category: 'オードパルファム',
    tags: ['tag1', 'tag2'],
    desc: 'トップノートは爽やかなベルガモットとグリーンアップルの香りが広がり、ミドルノートでジャスミンとリリーオブザバレーの優雅なフローラルが続きます。ラストノートはムスクとアンバーが温かみを添え、全体としてフレッシュでありながら深みのある香りを演出します。',  
  },
  {
    id: 2,
    name: "Soln Rose",
    image: require('../assets/images/kousui_y2.jpg'),
    category: 'パルファム',
    tags: ['tag1', 'tag3'],
    desc: 'トップノートにシトラスとミントの清涼感があり、ミドルノートではラベンダーとマリンノートが海風を思わせる爽やかさをもたらします。ラストノートはシダーウッドとホワイトムスクが心地よい余韻を残し、全体としてクリーンでリフレッシングな香りです。',  
  },
  {
    id: 3,
    name: "Percume Sifline",
    image: require('../assets/images/kousui_y3.jpg'),
    category: 'オードパルファム',
    tags: ['tag2', 'tag3'],
    desc: 'トップノートはブラックペッパーとカルダモンのスパイシーさが際立ち、ミドルノートでローズとオリスのパウダリーなフローラルが続きます。ラストノートはベチバーとパチョリが深みを加え、エレガントでミステリアスな香りを完成させます。',  
  },
  {
    id: 4,
    name: "Eduard Classic",
    image: require('../assets/images/kousui_y4.jpg'),
    category: 'オードトワレ',
    tags: ['tag1', 'tag4'],
    desc: 'トップノートにレモンとグレープフルーツのジューシーな香りが広がり、ミドルノートではピオニーとフリージアの繊細なフローラルが続きます。ラストノートはホワイトムスクとアンバーが柔らかく包み込み、透明感と清潔感のある香りを演出します。',  
  },
  {
    id: 5,
    name: "Sif Prains",
    image: require('../assets/images/kousui_y5.jpg'),
    category: 'オーデコロン',
    tags: ['tag2', 'tag5'],
    desc: 'トップノートはマンダリンとピンクペッパーのフレッシュなスパイシーさがあり、ミドルノートでチュベローズとイランイランの濃厚なフローラルが続きます。ラストノートはサンダルウッドとバニラが甘さと温かみを加え、官能的でラグジュアリーな香りを完成させます。',  
  },
  {
    id: 6,
    name: "Aurore Violet",
    image: require('../assets/images/kousui_y6.jpg'),
    category: 'オーデコロン',
    tags: ['tag3', 'tag4'],
    desc: 'トップノートにプラムとブラックカラントのフルーティーな甘さが広がり、ミドルノートではローズとオーキッドのエキゾチックなフローラルが続きます。ラストノートはパチョリとインセンスが深みと神秘性を加え、魅惑的でミステリアスな香りを演出します。',  
  },
  {
    id: 7,
    name: "Amber Glow",
    image: require('../assets/images/kousui_y7.jpg'),
    category: 'オードパルファム',
    tags: ['tag1', 'tag5'],
    desc: 'トップノートはベルガモットとジンジャーのスパイシーなフレッシュさがあり、ミドルノートでシナモンとクローブの温かみのあるスパイスが続きます。ラストノートはアンバーとトンカビーンズが甘さと深みを加え、モダンで洗練された香りを完成させます。',  
  },
  {
    id: 8,
    name: "Piarinuee Grace",
    image: require('../assets/images/kousui_y8.jpg'),
    category: 'オードトワレ',
    tags: ['tag2', 'tag6'],
    desc: 'トップノートにネロリとピーチのフルーティーフローラルが広がり、ミドルノートではガーデニアとオレンジブロッサムの優雅なフローラルが続きます。ラストノートはムスクとサンダルウッドが柔らかく包み込み、タイムレスなエレガンスを感じさせる香りです。',  
  },
  {
    id: 9,
    name: "Rose Quartz",
    image: require('../assets/images/kousui_y9.jpg'),
    category: 'パルファム',
    tags: ['tag3', 'tag7'],
    desc: 'トップノートはライチとラズベリーのジューシーな甘さがあり、ミドルノートでダマスクローズとマグノリアの華やかなフローラルが続きます。ラストノートはホワイトムスクとシダーウッドが深みを加え、リッチでフェミニンな香りを演出します。',  
  },
  {
    id: 10,
    name: "Flore Elegance",
    image: require('../assets/images/kousui_y10.jpg'),
    category: 'オーデコロン',
    tags: ['tag4', 'tag8'],
    desc: 'トップノートにサフランとオレンジのスパイシーフルーティーな香りが広がり、ミドルノートではジャスミンとハニーの甘美なフローラルが続きます。ラストノートはアンバーとウードが重厚感と温かみを加え、ゴージャスでエキゾチックな香りを完成させます。',  
  },
  {
    id: 11,
    name: "Eranone Grace",
    image: require('../assets/images/kousui_y11.jpg'),
    category: 'オードパルファム',
    tags: ['tag1', 'tag9'],
    desc: 'トップノートは爽やかなベルガモットとグリーンアップルの香りが広がり、ミドルノートでジャスミンとリリーオブザバレーの優雅なフローラルが続きます。ラストノートはムスクとアンバーが温かみを添え、全体としてフレッシュでありながら深みのある香りを演出します。',  
  },
  {
    id: 12,
    name: "Parfum de Royale",
    image: require('../assets/images/kousui_y12.jpg'),
    category: 'オードトワレ',
    tags: ['tag2', 'tag10'],
    desc: 'トップノートにシトラスとミントの清涼感があり、ミドルノートではラベンダーとマリンノートが海風を思わせる爽やかさをもたらします。ラストノートはシダーウッドとホワイトムスクが心地よい余韻を残し、全体としてクリーンでリフレッシングな香りです。',  
  },
  {
    id: 13,
    name: "Eclat Diamant",
    image: require('../assets/images/kousui_y13.jpg'),
    category: 'オードパルファム',
    tags: ['tag3', 'tag11'],
    desc: 'トップノートはブラックペッパーとカルダモンのスパイシーさが際立ち、ミドルノートでローズとオリスのパウダリーなフローラルが続きます。ラストノートはベチバーとパチョリが深みを加え、エレガントでミステリアスな香りを完成させます。',  
  },
  {
    id: 14,
    name: "Floral Lumière",
    image: require('../assets/images/kousui_y14.jpg'),
    category: 'オーデコロン',
    tags: ['tag4', 'tag12'],
    desc: 'トップノートにレモンとグレープフルーツのジューシーな香りが広がり、ミドルノートではピオニーとフリージアの繊細なフローラルが続きます。ラストノートはホワイトムスクとアンバーが柔らかく包み込み、透明感と清潔感のある香りを演出します。',  
  },
  {
    id: 15,
    name: "Bleu Céleste",
    image: require('../assets/images/kousui_y15.jpg'),
    category: 'オードトワレ',
    tags: ['tag5', 'tag13'],
    desc: 'トップノートはマンダリンとピンクペッパーのフレッシュなスパイシーさがあり、ミドルノートでチュベローズとイランイランの濃厚なフローラルが続きます。ラストノートはサンダルウッドとバニラが甘さと温かみを加え、官能的でラグジュアリーな香りを完成させます。',  
  },
  {
    id: 16,
    name: "Golden Maple",
    image: require('../assets/images/kousui_y16.jpg'),
    category: 'オードパルファム',
    tags: ['tag5', 'tag13'],
    desc: 'トップノートにプラムとブラックカラントのフルーティーな甘さが広がり、ミドルノートではローズとオーキッドのエキゾチックなフローラルが続きます。ラストノートはパチョリとインセンスが深みと神秘性を加え、魅惑的でミステリアスな香りを演出します。',  
  },
  {
    id: 17,
    name: "Pumpkin Elegance",
    image: require('../assets/images/kousui_y17.jpg'),
    category: 'オードトワレ',
    tags: ['tag5', 'tag13'],
    desc: 'トップノートはベルガモットとジンジャーのスパイシーなフレッシュさがあり、ミドルノートでシナモンとクローブの温かみのあるスパイスが続きます。ラストノートはアンバーとトンカビーンズが甘さと深みを加え、モダンで洗練された香りを完成させます。',  
  },
  {
    id: 18,
    name: "Autumn Bloom",
    image: require('../assets/images/kousui_y18.jpg'),
    category: 'オーデコロン',
    tags: ['tag5', 'tag13'],
    desc: 'トップノートにネロリとピーチのフルーティーフローラルが広がり、ミドルノートではガーデニアとオレンジブロッサムの優雅なフローラルが続きます。ラストノートはムスクとサンダルウッドが柔らかく包み込み、タイムレスなエレガンスを感じさせる香りです。',  
  },
  {
    id: 19,
    name: "Scarlet Ribbon",
    image: require('../assets/images/kousui_y19.jpg'),
    category: 'オードパルファム',
    tags: ['tag5', 'tag13'],
    desc: 'トップノートにサフランとオレンジのスパイシーフルーティーな香りが広がり、ミドルノートではジャスミンとハニーの甘美なフローラルが続きます。ラストノートはアンバーとウードが重厚感と温かみを加え、ゴージャスでエキゾチックな香りを完成させます。',  
  },
];

export default AllData;
