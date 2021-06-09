import Mux from '@mux/mux-node';
const { Video } = new Mux('7441578e-a733-4a1b-a32f-2b7ccc388c23', 'wUjBnDqjC/FnL0lyeAzZNujm4AcwT7gBXJtpcm/p6SgOT5cIUSmX8VNts62fA54DjJ3cUcaKsqV');

async function createVideo() {
  const assets = await Video.Uploads.create({
    input: 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4',
    cors_origin: '*',
  });
  return assets;
}


function App(){
  const something = createVideo();
  return (
    <div>
      {console.log(something)}
    </div>
  )
}

export default App;
