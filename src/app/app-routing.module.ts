import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard, authGuardIsLogin } from './guard/auth.guard';
import { roleGuard } from './guard/role.guard';
import { ErrorpageComponent } from './features/errorpage/errorpage.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule), canActivate: [authGuardIsLogin] },
  { path: 'admin', loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule), canActivate: [authGuard, roleGuard] },
  { path: 'user', loadChildren: () => import('./features/user/user.module').then(m => m.UserModule), canActivate: [authGuard] },
  { path: 'chat', loadChildren: () => import('./features/chat/chat.module').then(m => m.ChatModule), canActivate: [authGuard] },
  { path: 'error', component: ErrorpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
