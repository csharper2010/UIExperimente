import * as React from 'react';

interface TabProps {
    title: string;
    content: JSX.Element;
    isActive?: boolean;
}

export class Tab extends React.Component<TabProps, any> {
    constructor() {
        super();
    }
    public render() {
        return <div>{this.props.content}</div>;
    }
}

function SetActiveTab(tabs: Tab[], index: number) {
    tabs.forEach((t, i) => {
        //t.setActive(i == index);
        t.props.isActive = i == index;
    });
}

export class Tabs extends React.Component<{children?: any}, {activeTabIndex?: number}> {
    constructor() {
        super();
        this.state = {};
    }

    public render() {
        let activeTabIndex = this.state.activeTabIndex || 0;
        let tabs = this.props.children || [] as Tab[];
        return (
            <div className='nav-tabs'>
            <ul className='nav-tabs' tabIndex={0} onKeyDown={ e => this.keyDown(e) }>
                {tabs.map((tab: Tab, index: number) => (
                    <li className={index == activeTabIndex ? "active" : ""} key={index} onClick={() => this.setActiveTab(index)}>{tab.props.title}</li>
                ))}
                </ul>
                <div className='nav-tab-content'>
                    {tabs[activeTabIndex].props.content }
                </div>
            </div>
    )};

    setActiveTab(index: number) {
        this.setState({ activeTabIndex: index });
    }

    keyDown(event: React.KeyboardEvent<HTMLUListElement>) {
        if (event.keyCode == 38 || event.keyCode == 37) {
            if (this.state.activeTabIndex > 0) {
                this.setActiveTab(this.state.activeTabIndex - 1);
            }
            event.preventDefault();
        } else if (event.keyCode == 40 || event.keyCode == 39) {
            if (this.state.activeTabIndex < this.props.children.length - 1) {
                this.setActiveTab(this.state.activeTabIndex + 1);
            }
            event.preventDefault();
        }
    }
}
