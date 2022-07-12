import Gif from './Gif';
import '../styles/ListOfGifs.css';

const ListOfGifs = ({ gifs }) => {
  return (
    <div className='ListOfGifs'>
      {gifs?.map(({ id, title, url }) => (
        <Gif key={id} title={title} url={url} id={id} />
      ))}
    </div>
  );
};

export default ListOfGifs;
