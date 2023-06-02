import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { FeedbackMessagesComponent } from './feedback-messages.component';

@NgModule({
  declarations: [FeedbackMessagesComponent],
  imports: [CommonModule, MatIconModule],
  providers: [FeedbackMessagesComponent],
})
export class FeedbackMessagesModule {}
