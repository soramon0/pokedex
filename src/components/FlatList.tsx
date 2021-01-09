import React, { ComponentProps } from 'react';
import { FlatList as _FlatList, FlatListProps } from 'react-native';
import { ColorProps, createBox } from '@shopify/restyle';
import { Theme } from '../constants/theme';

const Base = createBox<Theme, FlatListProps<any>>(_FlatList);

export type Props = ComponentProps<typeof Base> & ColorProps<Theme>;

function FlatList(props: Props) {
	return <Base {...props} />;
}

export default FlatList;
