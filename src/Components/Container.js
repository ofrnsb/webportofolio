import { useSelector } from 'react-redux';
import { Scontainer } from './Components';
import Navbar from './Navbar';

const Container = ({ children }) => {
  //Appreducer sesuai dengan nama reducer yang ada di file Store.js
  const isLogin = useSelector((state) => state.Appreducer.isLogin);

  return (
    <Scontainer isLogin={isLogin}>
      {isLogin && <Navbar />}
      {children}
    </Scontainer>
  );
};

export default Container;
