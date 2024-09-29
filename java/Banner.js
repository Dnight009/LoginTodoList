import * as React from 'react';
import { Image } from 'react-native';
import { Banner } from 'react-native-paper';

const MyComponent = () => {
  const [visible, setVisible] = React.useState(true);

  return (
    <Banner
      visible={visible}
      actions={[
        {
          label: 'OK',
          onPress: () => setVisible(false),
        },
        {
          label: 'Cancle',
          onPress: () => setVisible(false),
        },
      ]}
      icon={"star"}>
      Wrong password.
    </Banner>
  );
};

export default MyComponent;