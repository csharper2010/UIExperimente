import { Component, Input, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

import { TabComponent } from './tab.component';

@Component({
    moduleId: module.id,
    selector: 'ng-tabs',
    template: `
        <ul class="nav-tabs">
            <li *ngFor="let tab of tabs; let i = index" (click)=selectTab(i) [class.active]="isActiveTab(i)">
                {{tab.title}}
            </li>
        </ul>
        <div class="nav-tab-content">
            <ng-content></ng-content>
        </div>
        `
})
export class TabsComponent implements AfterContentInit {
    @Input("activeTab")
    activeTabIndex: number;
    @ContentChildren(TabComponent)
    tabs: QueryList<TabComponent>;

    get activeTab(): TabComponent {
        return this.tabs.toArray()[this.activeTabIndex];
    }


    constructor() {
        this.activeTabIndex = 0;
    }

    ngAfterContentInit() {
        if (this.activeTabIndex >= this.tabs.length) {
            this.activeTabIndex = 0;
        }
        this.selectTab(this.activeTabIndex);
    }

    isActiveTab(index: number) {
        return index == this.activeTabIndex;
    }
    selectTab(index: number) {
        this.activeTabIndex = index;
        this.tabs.forEach((tab, index) => {
            tab.isActive = index == this.activeTabIndex;
        });
    }
}