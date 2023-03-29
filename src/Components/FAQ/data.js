export const faqsData = [
    {
        id: 1,
        title: "1. How does react work?",
        desc: "React works through creating virtual DOM from real DOM.  Ex: When an element in the real DOM is changed, the DOM will re-render the element and all of its children. When it comes to building complex web applications with a lot of interactivity and state changes, this approach is slow and inefficient. By Virtual DOM we can specify what state we want the UI to be in, after which React makes it happen.After the virtual DOM is updated, React compares it to a snapshot of the virtual DOM taken just before the update, determines what element was changed, and then updates only that element on the real DOM. ",
    },
    {
        id: 2,
        title: "2. Difference between props and state?",
        desc: "The difference comes in which component the data are owned. State is owned locally and the component itself updates it. Props are owned and read-only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child. In Props : The Data is passed from one component to another. It is Immutable (cannot be modified). Props can be used with state and functional components. Props are read-only. On the other hand In State: The Data is passed within the component only.It is Mutable ( can be modified).State can be used only with the state components/class component. State is both read and write.",
    },
    {
        id: 3,
        title: "3. Uses of UseEffect besides loading data from API ?",
        desc: "1. UseEffect Runs After Every Render.   2.UseEffect Runs Only Once After Initial Render.  3.UseEffect Runs After State Value Changes (validating input field).  4.Running on state change:(live filtering).   5. Running on state change:(trigger animation on new array value).   6.UseEffect Runs After Props Value Change.",
    },
]