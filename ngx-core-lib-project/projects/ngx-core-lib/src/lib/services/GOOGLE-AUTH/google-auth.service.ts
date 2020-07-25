import { Injectable } from '@angular/core';

declare global {
  interface Window { gapi: any; }
}

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {
  defaultGoogleSignInOptions = { prompt: 'select_account' };
  googleSignInOptions: any;
  constructor() { }

  async googleSignIn(clientId) {
    await this.loadGapi(clientId);
    return this.googleSignin();
  }

  loadGapi(clientId): Promise<any> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/platform.js';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        window.gapi.load('auth2', () => {
          window.gapi.auth2
            .init({
              Client_id: clientId.CLIENT_ID
            })
            .then(() => {
              resolve();
            });
        });
      };
      const meta = document.createElement('meta');
      meta.name = 'google-signin-client_id';
      meta.content = clientId.CLIENT_ID;
      document.head.appendChild(meta);
      document.head.appendChild(script);
    }).catch(() => {
      throw new Error('Promise failure');
    });
  }

  public googleSignin(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      window.gapi.load('auth2', () => {
        window.gapi.auth2
          .getAuthInstance()
          .signIn(this.googleSignInOptions || this.defaultGoogleSignInOptions)
          .then(async googleInfo => {
            console.log('Google Info', googleInfo);
            const { id_token, expires_at } = googleInfo.getAuthResponse();
            const profile = googleInfo.getBasicProfile();
            const user = {
              email: profile.getEmail(),
              name: profile.getName(),
              firstName: profile.getGivenName(),
              lastName: profile.getFamilyName(),
              id_token: id_token,
              expires_at: expires_at
            };
            resolve(user);
          }, (err) => {
            resolve(false);
            console.log('Err ', err);
          });
      }, (error) => {
        console.log('Error Found', error);
      });
    });
  }


  public googleSignOut() {
    const auth = window.gapi.auth2.getAuthInstance();
    auth.signOut().then(() => {
      auth.disconnect();
    });
  }
}