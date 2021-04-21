# NG Grill

This is a micro frontend architecture demo using Angular Elements to create a website for a fictitious restaurant.

If you want to follow along, here is the software I already have installed:

| Software    | Version |
| ----------- | ------- |
| Node        | 14.16.1 |
| NPM         | 7.10.0  |
| Yarn        | 1.22.10 |
| Angular CLI | 11.2.9  |

## Generate Shell and Micro Frontends

I start off by generating an Angular workspace.
I then add my applications for the shell and micro frontends.

```sh
ng new --create-application false --strict true ng-grill
cd ng-grill
ng generate application --routing --style scss shell
ng generate application --routing --style scss menu
ng generate application --routing --style scss order
ng generate application --routing --style scss locations
```

## Install ng-micro-frontend

To simplify things, we're just going to install a package called ng-micro-frontend.

```sh
ng add ng-micro-frontend --project menu --type micro --port 4210 && \
ng add ng-micro-frontend --project order --type micro --port 4220 && \
ng add ng-micro-frontend --project locations --type micro --port 4230 && \
ng add ng-micro-frontend --project shell --type shell --port 4200
```

- First, we're going to start by installing ng-micro-frontend.
- This package helps abstract away a lot of the complexity and really simplifies this approach.
- This allows you to focus on your application and your requirements.
- Of course, this package is entirely optional, you can easily do all of this without using it.
- I'm simply using it because I like it, and it helps save me time.
- Which is especially useful when I only have 5 minutes.
- You'll notice these commands do a whole lot more than just adding the package as a dependency.
- Using Schematics, a lot of setup and scaffolding happens for you automatically.
- This is the same technology the Angular CLI uses for things like `ng new` and `ng generate`.

## Add new application for emails fragment

Up to now, all of our micro frontends are full page experiences.
However, our architecture can also support fragments.
Fragments are smaller micro frontends that make up one tiny piece of a page.

```sh
ng generate application --routing --style scss emails && \
ng add ng-micro-frontend --project emails --type micro --port 4240
```

## Generate Menu Components

Next, I generate some menu components to show how we can include multiple pages within a micro frontend.

```sh
ng generate component --project menu breakfast && \
ng generate component --project menu lunch && \
ng generate component --project menu dinner
```

## Update projects/menu/src/app/app-routing.module.ts

Now, we need to setup our routes to point to these new menu components.

```ts
import { BreakfastComponent } from './breakfast/breakfast.component';
import { DinnerComponent } from './dinner/dinner.component';
import { LunchComponent } from './lunch/lunch.component';

const mfeRoutes: Routes = [
  { component: BreakfastComponent, path: 'breakfast' },
  { component: LunchComponent, path: 'lunch' },
  { component: DinnerComponent, path: 'dinner' },
];
```

## Update projects/emails/src/app/app.component.html

```html
<h3>{{ title | titlecase }}</h3>
<p>Join our email list and we'll periodically send you coupons!</p>
<router-outlet></router-outlet>
```

## Update projects/locations/src/app/app.component.html

```html
<h1>{{ title | titlecase }}</h1>
<p>Our locations system is currently undergoing scheduled maintenance.</p>
<router-outlet></router-outlet>
<mfe-fragment baseUrl="http://localhost:4240"></mfe-fragment>
```

## Update projects/menu/src/app/app.component.html

```html
<h1>{{ title | titlecase }}</h1>
<nav>
  <ul>
    <li><a routerLink="/menu/breakfast">Breakfast</a></li>
    <li><a routerLink="/menu/lunch">Lunch</a></li>
    <li><a routerLink="/menu/dinner">Dinner</a></li>
  </ul>
</nav>
<router-outlet></router-outlet>
<mfe-fragment baseUrl="http://localhost:4240"></mfe-fragment>
```

## Update projects/order/src/app/app.component.html

```html
<h1>{{ title | titlecase }}</h1>
<p>Our online order system is currently undergoing scheduled maintenance.</p>
<router-outlet></router-outlet>
```

## Update projects/shell/src/app/app.component.html

Remove this code and everything in between:

```html
  <!-- Resources -->
  ...
  </footer>
```

## Run menu

```sh
yarn start:menu
```

Visit http://localhost:4210 to see menu in standalone mode.

## Run Everything

```sh
yarn start
```

- This is going to build all 5 applications, so it will take awhile.
- This is using `ng serve` so that if you make changes, it will automatically rebuild.
- This is a good chance to review the code changes that ng-micro-frontend has done for us.

## Voilà!

Visit http://localhost:4200 to see the micro frontend architecture in action.

- The browser back and forward buttons are working.
- Reloading the page on a specific route works fine as well.
- Taking a look at the network tab, you can see how lazy loading works.
- There's also this manifest file which tells us everything we need to know about each micro frontend.
- It defines the custom element name and bundle/style locations.
