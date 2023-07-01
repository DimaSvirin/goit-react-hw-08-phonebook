export default function Home() {
    return (
      <div
        style={{
          backgroundImage: `url(${require('../components/images/bg-image-phonebook.jpg')})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
          width: 1200,
          height: 300,
          position:'center',
          marginTop: -65,
          padding:0,
      }}
      >
      </div>
    );
  }