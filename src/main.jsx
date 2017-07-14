/* react */
// import React, {Component, PropTypes} from 'react';
import React from 'react';
// import ReactDOM, {render} from 'react-dom';
import ReactDOM from 'react-dom';

/* sass */
// require('./sass/main');
import './sass/main';
// require('./sass/modules/main/main');
import './sass/modules/main/main';


/*--- 编译后，JSX表达成为JavaScript对象 ---*/

/*---------- QUICK START - Introducing JSX ----------*/

/**
 * @desc 最简单的例子.
 * @other HTML语言直接写在JavaScript语言之中, 不加任何引号, 这就是JSX的语法, 它允许HTML与JavaScript的混写.
 */

/* render */
// ReactDOM.render(
//     <h1>Hello, world!</h1>, document.getElementById('app')
// );



/**
 * @desc 一个简单的组件.
 */
// let element = (
//     <h1>
//         Hello, world!
//     </h1>
// );

/* render */
// ReactDOM.render(
//     element, document.getElementById('app')
// );



/**
 * @desc 一个简单的组件, 在组件中调用方法.
 * @other 下面代码体现了JSX的基本语法规则：遇到HTML标签（以 < 开头）, 就用HTML规则解析；遇到代码块（以 { 开头）, 就用JavaScript规.
 */
// const user = {
//     firstName: 'Harper',
//     lastName: 'Perez'
// };
//
// let formatName = (user) => {
//     return user.firstName + ' ' + user.lastName;
// };
//
// let element = (
//     <h2>
//         {formatName(user)}
//     </h2>
// );

/* render */
// ReactDOM.render(
//     element, document.getElementById('app')
// );



/**
 * @desc JSX编译后是javascript对象因此可以使用表达式.
 */
// const user = {
//     firstName: 'Long',
//     lastName: 'Cloud'
// };
//
// let formatName = (user) => {
//     return user.firstName + ' ' + user.lastName;
// };

/* return时单行可以不加圆括号(), 多行则需要放在圆括号()中 */
// let getGreeting = (user) => {
//     if (user) {
//         return <h3>Hello, {formatName(user)}!</h3>;
//     }
//
//     return (
//         <h3>
//             Hello, Stranger.
//         </h3>
//     );
// }
//
// let element = (
//     <div>
//         {getGreeting()}
//         {getGreeting(user)}
//     </div>
// );

/* render */
// ReactDOM.render(
//     element, document.getElementById('app')
// );



/**
 * @desc html属性、自定义属性.
 */
// import avatar from './assets/images/global/boss_22x22.png'; // 导入图片.
// const element1 = <div tabIndex="0" data-type="1">tabIndex attr</div>;
// const element2 = (
//     <img src={avatar} />
// );
//
// let element = (
//     <div>
//         {element1}
//         {element2}
//     </div>
// );
//
// ReactDOM.render(
//     element, document.getElementById('app')
// );



/**
 * @desc 避免xss攻击.
 */
// const title = escape('<a href="http://www.163.com">163</a>');
// const element = <h1>{title}</h1>; // This is safe:
//
// ReactDOM.render(
//     element, document.getElementById('app')
// );



/**
 * @desc 在jsx中class要写成className, 下面element1和element2最终结果是相同的.
 * @other React.createElement()会做语法检查提醒我们哪里写错了.
 */
// const element1 = (
//     <h1 className="greeting">
//         Hello, world!
//     </h1>
// );
//
// const element2 = React.createElement(
//     'h1',
//     {className: 'greeting'},
//     'Hello, world 1!'
// );
//
// let element = (
//     <div>
//         {element1}
//         {element2}
//     </div>
// );
//
// ReactDOM.render(
//     element, document.getElementById('app')
// );

/* 上面element2使用React.createElement()实际是创建了如下对象.
const element2 = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello, world'
    }
};
*/



/*---------- QUICK STARTR - endering Elements ----------*/

/* Elements是构建React应用程序的最小模块 */

/**
 * @desc 每一秒render一次整个页面. 实际的项目中我们只render一次整个页面，然后用状态来局部更新.
 * @other 虚拟DOM、MVVM.
 */
// let tick = () => {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//
//     ReactDOM.render(
//         element,
//         document.getElementById('app')
//     );
// }
//
// setInterval(tick, 1000);



/*---------- QUICK STARTR - Components and Props ----------*/

/**
 * @desc 最简单的组件是一个function.
 */
// const props = {
//     name: 'Long Cloud!'
// };
//
// let Welcome = (props) => {
//     return <h1>Hello, {props.name}</h1>;
// }
//
// let element = (
//     <div>
//         {Welcome(props)}
//     </div>
// );
//
// ReactDOM.render(
//     element, document.getElementById('app')
// );



/**
 * @desc 使用es6 class编写组件.
 *       welcome组件, 并给组件传递props.
 */
// import Welcome from './containers/examples/welcome';
// ReactDOM.render(
//     <Welcome name="Long Cloud" />, document.getElementById('app')
// );


/**
 * @desc 给组件传递props
 * @other Let's recap what happens in this example:
 *      1、We call ReactDOM.render() with the <Welcome name="Sara" /> element.
 *      2、React calls the Welcome component with {name: 'Sara'} as the props.
 *      3、Our Welcome component returns a <h1>Hello, Sara</h1> element as the result.
 *      4、React DOM efficiently updates the DOM to match <h1>Hello, Sara</h1>.
 * @caveat 组件名以大写字母开头.
 */

/* 实例1 */
// let Welcome = (props) => {
//     return <h1>Hello, {props.name}</h1>;
// }
//
// const element = <Welcome name="Sara" />;
//
// ReactDOM.render(
//     element,
//     document.getElementById('app')
// );

/* 实例2: 传递一个对象 */
// let Welcome = (props) => {
//     return <h1>Hello, {props.data.name}! age: {props.data.age}</h1>;
// }
//
// let data = {name: 'cloud long', age: 18};
// const element = <Welcome data={data} />;
//
// ReactDOM.render(
//     element,
//     document.getElementById('app')
// );


/**
 * @desc Components can refer to other components in their output.
 *       This lets us use the same component abstraction for any level of detail.
 *       A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.
 *
 * @other Components must return a single root element. This is why we added a <div> to contain all the <Welcome /> elements.
 */
/* 实例1 */
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }
//
// function App() {
//     return (
//         <div>
//             <Welcome name="Sara" />
//             <Welcome name="Cahal" />
//             <Welcome name="Edite" />
//         </div>
//     );
// }
//
// ReactDOM.render(
//     <App />,
//     document.getElementById('app')
// );



/**
 * @desc Extracting Components
 */
/* 实例1 */
// function formatDate(date) {
//     return date.toLocaleDateString();
// }
//
// function Comment(props) {
//     return (
//         <div className="Comment">
//             <div className="UserInfo">
//                 <img className="Avatar"
//                     src={props.author.avatarUrl}
//                     alt={props.author.name}
//                 />
//                 <div className="UserInfo-name">
//                     {props.author.name}
//                 </div>
//             </div>
//             <div className="Comment-text">
//                 {props.text}
//             </div>
//             <div className="Comment-date">
//                 {formatDate(props.date)}
//             </div>
//         </div>
//     );
// }
//
// const comment = {
//     date: new Date(),
//     text: 'I hope you enjoy learning React!',
//     author: {
//         name: 'Hello Kitty',
//         avatarUrl: 'http://placekitten.com/g/64/64'
//     }
// };
//
// ReactDOM.render(
//     <Comment
//         date={comment.date}
//         text={comment.text}
//         author={comment.author}
//     />,
//     document.getElementById('app')
// );

/* 实例2: 将实例1拆分成更小的组件 */
// function Avatar(props) {
//     return (
//         <img className="Avatar"
//             src={props.user.avatarUrl}
//             alt={props.user.name}
//         />
//     );
// }
//
// function UserInfo(props) {
//     return (
//         <div className="UserInfo">
//             <Avatar user={props.user} />
//             <div className="UserInfo-name">
//                 {props.user.name}
//             </div>
//         </div>
//     );
// }
//
// function formatDate(date) {
//     return date.toLocaleDateString();
// }
//
// function Comment(props) {
//     return (
//         <div className="Comment">
//             <UserInfo user={props.author} />
//             <div className="Comment-text">
//                 {props.text}
//             </div>
//             <div className="Comment-date">
//                 {formatDate(props.date)}
//             </div>
//         </div>
//     );
// }
//
// const comment = {
//     date: new Date(),
//     text: 'I hope you enjoy learning React!',
//     author: {
//         name: 'Hello Kitty',
//         avatarUrl: 'http://placekitten.com/g/64/64'
//     }
// };
//
// ReactDOM.render(
//     <Comment
//         date={comment.date}
//         text={comment.text}
//         author={comment.author}
//     />,
//     document.getElementById('app')
// );



/**
 * @desc Props are Read-Only
 */
// let Welcome = props => {
//     // props.name = 'Saber'; // error writing, props ares readonly.
//     return <h1>Hello, {props.name}</h1>
// };
//
// ReactDOM.render(
//     <Welcome name="Long Cloud" />,
//     document.getElementById('app')
// );



/*---------- QUICK START - State and Lifecycle ----------*/

/**
 * @desc 组件使用状态和生命周期制作时钟.
 *
 * @other Let's quickly recap what's going on and the order in which the methods are called:
 *
 *      1) When <Clock /> is passed to ReactDOM.render(), React calls the constructor of the Clock component.
 *         Since Clock needs to display the current time, it initializes this.state with an object including the current time. We will later update this state.
 *
 *      2) React then calls the Clock component's render() method. This is how React learns what should be displayed on the screen.
 *         React then updates the DOM to match the Clock's render output.
 *
 *      3) When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle hook.
 *         Inside it, the Clock component asks the browser to set up a timer to call tick() once a second.
 *
 *      4) Every second the browser calls the tick() method. Inside it, the Clock component schedules a UI update by calling setState() with an object containing the current time.
 *         Thanks to the setState() call, React knows the state has changed, and calls render() method again to learn what should be on the screen.
 *         This time, this.state.date in the render() method will be different, and so the render output will include the updated time. React updates the DOM accordingly.
 *
 *      5) If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle hook so the timer is stopped.
 */
// class Clock extends React.Component {
//     // use constructor init state.
//     constructor(props) {
//         super(props); // Class components should always call the base constructor with props.
//         this.state = {date: new Date()};
//     }
//
//     // 
//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(),
//             1000
//         );
//     }
//
//     // 
//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }
//
//     // 
//     tick() {
//         // Wrong: unable update state.
//         // this.state.date = new Date();
// 
//         // Correct: use this.setState() update state.
//         this.setState({
//             date: new Date()
//         });
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(
//     <Clock />,
//     document.getElementById('app')
// );



/**
 * @desc 计数器(State Updates May Be Asynchronous)
 */
// class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             counter: 0
//         };
//     }
// 
//     //
//     componentDidMount() {
//         this.CounterClear = setInterval(
//             () => this.add(),
//             1000
//         );
//     }
// 
//     //
//     componentWillUnmount() {
//         clearInterval(this.CounterClear);
//     }
// 
//     //
//     add() {
//         // Wrong
//         // this.setState({
//         //     counter: this.state.counter + step,
//         // });
// 
//         // Correct
//         let prevState = this.state;
//         let props = this.props;
//         this.setState((prevState, porps) => ({counter: Number(prevState.counter) + Number(props.step)}));
//     }
// 
//     render() {
//         return (
//             <div>
//                 计数: {this.state.counter}
//             </div>
//         );
//     }
// }
// 
// /* 每个组件都是独立的互不影响 */
// let App = () => {
//     return (
//         <div>
//             <Counter step="1" />
//             <Counter step="2" />
//             <Counter step="3" />
//         </div>
//     );
// };
// 
// ReactDOM.render(
//     <App />,
//     document.getElementById('app')
// );



/**
 * @desc state update meger
 * 
constructor(props) {
    super(props);
    this.state = {
        posts: [],
        comments: []
    };
}

componentDidMount() {
    fetchPosts().then(response => {
        this.setState({
            posts: response.posts
        });
    });

    fetchComments().then(response => {
        this.setState({
            comments: response.comments
        });
    });
}*/



/*---------- QUICK START - Handling Events ----------*/

/**
 * @desc 简单的事件处理.
 */
// function ActionLink() {
//     function handleClick(e) {
//         e.preventDefault();
//         console.log('The link was clicked.');
//     }
// 
//     return (
//         <a href="#" onClick={handleClick}>
//             Click me
//         </a>
//     );
// }
// 
// ReactDOM.render(
//     <ActionLink />,
//     document.getElementById('app')
// );



/**
 * @desc 使用es6 class定义组件并绑定事件(使用属性初始化语法)
 */
// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isToggleOn: true
//         };
// 
//         // This binding is necessary to make `this` work in the callback
//         this.handleClick = this.handleClick.bind(this); // using property initializer syntax.
//     }
// 
//     handleClick() {
//         console.log(this.props.desc);
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }));
//     }
// 
//     render() {
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn ? 'ON' : 'OFF'}
//             </button>
//         );
//     }
// }
// 
// ReactDOM.render(
//     <Toggle desc="别点我" />,
//     document.getElementById('app')
// );



/**
 * @desc 使用es6 class定义组件并绑定事件(使用箭头回调函数).
 *       If you aren't using property initializer syntax, you can use an arrow function in the callback
 *
 * other 推荐使用属性初始化语法.
 *       if this callback is passed as a prop to lower components, those components might do an extra re-rendering.
 *       We generally recommend binding in the constructor or using the property initializer syntax, to avoid this sort of performance problem
 */
// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isToggleOn: true
//         };
//     }
// 
//     handleClick(e) {
//         console.log(e, e.target);
//         console.log(this.props.desc);
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }));
//     }
// 
//     render() {
//         // use an arrow function in the callback: <button onClick={(e) => this.handleClick(e)}>
//         return (
//             <button onClick={(e) => this.handleClick(e)}>
//                 {this.state.isToggleOn ? 'ON' : 'OFF'}
//             </button>
//         );
//     }
// }
// 
// ReactDOM.render(
//     <Toggle desc="别点我" />,
//     document.getElementById('app')
// );



/*---------- QUICK START - Conditional Rendering ----------*/

/**
 * @desc 根据是否登录(条件)呈现不同的问候语.
 */
// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>;
// }
// 
// function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>;
// }
// 
// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
// 
//     if (isLoggedIn) {
//         return <UserGreeting />;
//     }
// 
//     return <GuestGreeting />;
// }
// 
// ReactDOM.render(
//     // Try changing to isLoggedIn={true}:
//     <Greeting isLoggedIn={false} />,
//     document.getElementById('app')
// );



/**
 * @desc 元素变量：登录、退出.
 */
// class LoginControl extends React.Component {
//     constructor(props) {
//         super(props);
// 
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
// 
//         this.state = {isLoggedIn: false};
//     }
// 
//     handleLoginClick() {
//         this.setState({isLoggedIn: true});
//     }
// 
//     handleLogoutClick() {
//         this.setState({isLoggedIn: false});
//     }
// 
//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
// 
//         let button = null; // 使用变量存储元素.
//         if (isLoggedIn) {
//             button = <LogoutButton onClick={this.handleLogoutClick} />;
//         } else {
//             button = <LoginButton onClick={this.handleLoginClick} />;
//         }
// 
//         return (
//             <div>
//                 <Greeting isLoggedIn={isLoggedIn} />
//                 {button}
//             </div>
//         );
//     }
// }
// 
// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>;
// }
// 
// function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>;
// }
// 
// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//         return <UserGreeting />;
//     }
//     return <GuestGreeting />;
// }
// 
// function LoginButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Login
//         </button>
//     );
// }
// 
// function LogoutButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Logout
//         </button>
//     );
// }
// 
// ReactDOM.render(
//     <LoginControl />,
//     document.getElementById('app')
// );



/**
 * @desc 在jsx的{}中可以写任何表达式.
 */
// function Mailbox(props) {
//     const unreadMessages = props.unreadMessages;
//     return (
//         <div>
//             <h1>Hello!</h1>
//             {unreadMessages.length > 0 &&
//                 <h2>
//                     You have {unreadMessages.length} unread messages.
//                 </h2>
//             }
//         </div>
//     );
// }
// 
// const messages = ['React', 'Re: React', 'Re:Re: React'];
// ReactDOM.render(
//     <Mailbox unreadMessages={messages} />,
//     document.getElementById('app')
// );



/**
 * @desc 使用三目运算符.
 */
// class LoginController extends React.Component {
//     constructor(props) {
//         super(props);
//         
//         this.state = {
//             isLoggedIn: false
//         }
//     }
//     
//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
//         return (
//             <div>
//                 The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
//             </div>
//         );
//     }
// }
// 
// ReactDOM.render(
//     <LoginController />,
//     document.getElementById('app')
// );



/**
 * @desc 使用算目运算符.
 */
// class LoginControl extends React.Component {
//     constructor(props) {
//         super(props);
// 
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
// 
//         this.state = {isLoggedIn: false};
//     }
// 
//     handleLoginClick() {
//         this.setState({isLoggedIn: true});
//     }
// 
//     handleLogoutClick() {
//         this.setState({isLoggedIn: false});
//     }
// 
//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
//         return (
//             <div>
//                 <Greeting isLoggedIn={isLoggedIn} />
//                 {isLoggedIn ? (
//                     <LogoutButton onClick={this.handleLogoutClick} />
//                 ) : (
//                     <LoginButton onClick={this.handleLoginClick} />
//                 )}
//             </div>
//         );
//     }
// }
// 
// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>;
// }
// 
// function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>;
// }
// 
// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//         return <UserGreeting />;
//     }
//     return <GuestGreeting />;
// }
// 
// function LoginButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Login
//         </button>
//     );
// }
// 
// function LogoutButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Logout
//         </button>
//     );
// }
// 
// ReactDOM.render(
//     <LoginControl />,
//     document.getElementById('app')
// );



/**
 * @desc
 */
function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true}
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('app')
);
















/* 常量调用 */
console.log(process.env.NODE_ENV);
console.log(__PROD__);
