import styled from "styled-components";
import { BASE_URL } from "../../App";
import { Button } from "../../App";

const SearchResult = ({ data }) => {
  return (
    <FoodcardContainer>
      <FoodCards>
        {data?.map(({ name, image, text, price }) => (
          <FoodCard key={name}>
            <div className="food_image">
              <img src={BASE_URL + image} alt={name} />
            </div>
            <div className="food_info">
              <div className="info">
                <h3>{name}</h3>
                <p>{text}</p>
              </div>
              <Button>${price.toFixed(2)}</Button>
            </div>
          </FoodCard>
        ))}
      </FoodCards>
    </FoodcardContainer>
  );
};

export default SearchResult;

const FoodcardContainer = styled.section`
  min-height: calc(100vh - 210px);
  background-image: url("/bg.png");
  background-size: cover;
`;

const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;

const FoodCard = styled.div`
  width: 340px;
  height: 167px;
  border: 0.66px solid #98f9ff;
  border-radius: 20px;
  display: flex;
  padding: 8px;
  color: white;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      margin-top: 4px;
      font-size: 12px;
    }
  }
`;