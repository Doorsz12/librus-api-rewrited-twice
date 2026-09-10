class AuthAPI {
  constructor(session) {
    this.session = session
  }

  async activateApiAccess() {
    try {
      const tokenInfoResponse = await this.session.client.get(
        `${this.session.api.url}/Auth/TokenInfo`,
        { timeout: 5000 }
      );

      const identifier = tokenInfoResponse.data.UserIdentifier;

      const userInfoResponse = await this.session.client.get(
        `${this.session.api.url}/Auth/UserInfo/${identifier}`,
        { timeout: 5000 }
      );

      return userInfoResponse.status === 200;
    } catch (error) {
      console.error(error);
      return { code: 0, text: null };
    }
  }

  async mkToken(login, pass) {
    try {
      // 1. Start the new Librus authentication flow
      const startResponse = await this.session.client.get(
        'https://synergia.librus.pl/loguj/portalRodzina',
        {
          headers: {
            Referer: 'https://portal.librus.pl/'
          }
        }
      );

      // 2. Get the OAuth authorization URL after the redirect
      const loginUrl =
        startResponse.request?.res?.responseUrl ||
        'https://api.librus.pl/OAuth/Authorization?client_id=46';

      // 3. Send login credentials
      const formData = new URLSearchParams();
      formData.append('action', 'login');
      formData.append('login', login);
      formData.append('pass', pass);

      const loginResponse = await this.session.client.post(
        loginUrl,
        formData
      );

      if (loginResponse.status !== 200) {
        return false;
      }

      // 4. Librus returns the next URL in the response
      const nextUrl = loginResponse.data?.goTo;

      if (!nextUrl) {
        return false;
      }

      // 5. Follow the URL returned by Librus
      await this.session.client.get(nextUrl);

      // 6. Verify API access
      return await this.activateApiAccess();

    } catch (error) {
      console.error(error);
      return error?.response ?? false;
    }
  }
}

module.exports = AuthAPI;
