ng build --prod --base-href "https://betoken.fund/"
echo "betoken.fund" > dist/betoken-landing-page/CNAME
npx angular-cli-ghpages --dir=dist/betoken-landing-page --repo=git@github.com:Betoken/Betoken.github.io.git --branch=master