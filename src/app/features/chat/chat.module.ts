import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { HeaderComponent } from '../shared/header/header.component';
import { ChatComponent } from './chat/chat.component';
import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';


@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    HeaderComponent,
    SharedModulesModule
  ]
})
export class ChatModule { }
