import { useParams } from 'react-router-dom';

const ArtistDetails = () => {
  const { songid, id: artistId } = useParams();

  return (
  <div>{artistId}</div>
  )
};

export default ArtistDetails;
