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

// export function Tabs(props: TabsProps): any {
//     let activeTabIndex = props.children.findIndex(t => t.props.isActive);
//     if (activeTabIndex < 0) {
//         activeTabIndex = 0;
//     };
//     SetActiveTab(props.children, activeTabIndex);
//     return (
//     <div className='nav-tabs'>
//         <ul className='nav-tabs'>
//         {
//             props.children.map((tab: any, index: number) => (
//                 <li className={index == activeTabIndex ? "active" : ""} key={index}>{tab.props.title}</li>
//             ))
//         }
//         </ul>
//         <div className='nav-tab-content'>
//             {props.children[activeTabIndex].props.content }
//         </div>
//     </div>
// )};
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
                <ul className='nav-tabs'>
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
}
