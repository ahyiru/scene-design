import {useRef, useEffect} from 'react';
import Layout from '@commons/layout/layout';
import setStyleVar from '@app/utils/setStyleVar';

const ScenesLayout = props => {
  const {path, name, theme = {}, leftList = [], rightList = [], menuType, logo} = props;
  const scenesRef = useRef();
  useEffect(() => {
    setStyleVar(theme, scenesRef.current);
  }, []);
  return <div ref={scenesRef}>
    <Layout {...props} title={name} leftList={leftList} rightList={rightList} menuType={menuType} logo={logo} onlyCurrentMenu={path} />
  </div>;
};

export default ScenesLayout;