import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProductsComponent } from './products/products.component';

export const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page',
    },
    {
        path: 'sign-up',
        component: SignUpComponent,
        title: 'Sign-Up PAge',
    },
    {
        path : 'products',
        component: ProductsComponent,
        title: 'Products Page',
    }
];

export default routeConfig;