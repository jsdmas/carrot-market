# nextjs 활용

# prisma 사용법

```
npx prisma init : 초기화
npx prisma
```

Next steps:

1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.

```
db push : npx prisma db push
관리자 패널 : npx prisma studio
npx prisma generate
```

# planetScale

```
db 연결 : pscale connect carrot-market
```

# Twilio

SMS를 통해 메세지를 보낼 수 있고 robocall 또는 폰 번호를 숨기는 기능도 있습니다.
