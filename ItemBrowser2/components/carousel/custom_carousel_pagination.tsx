import {StyleSheet, View} from 'react-native';
import HomeCarouselData from '../../data/home_carousel_data'; // データの要素数分のページネーションを作成
import CustomCarouselDot from './custom_carousel_dot'; // ドットを表示

type Props = {
  paginationIndex: number;
};
const CustomCarouselPagination = ({paginationIndex}: Props) => {
  return (
    <View style={styles.container}>
      {HomeCarouselData.map((_, index) => {
        return (
          <CustomCarouselDot index={index} key={index} paginationIndex={paginationIndex} />
        );
      })}
    </View>
  );
};

export default CustomCarouselPagination;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
});