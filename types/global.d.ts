declare module 'react-native-internet-connection-alert' {
  import React from 'react';

  export interface ConnectionState {
    details: {};
    isConnected: boolean;
    isInternetReachable: boolean;
    type: 'wifi' | 'none';
  }

  interface Callbacks {
    onChange(connectionState: ConnectionState): void;
  }

  declare const Component: React.SFC<Callbacks>;

  export default Component;
}
