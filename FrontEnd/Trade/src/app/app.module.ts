import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SignupsellerComponent } from './signupseller/signupseller.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { SellerComponent } from './seller/seller.component';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerService } from './services/seller.service';
import { UserService } from './services/user.service';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SellerhomeComponent } from './sellerhome/sellerhome.component';
import { ItemComponent } from './item/item.component';
import { ItemAddComponent } from './item/item-add/item-add.component';
import { ItemEditComponent } from './item/item-edit/item-edit.component';
import { ItemViewComponent } from './item/item-view/item-view.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { PipesPipe } from './pipes.pipe';
// import { FilterdataPipe } from './pipes/filterdata.pipe';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { Order } from './model/item.model';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemdetailService } from './services/itemdetail.service';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { OrderService } from './services/order.service';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { EditUserComponent } from './edit-user/edit-user.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SignupsellerComponent,
    UserLoginComponent,
    UserdisplayComponent,
    SellerLoginComponent,
    SellerhomeComponent,
    ItemComponent,
    ItemAddComponent,
    ItemEditComponent,
    ItemListComponent,
    ItemViewComponent,
  ItemDetailComponent,
  OrderDetailsComponent,
  OrderConfirmationComponent,
  FrontpageComponent,
  SellerComponent,
  BuyerComponent,
  AdminLoginComponent,
  AdminOrdersComponent,
    // FilterdataPipe,
   UserProfileComponent, 
   EditUserComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [SellerService, UserService,ItemdetailService,OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
