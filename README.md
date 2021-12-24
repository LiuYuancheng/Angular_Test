# Angular_Test

Tutorial: Tour of Heros : https://angular.io/tutorial/toh-pt0

 Run module

```
ng serve --open
```



```
ng new angular-tour-of-heroes
```

`ng generate component heroes`

**[(ngModel)]** is Angular's two-way data binding syntax.



Add router module: 

```
ng generate module app-routing --flat --module=app
```

`--flat` puts the file in `src/app` instead of its own folder.
`--module=app` tells the CLI to register it in the `imports` array of the `AppModule`.



Install the In-memory Web API package from npm with the following command:

```sh
content_copynpm install angular-in-memory-web-api --save
```