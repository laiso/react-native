/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SegmentedControlIOS
 * @flow
 */
'use strict';

var NativeMethodsMixin = require('NativeMethodsMixin');
var NativeModules = require('NativeModules');
var PropTypes = require('ReactPropTypes');
var React = require('React');
var ReactIOSViewAttributes = require('ReactIOSViewAttributes');
var StyleSheet = require('StyleSheet');
var View = require('View');

var createReactIOSNativeComponentClass = require('createReactIOSNativeComponentClass');

var SegmentedControlIOS = React.createClass({
  mixins: [NativeMethodsMixin],

  propTypes: {
    tintColor: PropTypes.string,
  },

  getDefaultProps: function(): DefaultProps {
    return {
      tintColor: "#007AFF",
    };
  },

  render: function() {
    return (
      <View
        style={[{height: 29, width: 140}, this.props.style]}>
        <UISegmentedControl style={[{height: 29, width: 140}]} />
      </View>
    );
  }
});

var UISegmentedControl = createReactIOSNativeComponentClass({
  validAttributes: {},
  uiViewClassName: 'UISegmentedControl',
});

module.exports = SegmentedControlIOS;
