# CHANGELOG

## PROJECT DESCRIPTION

- login component
- handle all login and auth tasks (google/apple/facebook/email)
- when logged in

SCENARIO

- www.myapp.com
- login screen
- login successful
- pass info to other system via http POST
- email login - POST username / password

## FIRST GO AT IT - 8 hour learning experience

First go at it was a learning experience.

What was learned:

- configuring a system is hell - avoid it
- being involved in the community accelerates your skills
- using a host provider lets them deal with configuring

LOGS

        | change                                            | note      |
        | ------------------------------------------------- | --------- |
        | Setup dev environment                             |           |
        | ------------------------------------------------- | --------- |
        | **Find docs on Oauth setup**                      | done:     |
        | next Oauth docs - [next-auth]                     |           |
        |                                                   |           |
        |                                                   |           |
        | **Phase1 github Oauth**                           | done:     |
        | clone and npm install                             |           |
        | configure .env-local                              |           |
        |                                                   |           |
        | **Phase2 Add https to dev**                       | done:     |
        | -- Add https to next - [next+https]               | working   |
        | -- config github-fmc-dev to use https             | working   |
        |                                                   |           |
        | **Phase3 setup domain**                           | done:     |
        | [google-domains] activate DDNS                    | √ 1 hour  |
        | [inadyn] DDNS client                              | X fail    |
        | use brew to install inadyn                        | √ 1 hour  |
        | requires upgrade Homebrew                         | √ 1 hour  |
        | inadyn docs suck -- inadyn fail                   | √ 1 hour  |
        | [bash-ddns] script to the rescue                  | √ 1 hour  |
        | [google-wifi] port forward                        | √ 1 hour  |
        | [att-router] port forward - router access trouble | V 2 hours |
        |                                                   |           |
        | **Phase4 setup https certificate**                | done:     |
        | [lets-encrypt] review docs                        |           |
        | [cerbot] review docs                              |           |
        | [setup-express] review docs                       |           |
        |                                                   |           |
        |                                                   |           |

## SECOND CRACK

| change                                                                              | note      |
| ----------------------------------------------------------------------------------- | --------- |
| development the right way                                                           |           |
| ----------------------------------------------------------------------------------- | --------- |
| Use a service and only do development on laptop, no domain/certificate setup        |           |
| vercel has https support built in                                                   |           |
| vercel uses main branch for prod and all other branches for preview                 |           |
| your laptop is your local env which supports https                                  |           |
|                                                                                     |           |
|                                                                                     |           |
| **Step1 get app working locally**                                                   | done:     |
| [github-apps] configure next-auth-local                                             | √ 20 min  |
| fix security issue                                                                  | √ 20 min  |
| build and test app locally                                                          | √ 20 min  |
| add changelog                                                                       | √ 20 min  |
| commit and push to github                                                           | √ 15 min  |
|                                                                                     |           |
|                                                                                     |           |
| **Step2 deploy to prod**                                                            | done:     |
| deploy to vercel to get the domain                                                  | √ 10 min  |
| URL: next-auth-example-ashen.vercel.app                                             |           |
| [github-apps] configure Oauth next-auth-prod                                        | √ 20 min  |
| update vercel prod env:                                                             | √ 15 min  |
| Redeploy to have env vars kick in                                                   | √ 20 min  |
|                                                                                     |           |
|                                                                                     |           |
| **Step3 deploy to dev**                                                             | done:     |
| deploy to vercel to get the domain                                                  | √ 20 min  |
| https://next-auth-example-git-dev-dearfrankg.vercel.app/                            |           |
| [github-apps] configure Oauth next-auth-dev                                         | √ 20 min  |
| update vercel dev env:                                                              | √ 15 min  |
| Redeploy to have env vars kick in                                                   | √ 20 min  |
|                                                                                     |           |
|                                                                                     |           |
| **Step4 cleanup login page**                                                        | done:     |
| cleanup login page                                                                  | √ 15 min  |
| deploy to dev                                                                       |           |
|                                                                                     |           |
|                                                                                     |           |
| **Step5 document github Oauth**                                                     | done:     |
| See .env-data for id, secret                                                        |           |
|                                                                                     |           |
|                                                                                     |           |
| **Step6 google Oauth**                                                              | done:     |
| [google-oauth-setup]                                                                |           |
| [google-console] configure Oauth next-auth-local                                    |           |
| update vercel env vars                                                              | √ 10 min  |
| Redeploy to have env vars kick in                                                   | √ 20 min  |
| See .env-data for id, secret                                                        |           |
|                                                                                     |           |
|                                                                                     |           |
| **Step7 Facebook Oauth**                                                            | done:     |
| [facebook-oauth-article]                                                            |           |
| [facebook-for-devs]                                                                 |           |
| convert to HTTPS: env-file, google-config, facebook-config                          | √ 20 min  |
| See .env-data for id, secret                                                        |           |
|                                                                                     |           |
|                                                                                     |           |
| **Step8 document login issue**                                                      | done:     |
| [login-issue]                                                                       |           |
| The old 'Sign in with the same account' error                                       |           |
| Login and out with google then login with facebook you get this error by design.    |           |
| Seems not to be an issue in dev and prod                                            |           |
|                                                                                     |           |
|                                                                                     |           |
|                                                                                     |           |
| **Phase5 Apple Oauth**                                                              |           |
| alert: requires apple developers account: $99                                       |           |
|                                                                                     |           |
| **Phase6 email login with DB**                                                      |           |
|                                                                                     |           |
| ------------------------------------------------                                    | --------  |
| Setup prod environment                                                              |           |
| ------------------------------------------------                                    | --------  |
|                                                                                     |           |
|                                                                                     |           |
|                                                                                     |           |
|                                                                                     |           |
|                                                                                     |           |

## LETS ENCRYPT DATA

Create a file containing just this data:

3Ql4PVwam-OF6iDUiIvKON1sKJ0RyPWE9UNUSyNLzSQ.kjRLyQsVV9A_4c68eZ6ruom_YfxzwKDBThz6iIx06ag

And make it available on your web server at this URL:

http://dearfrankg.com/.well-known/acme-challenge/3Ql4PVwam-OF6iDUiIvKON1sKJ0RyPWE9UNUSyNLzSQ

## LINKS

[next-auth]: https://next-auth.js.org/
[next+https]: https://medium.com/responsetap-engineering/nextjs-https-for-a-local-dev-server-98bb441eabd7

## APP SETUP

### PURCHASE DOMAIN

- Google domains
- [dearfrankg.com]
- [fmc-vercel.app]

### CONFIGURE DYNAMIC DNS (DDNS)

Internet companies like ATT make you pay for static IP. Since we do not want to
pay we will setup to work with dynamic IP.

- navigate to [google-domains]
- activate DDNS - [google-domains-dns]- advanced settings - activate DDND - hostname blank
- capture DDNS credentails - Username: lUiyoU7CVJzdg7zV Password: quIOoJ3mj2AXcM5w
- setup DDNS client: [ddclient] or [inadyn]

### CONFIGURE PORT FORWARDING

- forward traffic from router to host -- ports 80 and 443 to Frank's laptop

### LINKS

[dearfrankg.com]: https://dearfrankg.com
[fmc-vercel.app]: https://fmc-vercel.app
[google-domains]: https://domains.google.com
[google-domains-dns]: https://domains.google.com/registrar/dearfrankg.com/dns
[github-apps]: https://github.com/settings/developers
[google-console]: https://console.cloud.google.com/apis/dashboard?project=next-auth-local-332411
[google-oauth-setup]: https://support.google.com/googleapi/answer/6158849?hl=en
[facebook-oauth-article]: https://blog.logrocket.com/how-to-use-nextauth-js-for-client-side-authentication-in-next-js/
[facebook-for-devs]: https://developers.facebook.com/apps/?show_reminder=true
[login-issue]: https://github.com/nextauthjs/next-auth/issues/296
