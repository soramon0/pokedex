import React, { ComponentProps } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { ColorProps, createBox } from '@shopify/restyle';
import { Theme } from '../constants/theme';
import Text from './Text';

const BaseButton = createBox<Theme, TouchableOpacityProps>(TouchableOpacity);

export type Props = ComponentProps<typeof BaseButton> &
	ColorProps<Theme> & {
		text?: string;
	};

const ButtonOpacity: React.FC<Props> = ({ children, text, ...props }) => {
	return (
		<BaseButton {...props}>
			{children ? children : <Text>{text}</Text>}
		</BaseButton>
	);
};

ButtonOpacity.defaultProps = {
	activeOpacity: 0.6,
};

export default ButtonOpacity;
