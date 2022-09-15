import { StyleSheet } from 'react-native'

import themeColor from './colors'

export const globalSpacing = 20

export default StyleSheet.create({
  flex1: {
    flex: 1,
  },
  icon: {
    width: 25,
    height: 25,
  },
  iconBig: {
    width: 30,
    height: 30,
  },

  // fonts
  heading: {
    color: themeColor.black,
    fontSize: 30,
    fontWeight: 'bold',
  },
  label: {
    color: themeColor.black,
    fontSize: 20,
  },
  body: {
    color: themeColor.black,
    fontSize: 18,
  },
  textCenter: {
    textAlign: 'center',
  },

  // alignments
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRowCenterSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsEnd: {
    alignItems: 'flex-end',
  },

  // spacing
  contentTopSpacing: {
    paddingTop: globalSpacing * 3,
    paddingBottom: globalSpacing,
  },
  pageHorizontalSpacing: {
    paddingHorizontal: globalSpacing,
  },
  spacingLeft: {
    marginLeft: globalSpacing,
  },
  spacingLeftMedium: {
    marginLeft: globalSpacing / 2,
  },
  spacingBottom: {
    marginBottom: globalSpacing,
  },
  spacingBottomMedium: {
    marginBottom: globalSpacing / 2,
  },
  spacingRight: {
    marginRight: globalSpacing,
  },
  spacingRightMedium: {
    marginRight: globalSpacing / 2,
  },
})
