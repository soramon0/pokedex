import React, { ComponentProps } from 'react';
import { TextInput as Input, TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ColorProps, createBox, BoxProps } from '@shopify/restyle';
import { Theme } from '../constants/theme';
import Box from './Box';
import Text from './Text';
import { FeatherIcon } from '../types/icons';
import { useTheme } from '../context/Theme';

const BaseInput = createBox<Theme, TextInputProps>(Input);

type Props = ComponentProps<typeof BaseInput> &
	ColorProps<Theme> & {
		icon?: FeatherIcon;
		iconSize?: number;
		iconColor?: keyof Theme['colors'];
		touched?: boolean;
		error?: string;
		containerStyle?: BoxProps<Theme>;
	};

const TextInput = ({
	icon,
	iconSize,
	iconColor,
	touched,
	error,
	containerStyle,
	...props
}: Props) => {
	const { colors } = useTheme();
	const invalid = error && error.length > 0;

	return (
		<Box marginBottom={invalid ? 'xs' : 'base'} {...containerStyle}>
			<Box
				flexDirection='row'
				alignItems='center'
				borderRadius={15}
				px='md'
				py='xs'
				bg='inputBox'
			>
				{icon && (
					<Feather
						// @ts-ignore
						name={icon}
						size={iconSize}
						color={colors[iconColor || 'body']}
					/>
				)}
				<BaseInput
					flex={1}
					paddingVertical='base'
					paddingLeft='sm'
					{...props}
				/>
			</Box>

			{invalid ? (
				<Text variant='textError' marginTop='xs' marginLeft='sm'>
					{error}
				</Text>
			) : null}
		</Box>
	);
};

TextInput.defaultProps = {
	iconSize: 25,
};

export default TextInput;
