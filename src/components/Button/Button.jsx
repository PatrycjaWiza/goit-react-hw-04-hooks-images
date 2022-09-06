import { ButtonStyles } from './ButtonStyles';

export const Button = ({ loadMore }) => {
  return (
    <ButtonStyles type="button" onClick={loadMore}>
      Load more
    </ButtonStyles>
  );
};
