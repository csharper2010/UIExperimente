import { Component, Input, ContentChildren, QueryList } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ng-tab',
    template: `
        <div *ngIf="isActive" class="content">
            <ng-content></ng-content>
        </div>
    `
})
export class TabComponent {
    @Input()
    title: string;
    isActive: boolean = false;
}

