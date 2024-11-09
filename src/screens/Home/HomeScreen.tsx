import {useInfiniteQuery} from '@tanstack/react-query';
import {
  ErrorFallback,
  Header,
  ScreenLoader,
  SearchInput,
  TickerItem,
} from 'components';
import {Ticker} from 'models/api';
import React, {useCallback, useState} from 'react';
import {ActivityIndicator, FlatList, RefreshControl, View} from 'react-native';
import apiService from 'services/apiService';
import colors from 'styles/colors';

import styles from './HomeScreen.styles';

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Delay is added to avoid exhaustive network calls on every input text change
  const onChangeSearchInputText = (term: string) =>
    setTimeout(() => {
      setSearchTerm(term);
    }, 3000);

  const {
    data,
    refetch,
    fetchNextPage,
    isRefetching,
    isFetchingNextPage,
    error,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ['tickers', searchTerm],
    queryFn: ({queryKey, pageParam = 1}) =>
      apiService.fetchTickers(queryKey[1] as string, pageParam as string),
    getNextPageParam: lastPage => {
      const nextUrl = lastPage?.data.next_url;
      if (nextUrl) {
        const cursorParam = nextUrl.split('cursor=')[1];
        return cursorParam;
      }
      return undefined;
    },
    initialPageParam: '',
    select: result => {
      return result.pages.flatMap(page => page.data.results);
    },
  });

  const onRefreshList = () => refetch();
  const onEndReached = () => fetchNextPage();

  const renderTickerItem = useCallback(
    ({item, index}: {item: Ticker; index: number}) => {
      return <TickerItem item={item} key={index} />;
    },
    [],
  );

  const renderFooter = () => {
    if (isFetchingNextPage) {
      return (
        <ActivityIndicator size="small" color={colors.activityIndicator} />
      );
    } else if (error && data?.length) {
      return <ErrorFallback />;
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <SearchInput onChangeText={onChangeSearchInputText} />

      {error && <ErrorFallback />}

      <FlatList<Ticker>
        testID="test:id/tickers-list"
        data={data}
        renderItem={renderTickerItem}
        onEndReached={onEndReached}
        columnWrapperStyle={styles.columnWrapper}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            onRefresh={onRefreshList}
            tintColor={colors.activityIndicator}
          />
        }
        numColumns={2}
        ListFooterComponent={renderFooter}
      />
      {isFetching && <ScreenLoader />}
    </View>
  );
};

export default HomeScreen;
