Node JS project for email sending and password recovery

## entity relationship diagram:

```mermaid
erDiagram
    USERS }|--o{ REFRESH_TOKENS : contains
    USERS }|--o{ RESET_PASSWORD_TOKENS : contains
```

## Executing the Project

To run the project, use the following command:

```javascript

    npm run dev
```

## dependencies

-   [Prisma](https://www.prisma.io/)
-   [JWT](https://jwt.io)
-   [BCrypt](https://www.npmjs.com/package/bcrypt)
-   [JsonWebToken](www.npmjs.com/package/jsonwebtoken)
-   [tsyringe](www.npmjs.com/package/tsyringe)
-   [Celebrate](www.npmjs.com/package/celebrate)
-   [DayJs](www.npmjs.com/package/dayjs)
-   [Handlebars](www.npmjs.com/package/handlebars)
-   [nodemailer](www.npmjs.com/package/nodemailer)

<h3 align="center">created by  Delano Almeida filho </h3>
