import React from 'react'

import {TouchableOpacity, View, ViewProps} from 'react-native'

import {Text, useStyleTheme} from '@theme/Theme'

import BorderRadius from '@constants/BorderRadius'
import FontSize from '@constants/FontSize'
import Spacing from '@constants/Spacing'

import SecondaryButton from './SecondaryButton'

interface Props {
  readonly key: string
  readonly title: string
  readonly buttonText?: string
  readonly onTitlePressed?: (topMargin?: number) => void
  readonly onButtonPressed?: () => void
}

const SectionListHeader = (props: Props) => {
  const {key, title, onTitlePressed, buttonText, onButtonPressed} = props

  return (
    <View
      style={[
        {
          borderRadius: BorderRadius.SECTION,
          borderWidth: 1,
          borderBottomWidth: 0,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          backgroundColor: useStyleTheme().colors.background,
          borderColor: useStyleTheme().colors.border,
          padding: Spacing.SMALL,
          marginTop: Spacing.X_SMALL,
          marginLeft: Spacing.MEDIUM,
          marginRight: Spacing.MEDIUM,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }
      ]}
      key={key}>
      <TouchableOpacity
        style={{
          flex: 1
        }}
        activeOpacity={0.5}
        onPress={event => {
          onTitlePressed?.(event.nativeEvent.pageY - event.nativeEvent.locationY)
        }}>
        <Text
          numberOfLines={2}
          style={{
            fontWeight: 'bold',
            fontSize: FontSize.H3,
            marginRight: Spacing.SMALL,
            backgroundColor: useStyleTheme().colors.background
          }}>
          {title}
        </Text>
      </TouchableOpacity>

      <SecondaryButton
        label={buttonText}
        style={{alignSelf: 'flex-end'}}
        onPress={() => {
          onButtonPressed?.()
        }}
      />
    </View>
  )
}

export default SectionListHeader

export const SectionListFooter = (props: ViewProps) => {
  const {children} = props

  return (
    <View
      style={{
        alignItems: 'center',
        borderWidth: 1,
        borderColor: useStyleTheme().colors.border,
        borderTopWidth: 0,
        borderBottomLeftRadius: BorderRadius.SECTION,
        borderBottomRightRadius: BorderRadius.SECTION,
        marginLeft: Spacing.MEDIUM,
        marginRight: Spacing.MEDIUM,
        paddingBottom: Spacing.LARGE,
        marginBottom: Spacing.X_SMALL
      }}>
      {children}
    </View>
  )
}
