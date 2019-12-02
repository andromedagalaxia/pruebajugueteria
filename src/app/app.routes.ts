import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { InicioComponent } from './paginas/inicio/inicio.component';
import { ProductsComponent } from './paginas/products/products.component';
import { ProductComponent } from './paginas/product/product.component';
import { PagesNotFoundComponent } from './paginas/pages-not-found/pages-not-found.component';

const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'product', component: ProductComponent },
    { path: '**', component: PagesNotFoundComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
