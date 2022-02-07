import { BlogPost, BlogPostContainer, BlogPostText } from "./styled";

interface Props {
  images: object;
}

const Post: React.FC<Props> = ({images}) => {
  const img = Object.keys(images);

  return (
    <>
    <BlogPostContainer>
      {Object.keys(images).map((key) => {
        return (
          <BlogPost key={key}>
            <img src={images[key].urls.full} />
            <BlogPostText>
              <p>Nam suscipit dui euismod quam curabitur tempus id, aenean dictum venenatis sodales mollis posuere faucibus rhoncus, laoreet congue sollicitudin cras ut convallis. ligula consectetur condimentum hendrerit.</p>
            </BlogPostText>
          </BlogPost>
        )
      })}
      </BlogPostContainer>
    </>
  );
}
 
export default Post;

