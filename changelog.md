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

## FIRST GO AT IT

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

| change                                                                | note      |
| --------------------------------------------------------------------- | --------- |
| Setup dev environment - the right way                                 |           |
| --------------------------------------------------------------------- | --------- |
|                                                                       |           |
| **Step1 get app working locally**                                     | done:     |
| [github-apps] configure next-auth-local                               | √ 2 min   |
| fix security issue                                                    | √ 2 min   |
| build and test app locally                                            | √ 2 min   |
| add changelog                                                         | √ 2 min   |
| commit and push to github                                             | √ 5 min   |
|                                                                       |           |
| **Step2 deploy to prod**                                              | done:     |
| deploy to vercel to get the domain                                    | √ 10 min  |
| URL: next-auth-example-ashen.vercel.app                               |           |
| [github-apps] configure Oauth next-auth-prod                          | √ 2 min   |
| update vercel prod env:                                               | √ 5 min   |
| GITHUB_ID: c6a9c393e98f4144f863                                       |           |
| GITHUB_SECRET: 3989e54e126a861fa51b798a1d6e2edd4cf7d0a8               |           |
| NEXTAUTH_URL: https://next-auth-example-ashen.vercel.app              |           |
| Redeploy to have env vars kick in                                     | √ 2 min   |
| https support built in                                                |           |
| Any non prod git branches are dev branches                            |           |
|                                                                       |           |
| **Step3 deploy to dev**                                               | done:     |
| deploy to vercel to get the domain                                    | √ 2 min   |
| https://next-auth-example-git-dev-dearfrankg.vercel.app/              |           |
| [github-apps] configure Oauth next-auth-dev                           | √ 2 min   |
| update vercel dev env:                                                | √ 5 min   |
| GITHUB_ID: 059e7882fa64587164aa                                       |           |
| GITHUB_SECRET: 7271b941b0492ce48ef64faded7bd2fd90a66036               |           |
| NEXTAUTH_URL: https://next-auth-example-git-dev-dearfrankg.vercel.app |           |
| Redeploy to have env vars kick in                                     | √ 2 min   |
|                                                                       |           |
|                                                                       |           |
| **Step4 cleanup login page**                                          | wip:      |
|                                                                       |           |
|                                                                       |           |
|                                                                       |           |
|                                                                       |           |
| **Phase4 google Oauth**                                               | wip:      |
| Found docs re: google setup                                           |           |
|                                                                       |           |
|                                                                       |           |
|                                                                       |           |
|                                                                       |           |
|                                                                       |           |
|                                                                       |           |
|                                                                       |           |
|                                                                       |           |
|                                                                       |           |
| **Phase5 Apple Oauth**                                                |           |
|                                                                       |           |
|                                                                       |           |
| **Phase6 email login with DB**                                        |           |
|                                                                       |           |
| ------------------------------------------------                      | --------  |
| Setup prod environment                                                |           |
| ------------------------------------------------                      | --------  |
|                                                                       |           |
|                                                                       |           |
|                                                                       |           |
|                                                                       |           |
|                                                                       |           |

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
