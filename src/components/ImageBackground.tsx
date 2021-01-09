import React, { ComponentProps } from 'react';
import { ImageBackground as Image, ImageBackgroundProps } from 'react-native';
import { ColorProps, createBox } from '@shopify/restyle';
import { Theme } from '../constants/theme';

const BaseImage = createBox<Theme, ImageBackgroundProps>(Image);

type Props = ComponentProps<typeof BaseImage> & ColorProps<Theme>;

const ImageBackground: React.FC<Props> = ({ children, ...props }) => {
	return <BaseImage {...props}>{children}</BaseImage>;
};

export default ImageBackground;
