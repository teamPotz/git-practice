# git-practice

let's practice git flow

1. clone repository

   ```bash
   git clone https://github.com/teamPotz/git-practice
   ```

2. change branch to develop

   ```bash
   git switch develop
   ```

3. issue 만들기
4. issue에서 branch 만들기

```bash
  git fetch origin
  git checkout feature/test
```

5. 작업 후 commit, push
   ```bash
   git add .
   git commit -m "A 기능 개발"
   git push
   ```
6. Pull Request 하기
   - develop 브랜치로 pull request를 한다.
7. Merge
   - 팀원 코드 리뷰 후 merge
8. merge 완료 후 local branch 삭제
   ```bash
   git branch -D feature/test
   ```
   참고 :

## git conflict를 피하는 방법

- 가급적 다른 파일에서 작업한다
  - 같은 파일내에서 같은 줄을 변경하면 충돌이 일어난다
- 커밋을 최대한 자주한다
- merge를 자주한다
- develop 브랜치 pull을 자주한다

from [깃 머지 하다 충돌이 났니? 깃 충돌 해결법 알려줄게! 깃 충돌을 피하는 4가지 TIP 까지!
](https://youtu.be/PGQIJE4tHAs?t=936)
