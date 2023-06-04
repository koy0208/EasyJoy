import { Button} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const CategoryButton = ({ category}) => {
  return (
      <Button
        flexShrink="0"
        borderRadius="full"
        variant="solid"
        as={RouterLink}
        to={`/ranking?category=${category}`}
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