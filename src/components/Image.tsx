import React, { ComponentProps } from 'react';
import { Image as _Image, ImageProps } from 'react-native';
import { ColorProps, createBox } from '@shopify/restyle';
import { Theme } from '../constants/theme';

const Base = createBox<Theme, ImageProps>(_Image);

type Props = ComponentProps<typeof Base> & ColorProps<Theme>;

function Image(props: Props) {
	return <Base {...props} />;
}

export default Image;
