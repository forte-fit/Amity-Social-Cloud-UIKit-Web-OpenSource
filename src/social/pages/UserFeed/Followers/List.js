import { FollowRequestStatus } from '@amityco/js-sdk';
import { FormattedMessage, useIntl } from 'react-intl';
import React, { useMemo } from 'react';

import useUser from '~/core/hooks/useUser';
import useReport from '~/social/hooks/useReport';
import { notification } from '~/core/components/Notification';
import {
  Header,
  UserHeaderContainer,
  ListEmptyState,
} from '~/social/pages/UserFeed/Followers/styles';
import UserHeader from '~/social/components/UserHeader';
import OptionMenu from '~/core/components/OptionMenu';
import PaginatedList from '~/core/components/PaginatedList';
import { Grid } from '~/social/components/community/CategoryCommunitiesList/styles';
import EmptyFeedIcon from '~/icons/EmptyFeed';
import Skeleton from '~/core/components/Skeleton';
import { useAsyncCallback } from '~/core/hooks/useAsyncCallback';
import { confirm } from '~/core/components/Confirm';
import useFollow from '~/core/hooks/useFollow';

const UserItem = ({ currentUserId, userId, allowRemoveUser }) => {
  const { user } = useUser(userId);
  const { formatMessage } = useIntl();
  const { isFlaggedByMe, handleReport } = useReport(user);
  const [onReportClick] = useAsyncCallback(async () => {
    await handleReport();
    notification.success({
      content: <FormattedMessage id="report.reportSent" />,
    });
  }, [handleReport]);

  const { followDecline } = useFollow(currentUserId, userId);

  const onRemoveClick = () => {
    confirm({
      title: (
        <FormattedMessage
          id="follower.title.removeUser"
          values={{ displayName: user.displayName }}
        />
      ),
      content: (
        <FormattedMessage
          id="follower.body.removeUser"
          values={{ displayName: user.displayName }}
        />
      ),
      cancelText: formatMessage({ id: 'buttonText.cancel' }),
      okText: formatMessage({ id: 'buttonText.remove' }),
      onOk: followDecline,
    });
  };

  return (
    <UserHeaderContainer key={userId}>
      <Header>
        <UserHeader userId={userId} />
        <OptionMenu
          options={[
            {
              name: isFlaggedByMe ? 'report.undoReport' : 'report.doReport',
              action: onReportClick,
            },
            allowRemoveUser && {
              name: 'follower.menuItem.removeUser',
              action: onRemoveClick,
            },
          ].filter(Boolean)}
        />
      </Header>
    </UserHeaderContainer>
  );
};

const List = ({ currentUserId, hook, emptyMessage, allowRemoveUser }) => {
  const [followings, hasMore, loadMore, loading, loadingMore] = hook(
    currentUserId,
    FollowRequestStatus.Accepted,
  );

  const items = useMemo(() => {
    function getLoadingItems() {
      return new Array(5).fill(1).map((x, index) => ({ userId: index, skeleton: true }));
    }

    if (loading) {
      return getLoadingItems();
    }

    if (!loadingMore) {
      return followings;
    }

    return [...followings, ...getLoadingItems()];
  }, [followings, loading, loadingMore]);

  return (
    <PaginatedList
      items={items}
      hasMore={hasMore}
      loadMore={loadMore}
      container={Grid}
      emptyState={
        <ListEmptyState
          icon={<EmptyFeedIcon width={48} height={48} />}
          title="It's empty here..."
          description={emptyMessage}
        />
      }
    >
      {({ skeleton }) =>
        skeleton ? (
          <Skeleton count={3} style={{ fontSize: 8 }} />
        ) : (
          followings.map(({ userId }) => (
            <UserItem
              key={userId}
              userId={userId}
              currentUserId={currentUserId}
              allowRemoveUser={allowRemoveUser}
            />
          ))
        )
      }
    </PaginatedList>
  );
};

export default List;
