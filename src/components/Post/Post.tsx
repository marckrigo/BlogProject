import * as S from "./styled";

interface Props {
  images: object;
}

const Post: React.FC<Props> = ({images}) => {
  return (
    <>
    <S.BlogPostContainer>
      {Object.keys(images).map((key) => {
        return (
          <S.BlogPost key={key}>
            <img src={images[key].urls.full} />
            <S.BlogPostText>
              <p>Nam suscipit dui euismod quam curabitur tempus id, aenean dictum venenatis sodales mollis posuere faucibus rhoncus, laoreet congue sollicitudin cras ut convallis. ligula consectetur condimentum hendrerit.</p>
            </S.BlogPostText>
          </S.BlogPost>
        )
      })}
      </S.BlogPostContainer>
    </>
  );
}
 
export default Post;

