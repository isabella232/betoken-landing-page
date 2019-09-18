ng build --prod --base-href=/
ng build --configuration=ja --base-href=/ja/
ng build --configuration=pt --base-href=/pt/
ng build --configuration=zh-Hans --base-href=/zh-Hans/

node addMetaTags.js

ng deploy --repo=git@github.com:Betoken/Betoken.github.io.git --branch=master --cname=betoken.fund --no-build