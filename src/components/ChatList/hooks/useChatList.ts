import { useState } from 'react';
import type { Comment } from '../../VideoPlayer/Comment';

export default function useChatList(chatMessages: Comment[]) {
  const [messages, setMessages] = useState<Comment[]>(chatMessages);

  /**
   * Handle new message posted
   */
  const handleNewMessagePosted = (comment: Comment) => {
    setMessages(messages.concat(comment));
  };

  return {
    messages,
    handleNewMessagePosted,
  };
}
