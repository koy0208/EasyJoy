import { Button} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const CategoryButton = ({ category}) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth() + 1;

  // マンスが1桁の場合、先頭に0を追加
  if(currentMonth < 10) {
    currentMonth = '0' + currentMonth;
  }

  return (
      <Button
        flexShrink="0"
        borderRadius="full"
        variant="solid"
        as={RouterLink}
        to={`/ranking?category=${category}&get_month=${currentYear}-${currentMonth}`}
        border="solid"
        borderColor="gray.100"
        size="sm"
        _hover={{
          textDecoration: 'none',
          bg: 'green.200',
          color: 'white',
        }}
      >
          {category}部門
      </Button>
  );
};

export default CategoryButton;