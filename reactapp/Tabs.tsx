import * as React from 'react';

interface TabProps {
    title: string;
    content: JSX.Element;
    isActive?: boolean;
    hotKey?: string;
}

export class Tab extends React.Component<TabProps, any> {
    constructor() {
        super();
    }
    public render() {
        return <div>{this.props.content}</div>;
    }
}

export class Tabs extends React.Component<{children?: any}, {activeTabIndex?: number}> {
    private tabHeaders?: Element;

    constructor() {
        super();
        this.state = {};
    }

    public render() {
        let activeTabIndex = this.state.activeTabIndex || 0;
        let tabs = this.props.children || [] as Tab[];
        return (
            <div className='nav-tabs'>
            <ul className='nav-tabs' tabIndex={0} onKeyDown={ e => this.keyDown(e) } ref={t => { this.tabHeaders = t; }}>
                {tabs.map((tab: Tab, index: number) => (
                    <li className={index == activeTabIndex ? 'active' : ''} key={index} onClick={() => this.setActiveTab(index)}>{this.getTabHeader(tab.props.title, tab.props.hotKey)}</li>
                ))}
                </ul>
                <div className='nav-tab-content'>
                    {tabs[activeTabIndex].props.content }
                </div>
            </div>);
    };

    public componentDidMount() {
        document.addEventListener('keydown', e => this.globalKeyDown(e));
    }

    public componentWillUnmount() {
        document.removeEventListener('keydown', e => this.globalKeyDown(e as any));
    }

    getTabHeader(title: string, hotKey?: string): JSX.Element {
        let index: number;
        if (hotKey) {
            if ((index = title.toLowerCase().indexOf(hotKey.toLowerCase())) >= 0) {
                return <span>{title.substring(0, index)}<u>{title.substring(index, index + 1)}</u>{title.substring(index + 1)}</span>;
            } else {
                return <span>{title}&nbsp;(<u>{hotKey.toUpperCase()}</u>)</span>;
            }
        }
        return <span>{title}</span>;
    }

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

    globalKeyDown(event: KeyboardEvent) {
        let index: number;
        if (event.altKey && event.shiftKey) {
            if ((index = (this.props.children as Tab[] || [] as Tab[]).findIndex(t => event.key.localeCompare(t.props.hotKey, undefined, { sensitivity: 'accent' }) == 0)) >= 0) {
                this.setActiveTab(index);
                if (this.tabHeaders) {
                    (this.tabHeaders as any).focus();
                }
                event.preventDefault();
            }
        }
    }
}
