import React from 'react';
import List from "./List";
import Header from "./Header";
import Footer from "./Footer";



function TodoList() {
    return (
        <div className="todoList">
            <Header/>
            <List/>
            <Footer/>
        </div>
    );
}

export default TodoList;
