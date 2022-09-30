import {session} from '@huxy/utils';
import {customRender} from '../../configs';

const Index = props => {
  const pageSchema = session.get(props?.params?.routerId);
  return customRender(pageSchema || [], {}, props);
};

export default Index;
