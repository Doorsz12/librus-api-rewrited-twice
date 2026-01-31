const cheerio = require("cheerio");
class MessagesAPI {
  constructor(session) {
      this.session = session
  }

  async getMessages() {
    try {
      const res = await this.session.client.get(`${this.session.api.message_url}/wiadomosci`);
      const $ = cheerio.load(res.data);

      const messages = [];

      $("tr").each((_, tr) => {
        const link = $(tr).find('a[href^="/wiadomosci/"]').first();
        if (!link.length) return;

        const href = link.attr("href");
        const match = href.match(/\/wiadomosci\/\d+\/\d+\/(\d+)/);
        if (!match) return;

        const tds = $(tr).find("td");

        messages.push({
          id: Number(match[1]),
          sender: tds.eq(2).text().trim(),
          subject: tds.eq(3).text().trim(),
          date: tds.eq(4).text().trim(),
          unread: tds.filter('[style*="font-weight: bold"]').length > 0,
          hasAttachment: $(tr).find("img[alt*='plik']").length > 0,
        });
      });

      return messages;
    } catch (err) {
      console.error("[LibrusAPI: getMessages] failed", err);
      throw err;
    }
  }

  async getUnreadMessagesCount() {
    const messages = await this.getMessages();
    return messages.filter(m => m.unread).length;
  }

  async getMessage(id) {
    try {
      const res = await this.session.client.get(`${this.session.api.message_url}/wiadomosci/1/5/${id}/f0`);
      const $ = cheerio.load(res.data);

      return {
        id,
        sender: $("td.message-sender").text().trim(),
        subject: $("td.message-subject").text().trim(),
        body: $("div.message-content").text().trim(),
        date: $("td.message-date").text().trim(),
      };
    } catch (err) {
      console.error(`[LibrusAPI: getMessage ${id}] failed`, err);
      throw err;
    }
  }
}
module.exports = MessagesAPI;