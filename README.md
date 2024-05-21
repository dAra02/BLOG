Области хранения данных:

-   база данных на json-srver
-   BFF
-   редакс стор

Сущности приложения:

-   пользователь: БД (список пользователей), BFF (сессия текущего), стор (отображение в браузере)
-   роль пользователя: БД (список ролей), BFF (сессия пользователя с ролью), стор(использование на клиенте)
-   статья: БД (список статей), стор (отображения в браузере)
-   комментарий: БД (список комментариев), стор (отображения в браузере)

Таблицы БД:

-   пользователи - users: id / login / password / registed_at / role_id
-   роли - roles: id / name
-   статьи - posts: id / title / image_url / content / publiched_at
-   комментарии - comments: id / author_id / post_id / content / publiched_at

Схема(перечень данных которые мы должны там хранить) состояния на BFF:

-   сессия текущего пользователя: login / password / role

Схема для редакс стор (на клиенте):

-   user: id / login / roleId / session
-   posts: массив post: id / title / imageUrl / publichedAt / commentsCount
-   post: id / title / imageUrl / content / publichedAt / comments: массив comment: id / author / content / publichedAt
-   users: массив user: id / login / registeredAt / role
