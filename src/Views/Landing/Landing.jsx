import fire from '../../assets/chubby-cute.gif'

const Landing = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <img src={fire} style={{ width: '150px' }} alt="" />
      </div>
      <h2>Arrancamos</h2>
    </>
  );
};

export default Landing;