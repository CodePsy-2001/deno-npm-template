# Deno to NPM Template

**" Make it Deno, Deploy on NPM !! "**

" Deno로 만들고 NPM으로 배포하세요 !! "

## 배포

```shell
npm login --scope=@계정명 --registry="https://npm.pkg.github.com"

> Username: 계정명
> Password: 미리_발급받은_패키지쓰기_토큰
> Email: 연락가능한_이메일_주소

npm publish
```

## 사용

```shell
# 프로젝트 디렉토리 루트에 `.npmrc` 파일을 작성하세요

//npm.pkg.github.com/:_authToken=미리_발급받은_패키지읽기_토큰
@계정명:registry=https://npm.pkg.github.com/

# 이 계정명(namespace)에 대해 Github Packages 레지스트리를 사용합니다!
```

```shell
npm i @계정명/리포이름
# 또는
yarn add @계정명/리포이름
```

> *yarn v1*을 사용하세요. `.pnp.js`를 사용하는 *yarn v2*는 다른 방법을 써야 합니다.
>
> 참고: [Installing private packages from github packages registry using yarn fails with not authorized](https://stackoverflow.com/questions/61738819/installing-private-package-from-github-package-registry-using-yarn-fails-with-no)
