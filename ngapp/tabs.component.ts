import { Component, Input, ContentChildren, QueryList, ViewChild, ElementRef, AfterContentInit, HostListener } from '@angular/core';

import { TabComponent } from './tab.component';

@Component({
    moduleId: module.id,
    selector: 'ng-tabs',
    template: `
        <ul #tabHeader class="nav-tabs" (keydown)=handleKeyPress($event) tabindex="0">
            <li *ngFor="let tab of tabs; let i = index" (click)=selectTab(i) [class.active]="isActiveTab(i)"
                [innerHTML]="getTabHeader(tab.title, tab.hotKey)">
            </li>
        </ul>
        <div class="nav-tab-content">
            <ng-content></ng-content>
        </div>
        `
})
export class TabsComponent implements AfterContentInit {
    @Input('activeTab')
    activeTabIndex: number;

    @ContentChildren(TabComponent)
    tabs: QueryList<TabComponent>;

    @ViewChild('tabHeader')
    private tabHeader: ElementRef;

    constructor() {
        this.activeTabIndex = 0;
    }

    get activeTab(): TabComponent {
        return this.tabs.toArray()[this.activeTabIndex];
    }

    getTabHeader(title: string, hotKey?: string): string {
        let index: number;
        if (hotKey) {
            if ((index = title.toLowerCase().indexOf(hotKey.toLowerCase())) >= 0) {
                return title.substring(0, index) + '<u>' + title.substring(index, index + 1) + '</u>' + title.substring(index + 1);
            } else {
                return title + '&nbsp;(<u>' + hotKey.toUpperCase() + '</u>)';
            }
        }
        return title;
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

    @HostListener('document:keydown', ['$event'])
    windowKeyDown(event: KeyboardEvent) {
        let index: number;
        if (event.altKey && !event.shiftKey
            && (index = this.tabs.toArray().findIndex(t => event.key.localeCompare(t.hotKey, undefined, { sensitivity: 'accent' }) == 0)) >= 0) {
            this.selectTab(index);
            this.tabHeader.nativeElement.focus();
            event.preventDefault();
        }
    }
}