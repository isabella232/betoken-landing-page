ng build --prod --base-href=/landing-page-staging/
ng build --configuration=ja --base-href=/landing-page-staging/ja/
ng build --configuration=pt --base-href=/landing-page-staging/pt/
ng build --configuration=zh-Hans --base-href=/landing-page-staging/zh-Hans/

node addMetaTags.js

ng deploy --repo=git@github.com:Betoken/landing-page-staging.git --branch=master --no-build