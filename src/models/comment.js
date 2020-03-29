export default class Comment {
  static isComment(data) {
    if (data == null) {
      return false;
    }
    if (typeof data !== 'object') {
      return false;
    }
    if (Object.keys(data).length !== 1) {
      return false;
    }
    if (data.hasOwnProperty('comments')) {
      return true;
    }
    return false;
  }

  static parseComments(data) {
    if (Comment.isComment(data) === false) {
      throw new Error('invalid comment log');
    }
    const { comments } = data;
    return comments.reduce((a, c) => {
      const comment = new Comment(c);
      a.comments.push(comment);
      if (comment.group != null && a.groups.has(comment.group) !== true) {
        a.groups.add(comment.group);
      }
      return a;
    }, {
      comments: [],
      groups: new Set(),
    });
  }

  static parseAttachments(attachments) {
    if (Array.isArray(attachments) === false || attachments.legnth === 0) {
      return null;
    }
    const [{ data }] = attachments;
    const [attachment] = data;
    if (attachment.external_context != null) {
      return attachment.external_context.url.startsWith('photos_and_videos') ?
        null : {
          url: attachment.external_context.url,
        };
    }
    if (attachment.media != null) {
      return attachment.media.uri.startsWith('photos_and_videos') ?
        null : {
          url: attachment.media.uri,
          title: attachment.media.title,
        };
    }
  }

  attachment = null;
  author = '';
  comment = '';
  group = null;

  constructor({
    timestamp,
    attachments,
    data,
    title
  }) {
    if (Array.isArray(data) !== false && data.length === 1) {
      const [{ comment: { author, comment, group } }] = data;
      this.author = author;
      this.comment = comment;
      this.group = group;
    }
    this.attachment = Comment.parseAttachments(attachments);
    this.time = new Date(timestamp * 1000);
    this.title = title;
  }

}