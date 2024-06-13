import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SignupsellerComponent } from './signupseller/signupseller.component';
import { UserLoginComponent } from './user-login/user-login.component';

import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SellerhomeComponent } from './sellerhome/sellerhome.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemAddComponent } from './item/item-add/item-add.component';
import { ItemViewComponent } from './item/item-view/item-view.component';
import { ItemEditComponent } from './item/item-edit/item-edit.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { SellerService } from './services/seller.service';
import { BuyerComponent } from './buyer/buyer.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { SellerComponent } from './seller/seller.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signupseller', component: SignupsellerComponent },
  { path: 'user-login', component: UserLoginComponent },
  {path:'seller-login',component:SellerLoginComponent},
  {path:'userdisplay',component:UserdisplayComponent},
  {path:'sellerhome',component:SellerhomeComponent},
  {path:'item-list',component:ItemListComponent},
  {path:'item-add',component:ItemAddComponent},
  {path:'item-view/:id',component:ItemViewComponent},
   {path:'item-edit/:id',component:ItemEditComponent},
{path:'item-detail',component:ItemDetailComponent},
{path:'order-details/:id',component:OrderDetailsComponent},
{path:'order-confirmation/:id',component:OrderConfirmationComponent},
{path:'seller',component:SellerComponent},
{path:'buyer',component:BuyerComponent},
{path:'frontpage',component:FrontpageComponent},
{path:'admin-login',component:AdminLoginComponent},
{path:'admin-orders',component:AdminOrdersComponent},
{path:'user-profile/:id',component:UserProfileComponent},
{ path: 'edit-user/:userId', component: EditUserComponent },
   { path: '', redirectTo: '/frontpage', pathMatch: 'full' } // Default route
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
