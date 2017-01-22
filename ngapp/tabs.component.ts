import { Component, Input, ContentChildren, QueryList, ElementRef, AfterContentInit } from '@angular/core';

import { TabComponent } from './tab.component';

@Component({
    moduleId: module.id,
    selector: 'ng-tabs',
    template: `
        <ul class="nav-tabs" (keydown)=handleKeyPress($event) tabindex="0">
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

    constructor() {
        this.activeTabIndex = 0;
    }

    get activeTab(): TabComponent {
        return this.tabs.toArray()[this.activeTabIndex];
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

    selectTab(index: number, focusActiveTab?: boolean) {
        this.activeTabIndex = index;
        this.tabs.forEach((tab, index) => {
            tab.isActive = index == this.activeTabIndex;
        });
    }

    handleKeyPress(event: KeyboardEvent) {
        if (event.keyCode == 38 || event.keyCode == 37) {
            if (this.activeTabIndex > 0) {
                this.selectTab(this.activeTabIndex - 1);
            }
            event.preventDefault();
        } else if (event.keyCode == 40 || event.keyCode == 39) {
            if (this.activeTabIndex < this.tabs.length - 1) {
                this.selectTab(this.activeTabIndex + 1);
            }
            event.preventDefault();
        }
    }
}