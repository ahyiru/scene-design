import {materials} from '@huxy/components';

import notFound from './models/icons/not-found.png';
import animateObjs from './models/animateObjs';
import cssModels from './models/cssModels';

const {IconAnimate} = materials;

import './index.less';

const Index = props => {
  return (
    <div className="not-found-page">
      <div className="not-found-icon">
        <img  src={notFound} />
      </div>
      <div className="animation-info">
        <IconAnimate objs={animateObjs} models={cssModels} />
      </div>
    </div>
  );
};

export default Index;
