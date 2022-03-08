import * as S from "./styled";
import Image from 'next/image'
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
            <S.BlogPostImg>
              <Image
                src={images[key].urls.regular} 
                alt={images[key].alt_description}
                layout="fill"
                priority
                quality={50}
              />
            </S.BlogPostImg>
            <S.BlogPostText>
              <p>{images[key].description ? images[key].description : images[key].user.bio} </p>
            </S.BlogPostText>
          </S.BlogPost>
        )
      })}
      </S.BlogPostContainer>
    </>
  );
}
 
export default Post;

