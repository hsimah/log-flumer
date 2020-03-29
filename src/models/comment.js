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

  static parseAttachments(attachments) {
    if (Array.isArray(attachments) === false || attachments.legnth === 0) {
      return null;
    }
    const [{ data }] = attachments;
    const [attachment] = data;
    if (attachment.external_context != null) {
      return {
        url: attachment.external_context.url,
      };
    }
    if (attachment.media != null) {
      return {
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