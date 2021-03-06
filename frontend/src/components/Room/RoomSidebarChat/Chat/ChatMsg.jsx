import React from 'react';
import cx from 'clsx'; // TODO This comes from some example code, it has some nice features but we need to discuss whether we want to use it
import {withStyles} from '@material-ui/core/styles';
import {Avatar, Grid, Typography} from '@material-ui/core';
import defaultChatMsgStyles from './ChatStyle';

const ChatMsg = withStyles(defaultChatMsgStyles, { name: 'ChatMsg' })(props => {
  const {
    classes,
    avatar,
    messages,
    side,
    GridContainerProps,
    GridItemProps,
    AvatarProps,
    getTypographyProps
  } = props;

  const attachClass = index => {
    if (index === 0) {
      return classes[`${side}First`];
    }
    if (index === messages.length - 1) {
      return classes[`${side}Last`];
    }
    return '';
  };
  return (
    <Grid container spacing={2} justify={side === 'right' ? 'flex-end' : 'flex-start'}{...GridContainerProps} className={classes.wrapper}>
      {side === 'left' && (
        <Grid item {...GridItemProps}>
          <Avatar src={avatar}{...AvatarProps} className={cx(classes.avatar, AvatarProps.className)}/>
        </Grid>
      )}
      <Grid item xs={8}>
        {messages.map((msg, i) => {
          const TypographyProps = getTypographyProps(msg, i, props);
          return (
            <div key={msg.id || i} className={classes[`${side}Row`]}>
              <Typography align={'left'} {...TypographyProps} className={cx(classes.msg, classes[side], attachClass(i), TypographyProps.className)}>
                {msg}
              </Typography>
            </div>
          );
        })}
      </Grid>
    </Grid>
  );
});

ChatMsg.defaultProps = {
  avatar: '',
  messages: [],
  side: 'left',
  GridContainerProps: {},
  GridItemProps: {},
  AvatarProps: {},
  getTypographyProps: () => ({})
};

export default ChatMsg;
