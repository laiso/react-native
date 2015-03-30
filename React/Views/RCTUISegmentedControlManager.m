/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "RCTUISegmentedControlManager.h"

#import "RCTConvert.h"
#import "RCTBridge.h"
#import "RCTEventDispatcher.h"
#import "UIView+React.h"

@implementation RCTUISegmentedControlManager

- (UIView *)view
{
  UISegmentedControl *segmentedControl = [[UISegmentedControl alloc] initWithItems:@[@"WIP1", @"WIP2", @"WIP3"]];
  [segmentedControl addTarget:self action:@selector(onChange:) forControlEvents:UIControlEventValueChanged];
  return segmentedControl;
}

- (void)onChange:(UISegmentedControl *)sender
{
    [self.bridge.eventDispatcher sendInputEventWithName:@"topChange" body:@{
      @"target": sender.reactTag,
      @"value": @(sender.selectedSegmentIndex)
    }];
}

RCT_EXPORT_VIEW_PROPERTY(tintColor, UIColor);
RCT_EXPORT_VIEW_PROPERTY(momentary, BOOL);

@end
