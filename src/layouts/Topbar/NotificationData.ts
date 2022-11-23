import { NotificationItem, Message } from '../types';

const notifications:NotificationItem[] = []

const data = {
    "from": "586881315432",
    "messageId": "22705b39-2d85-4112-9608-ebbed3fe141b",
    "notification": {
        "title": "Daily Scrum Mention",
        "body": "[Kevin Park] has mentioned you in [Whiteboard Journey] team! Please check your team's daily scrum for more information!",
        "image": "https://wbj-media.s3.ap-northeast-2.amazonaws.com/assets/asyncrum-logo-small.png"
    }
}

const title: string = data.notification.title;
const body: string = data.notification.body;
const message: Message = {
id: 1,
title: title,
subText: body,
time: '1 min ago',
icon: 'mdi mdi-comment-account-outline',
variant: 'primary',
isRead: true,
};

const messages: Message[] = [];
messages.push(message);

const notification: NotificationItem = { day: 'Today', messages: messages };
notifications.push(notification);


export default notifications;