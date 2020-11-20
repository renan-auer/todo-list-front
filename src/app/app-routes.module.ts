import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { 
        path: 'tarefas', 
        loadChildren: () => import('src/app/tarefas/tarefas.module').then(m => m.TarefasModule) 
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutesModule { }