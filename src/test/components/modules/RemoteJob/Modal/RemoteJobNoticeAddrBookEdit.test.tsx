import { shallow } from 'enzyme';
import React from 'react';
import RemoteJobNoticeAddrBookEdit, {
  RemoteJobNoticeAddrBookEditProps,
} from '../../../../../components/modules/RemoteJob/Drawer/RemoteJobNoticeAddrBookEdit';

describe('renders the component', () => {
  it('renders correctly', () => {
    const input: RemoteJobNoticeAddrBookEditProps = {
      name: 'errorSummary',
    };
    const component = shallow(<RemoteJobNoticeAddrBookEdit {...input} />);
  });
});
